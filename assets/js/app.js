/**
 * MetabolicFit - Motor do Funil (Baseado na Receita Metabólica & Fiel ao SlimKit)
 */

(function () {
  "use strict";

  const state = {
    currentStepIndex: 0,
    answers: {},
    units: {
      height: "metric",
      weight: "metric",
    },
    metrics: {
      currentBmi: 0,
      targetBmi: 0,
      targetDate: "",
      daysToGoal: 21,
      kgToLose: 0,
    },
    utmParams: {},
  };

  const el = {
    progressBar: document.getElementById("quiz-progress-bar"),
    backBtn: document.getElementById("quiz-back-btn"),
    stepContainer: document.getElementById("step-container"),
    quizView: document.getElementById("quiz-view"),
    loaderView: document.getElementById("loader-view"),
    resultsView: document.getElementById("results-view"),
    emailView: document.getElementById("email-view"),
    offerView: document.getElementById("offer-view"),
  };

  function initUtmTracking() {
    const params = new URLSearchParams(window.location.search);
    const utms = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term",
      "utm_content", "adset_id", "c_id", "ad_id", "fbpxls",
    ];

    utms.forEach((key) => {
      if (params.has(key)) {
        state.utmParams[key] = params.get(key);
      }
    });

    try {
      sessionStorage.setItem("metabolic_utms", JSON.stringify(state.utmParams));
    } catch (e) {}
  }

  function getCheckoutUrl() {
    const base = QUIZ_DATA.config.checkoutUrl;
    try {
      const url = new URL(base, window.location.origin);
      Object.keys(state.utmParams).forEach((k) => {
        url.searchParams.set(k, state.utmParams[k]);
      });
      if (state.answers.email) {
        url.searchParams.set("email", state.answers.email);
      }
      return url.toString();
    } catch (e) {
      return base;
    }
  }

  function renderStep(index) {
    const totalSteps = QUIZ_DATA.steps.length;
    const step = QUIZ_DATA.steps[index];

    // Barra de progresso contínua sem mostrar números de etapas
    const pct = Math.min(96, Math.max(5, Math.round(((index + 1) / totalSteps) * 100)));
    if (el.progressBar) el.progressBar.style.width = `${pct}%`;

    if (el.backBtn) {
      if (index === 0) {
        el.backBtn.classList.add("opacity-0", "pointer-events-none");
      } else {
        el.backBtn.classList.remove("opacity-0", "pointer-events-none");
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    let html = "";

    if (step.type !== "interstitial") {
      html += `
        <div class="mb-6 text-center fade-in-step">
          <h2 class="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight leading-tight">
            ${step.title}
          </h2>
          ${step.subtitle ? `<p class="mt-2 text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">${step.subtitle}</p>` : ""}
        </div>
      `;
    }

    if (step.type === "single") {
      html += renderSingleStep(step);
    } else if (step.type === "multiple") {
      html += renderMultipleStep(step);
    } else if (step.type === "interstitial") {
      html += renderInterstitialStep(step);
    } else if (step.type === "number") {
      html += renderNumberStep(step);
    } else if (step.type === "height") {
      html += renderHeightStep(step);
    } else if (step.type === "weight_dual") {
      html += renderWeightDualStep(step);
    }

    el.stepContainer.innerHTML = html;
    bindStepEvents(step);
  }

  function renderSingleStep(step) {
    const selected = state.answers[step.id];
    let html = '<div class="space-y-3 max-w-lg mx-auto fade-in-step">';
    step.options.forEach((opt) => {
      const isChecked = selected === opt.id;
      html += `
        <button type="button" data-val="${opt.id}" class="opt-single-btn quiz-card w-full text-left flex items-center justify-between group ${isChecked ? "is-active" : ""}">
          <div class="flex items-center space-x-3.5">
            ${opt.icon ? `<div class="card-icon-circle">${opt.icon}</div>` : ""}
            <div>
              <div class="font-bold text-base text-slate-900 flex items-center gap-2">
                ${opt.label}
              </div>
              ${opt.sublabel ? `<p class="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">${opt.sublabel}</p>` : ""}
            </div>
          </div>
          <div class="radio-box">
            <div class="radio-inner-dot"></div>
          </div>
        </button>
      `;
    });
    html += "</div>";
    return html;
  }

  function renderMultipleStep(step) {
    const selectedArr = state.answers[step.id] || [];
    let html = '<div class="space-y-3 max-w-lg mx-auto fade-in-step">';
    step.options.forEach((opt) => {
      const isChecked = selectedArr.includes(opt.id);
      html += `
        <button type="button" data-val="${opt.id}" class="opt-multi-btn quiz-card w-full text-left flex items-center justify-between group ${isChecked ? "is-active" : ""}">
          <div class="flex items-center space-x-3.5">
            ${opt.icon ? `<div class="card-icon-circle">${opt.icon}</div>` : ""}
            <div>
              <div class="font-bold text-base text-slate-900">${opt.label}</div>
              ${opt.sublabel ? `<p class="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">${opt.sublabel}</p>` : ""}
            </div>
          </div>
          <div class="checkbox-box">
            <svg class="w-4 h-4 text-white ${isChecked ? "opacity-100" : "opacity-0"}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      `;
    });

    html += `
      <div class="pt-4">
        <button type="button" id="multi-next-btn" class="btn-action w-full text-base">
          Continuar →
        </button>
      </div>
    </div>`;
    return html;
  }

  function renderInterstitialStep(step) {
    const c = step.content;
    let starsHtml = "";
    if (c.rating) {
      starsHtml = Array(c.rating)
        .fill(
          '<svg class="w-4 h-4 text-amber-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
        )
        .join("");
    }

    return `
      <div class="max-w-md mx-auto text-center fade-in-step space-y-5">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          ${step.badge || "Revisão Científica"}
        </div>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          ${c.headline}
        </h2>

        ${
          c.statNumber
            ? `
          <div class="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 my-4 text-center">
            <div class="text-4xl font-black text-blue-700">
              ${c.statNumber}
            </div>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-xs mx-auto leading-relaxed">
              ${c.statLabel}
            </p>
          </div>
        `
            : ""
        }

        <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-left sm:text-center">
          ${c.bodyText}
        </p>

        ${
          c.quote
            ? `
          <div class="p-4 rounded-xl bg-white border border-slate-200 text-left shadow-sm">
            <p class="text-sm italic text-slate-700">${c.quote}</p>
            <p class="text-xs text-blue-700 font-semibold mt-2">${c.author}</p>
          </div>
        `
            : ""
        }

        ${
          c.rating
            ? `
          <div class="flex flex-col items-center gap-1 pt-1">
            <div class="flex gap-1">${starsHtml}</div>
            <p class="text-xs text-slate-600 font-medium">${c.author} · <span class="text-emerald-700 font-bold">${c.verified}</span></p>
          </div>
        `
            : ""
        }

        <div class="pt-2">
          <button type="button" id="interstitial-next-btn" class="btn-action w-full text-base">
            ${step.buttonText || "Continuar →"}
          </button>
        </div>
      </div>
    `;
  }

  function renderNumberStep(step) {
    const val = state.answers[step.id] || step.defaultValue || 40;
    return `
      <div class="max-w-md mx-auto text-center space-y-6 fade-in-step">
        <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div class="flex items-baseline justify-center gap-2">
            <span id="number-display" class="text-6xl font-black text-blue-700">${val}</span>
            <span class="text-slate-500 text-lg font-medium">${step.unit}</span>
          </div>

          <div class="mt-8 flex items-center justify-center gap-4">
            <button type="button" id="num-minus-btn" class="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-2xl font-bold text-slate-800 flex items-center justify-center transition-colors">
              -
            </button>
            <input type="range" id="num-range" min="${step.min}" max="${step.max}" value="${val}" class="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer">
            <button type="button" id="num-plus-btn" class="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-2xl font-bold text-slate-800 flex items-center justify-center transition-colors">
              +
            </button>
          </div>
        </div>

        <button type="button" id="number-next-btn" class="btn-action w-full text-base">
          Continuar →
        </button>
      </div>
    `;
  }

  function renderHeightStep(step) {
    const heightVal = state.answers.height?.cm || 168;

    return `
      <div class="max-w-md mx-auto text-center space-y-6 fade-in-step">
        <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <label class="block text-xs uppercase tracking-wider text-slate-500 mb-3 font-bold">Altura em Centímetros</label>
          <div class="flex items-center justify-center gap-2">
            <input type="number" id="height-cm" min="130" max="220" value="${heightVal}" class="w-40 py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-bold text-3xl text-center focus:border-blue-600 focus:bg-white focus:outline-none">
            <span class="text-xl font-bold text-slate-600">cm</span>
          </div>
          <p class="text-xs text-slate-400 mt-3">Exemplo: 168 cm (1 metro e 68 cm)</p>
        </div>

        <button type="button" id="height-next-btn" class="btn-action w-full text-base">
          Continuar →
        </button>
      </div>
    `;
  }

  function renderWeightDualStep(step) {
    const weightData = state.answers.weights || { current: 78, goal: 62 };

    return `
      <div class="max-w-md mx-auto text-center space-y-6 fade-in-step">
        <div class="space-y-4">
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase tracking-wider text-slate-500 font-bold">Seu Peso Atual</span>
              <span class="text-xs text-slate-400">Ponto de Partida</span>
            </div>
            <div class="flex items-center gap-3">
              <input type="number" id="weight-current" value="${weightData.current}" class="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-bold text-3xl focus:border-blue-600 focus:bg-white focus:outline-none">
              <span class="text-slate-600 text-xl font-bold w-10">kg</span>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border-2 border-emerald-500/40 shadow-sm text-left">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase tracking-wider text-emerald-700 font-bold">Seu Peso Desejado</span>
              <span class="text-xs text-emerald-600">Meta Saudável</span>
            </div>
            <div class="flex items-center gap-3">
              <input type="number" id="weight-goal" value="${weightData.goal}" class="w-full py-2.5 px-4 rounded-xl bg-emerald-50/40 border border-emerald-400 text-slate-900 font-bold text-3xl focus:border-emerald-600 focus:bg-white focus:outline-none">
              <span class="text-emerald-700 text-xl font-bold w-10">kg</span>
            </div>
          </div>
        </div>

        <p class="text-xs text-slate-500 leading-relaxed">
          🔒 Suas respostas são sigilosas e usadas para dosar os compostos da receita personalizada.
        </p>

        <button type="button" id="weight-next-btn" class="btn-action w-full text-base bg-emerald-600 hover:bg-emerald-700">
          Gerar Minha Receita e Diagnóstico ⚡
        </button>
      </div>
    `;
  }

  function bindStepEvents(step) {
    if (step.type === "single") {
      document.querySelectorAll(".opt-single-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.getAttribute("data-val");
          state.answers[step.id] = val;
          document.querySelectorAll(".opt-single-btn").forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          setTimeout(() => {
            goToNextStep();
          }, 150);
        });
      });
    } else if (step.type === "multiple") {
      const nextBtn = document.getElementById("multi-next-btn");
      if (!state.answers[step.id]) state.answers[step.id] = [];

      document.querySelectorAll(".opt-multi-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.getAttribute("data-val");
          const idx = state.answers[step.id].indexOf(val);
          if (idx > -1) {
            state.answers[step.id].splice(idx, 1);
          } else {
            state.answers[step.id].push(val);
          }
          renderStep(state.currentStepIndex);
        });
      });

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (state.answers[step.id].length === 0) {
            state.answers[step.id] = [step.options[0].id];
          }
          goToNextStep();
        });
      }
    } else if (step.type === "interstitial") {
      const nextBtn = document.getElementById("interstitial-next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", goToNextStep);
      }
    } else if (step.type === "number") {
      const display = document.getElementById("number-display");
      const range = document.getElementById("num-range");
      const minus = document.getElementById("num-minus-btn");
      const plus = document.getElementById("num-plus-btn");
      const nextBtn = document.getElementById("number-next-btn");

      let currentVal = parseInt(range.value, 10);
      const updateVal = (v) => {
        currentVal = Math.max(step.min, Math.min(step.max, v));
        range.value = currentVal;
        display.textContent = currentVal;
        state.answers[step.id] = currentVal;
      };

      range.addEventListener("input", (e) => updateVal(parseInt(e.target.value, 10)));
      minus.addEventListener("click", () => updateVal(currentVal - 1));
      plus.addEventListener("click", () => updateVal(currentVal + 1));
      nextBtn.addEventListener("click", () => {
        updateVal(currentVal);
        goToNextStep();
      });
    } else if (step.type === "height") {
      const nextBtn = document.getElementById("height-next-btn");
      nextBtn.addEventListener("click", () => {
        const cm = parseInt(document.getElementById("height-cm").value, 10) || 168;
        state.answers.height = { cm };
        goToNextStep();
      });
    } else if (step.type === "weight_dual") {
      const nextBtn = document.getElementById("weight-next-btn");
      nextBtn.addEventListener("click", () => {
        const cur = parseFloat(document.getElementById("weight-current").value) || 78;
        const goal = parseFloat(document.getElementById("weight-goal").value) || 62;
        state.answers.weights = { current: cur, goal: goal };
        finishQuizAndStartLoader();
      });
    }
  }

  function goToNextStep() {
    if (state.currentStepIndex < QUIZ_DATA.steps.length - 1) {
      state.currentStepIndex++;
      renderStep(state.currentStepIndex);
    } else {
      finishQuizAndStartLoader();
    }
  }

  function goToPreviousStep() {
    if (state.currentStepIndex > 0) {
      state.currentStepIndex--;
      renderStep(state.currentStepIndex);
    }
  }

  function calculateMetrics() {
    const w = state.answers.weights || { current: 78, goal: 62 };
    const h = state.answers.height || { cm: 168 };

    const heightM = h.cm / 100;
    const weightKg = w.current;
    const goalKg = w.goal;

    state.metrics.kgToLose = Math.max(2, Math.round(weightKg - goalKg));
    state.metrics.currentBmi = (weightKg / (heightM * heightM)).toFixed(1);
    state.metrics.targetBmi = (goalKg / (heightM * heightM)).toFixed(1);

    const weeksNeeded = Math.max(3, Math.round(state.metrics.kgToLose / 1.1));
    state.metrics.daysToGoal = weeksNeeded * 7;

    const targetDateObj = new Date();
    targetDateObj.setDate(targetDateObj.getDate() + state.metrics.daysToGoal);

    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    state.metrics.targetDate = `${targetDateObj.getDate()} de ${meses[targetDateObj.getMonth()]} de ${targetDateObj.getFullYear()}`;
  }

  function finishQuizAndStartLoader() {
    calculateMetrics();

    el.quizView.classList.add("hidden");
    el.loaderView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const loaderText = document.getElementById("loader-status-text");
    const loaderPct = document.getElementById("loader-percent");
    const loaderCircle = document.getElementById("loader-circle-progress");

    const stages = [
      { pct: 28, text: "Analisando seu perfil metabólico e peso meta..." },
      { pct: 58, text: "Calculando a concentração dos ingredientes da receita..." },
      { pct: 84, text: "Definindo o horário de ouro para ingestão matinal..." },
      { pct: 100, text: "Finalizando seu Protocolo Personalizado da Receita!" },
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        const item = stages[currentStage];
        if (loaderText) loaderText.textContent = item.text;
        if (loaderPct) loaderPct.textContent = `${item.pct}%`;
        if (loaderCircle) {
          const offset = 283 - (283 * item.pct) / 100;
          loaderCircle.style.strokeDashoffset = offset;
        }
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          showResultsScreen();
        }, 450);
      }
    }, 1000);
  }

  function showResultsScreen() {
    el.loaderView.classList.add("hidden");
    el.resultsView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const goalWeightDisplay = state.answers.weights ? `${state.answers.weights.goal} kg` : "62 kg";

    document.querySelectorAll(".res-target-date").forEach((n) => (n.textContent = state.metrics.targetDate));
    document.querySelectorAll(".res-current-bmi").forEach((n) => (n.textContent = state.metrics.currentBmi));
    document.querySelectorAll(".res-target-bmi").forEach((n) => (n.textContent = state.metrics.targetBmi));
    document.querySelectorAll(".res-goal-weight").forEach((n) => (n.textContent = goalWeightDisplay));
    document.querySelectorAll(".res-kg-loss").forEach((n) => (n.textContent = `${state.metrics.kgToLose} kg`));

    const proceedBtn = document.getElementById("results-proceed-btn");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", showEmailCaptureScreen);
    }
  }

  function showEmailCaptureScreen() {
    el.resultsView.classList.add("hidden");
    el.emailView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const form = document.getElementById("lead-capture-form");
    const emailInput = document.getElementById("lead-email-input");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (email && email.includes("@")) {
          state.answers.email = email;
          try {
            localStorage.setItem("metabolic_lead", JSON.stringify({ email, ...state.answers }));
          } catch (err) {}
          showOfferScreen();
        }
      });
    }
  }

  function showOfferScreen() {
    el.emailView.classList.add("hidden");
    el.offerView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const stickyBar = document.getElementById("sticky-offer-bar");
    if (stickyBar) {
      stickyBar.classList.remove("hidden");
    }

    startCountdownTimer(15 * 60);

    const checkoutUrl = getCheckoutUrl();
    document.querySelectorAll(".cta-checkout-btn").forEach((btn) => {
      btn.href = checkoutUrl;
    });

    document.querySelectorAll(".faq-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".faq-icon");
        const isOpen = !content.classList.contains("hidden");

        if (isOpen) {
          content.classList.add("hidden");
          if (icon) icon.style.transform = "rotate(0deg)";
        } else {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  function startCountdownTimer(seconds) {
    let timeLeft = seconds;
    const timerDisplays = document.querySelectorAll(".countdown-clock");

    const timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        return;
      }
      timeLeft--;

      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      const formatted = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

      timerDisplays.forEach((d) => (d.textContent = formatted));
    }, 1000);
  }

  function init() {
    initUtmTracking();

    if (el.backBtn) {
      el.backBtn.addEventListener("click", goToPreviousStep);
    }

    renderStep(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
