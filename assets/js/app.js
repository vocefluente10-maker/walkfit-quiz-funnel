/**
 * WalkFit Pro Funnel Application Engine
 * Highly inspired by SlimKit Treadmill / Walking Quiz
 */

(function () {
  "use strict";

  // State
  const state = {
    currentStepIndex: 0,
    answers: {},
    units: {
      height: "imperial", // 'imperial' (ft/in) or 'metric' (cm)
      weight: "imperial", // 'imperial' (lbs) or 'metric' (kg)
    },
    metrics: {
      currentBmi: 0,
      targetBmi: 0,
      targetDate: "",
      daysToGoal: 28,
      lbsToLose: 0,
    },
    utmParams: {},
  };

  // Cache DOM elements
  const el = {
    progressBar: document.getElementById("quiz-progress-bar"),
    progressText: document.getElementById("quiz-progress-text"),
    backBtn: document.getElementById("quiz-back-btn"),
    stepContainer: document.getElementById("step-container"),
    quizView: document.getElementById("quiz-view"),
    loaderView: document.getElementById("loader-view"),
    resultsView: document.getElementById("results-view"),
    emailView: document.getElementById("email-view"),
    offerView: document.getElementById("offer-view"),
  };

  // 1. Initialize UTM Tracking
  function initUtmTracking() {
    const params = new URLSearchParams(window.location.search);
    const utms = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "adset_id",
      "c_id",
      "ad_id",
      "fbp",
      "fbc",
    ];

    utms.forEach((key) => {
      if (params.has(key)) {
        state.utmParams[key] = params.get(key);
      }
    });

    // Save to sessionStorage
    sessionStorage.setItem("walkfit_utms", JSON.stringify(state.utmParams));
  }

  // 2. Build Checkout Link with UTMs
  function getCheckoutUrl() {
    const base = QUIZ_DATA.config.checkoutUrl;
    try {
      const url = new URL(base, window.location.origin);
      Object.keys(state.utmParams).forEach((k) => {
        url.searchParams.set(k, state.utmParams[k]);
      });
      // Append user info if available
      if (state.answers.email) {
        url.searchParams.set("email", state.answers.email);
      }
      return url.toString();
    } catch (e) {
      return base;
    }
  }

  // 3. Render Quiz Step
  function renderStep(index) {
    const totalSteps = QUIZ_DATA.steps.length;
    const step = QUIZ_DATA.steps[index];

    // Update Progress
    const pct = Math.round(((index + 1) / totalSteps) * 100);
    if (el.progressBar) el.progressBar.style.width = `${pct}%`;
    if (el.progressText) el.progressText.textContent = `${pct}% Completed`;

    // Back button visibility
    if (el.backBtn) {
      if (index === 0) {
        el.backBtn.classList.add("opacity-0", "pointer-events-none");
      } else {
        el.backBtn.classList.remove("opacity-0", "pointer-events-none");
      }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Build Step HTML
    let html = "";

    // Standard Header for questions
    if (step.type !== "interstitial") {
      html += `
        <div class="mb-6 text-center animate-fade-in">
          <span class="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 rounded-full">
            Question ${index + 1} of ${totalSteps}
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            ${step.title}
          </h2>
          ${step.subtitle ? `<p class="mt-2 text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed">${step.subtitle}</p>` : ""}
        </div>
      `;
    }

    // Body based on type
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

  // Sub-renderers
  function renderSingleStep(step) {
    const selected = state.answers[step.id];
    let html = '<div class="space-y-3 max-w-lg mx-auto animate-fade-in">';
    step.options.forEach((opt) => {
      const isChecked = selected === opt.id;
      html += `
        <button type="button" data-val="${opt.id}" class="opt-single-btn w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
        isChecked
          ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
          : "bg-gray-900/70 border-gray-800 text-gray-200 hover:border-gray-700 hover:bg-gray-850"
      }">
          <div class="flex items-center space-x-4">
            ${opt.icon ? `<div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800/80 group-hover:scale-105 transition-transform">${opt.icon}</div>` : ""}
            <div>
              <div class="font-semibold text-base sm:text-lg flex items-center gap-2">
                ${opt.label}
                ${opt.badge ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">${opt.badge}</span>` : ""}
              </div>
              ${opt.sublabel ? `<p class="text-xs sm:text-sm text-gray-400 mt-0.5 leading-snug">${opt.sublabel}</p>` : ""}
            </div>
          </div>
          <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            isChecked ? "border-blue-500 bg-blue-500" : "border-gray-600 group-hover:border-gray-500"
          }">
            <div class="w-2 h-2 rounded-full bg-white ${isChecked ? "opacity-100" : "opacity-0"}"></div>
          </div>
        </button>
      `;
    });
    html += "</div>";
    return html;
  }

  function renderMultipleStep(step) {
    const selectedArr = state.answers[step.id] || [];
    let html = '<div class="space-y-3 max-w-lg mx-auto animate-fade-in">';
    step.options.forEach((opt) => {
      const isChecked = selectedArr.includes(opt.id);
      html += `
        <button type="button" data-val="${opt.id}" class="opt-multi-btn w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
        isChecked
          ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
          : "bg-gray-900/70 border-gray-800 text-gray-200 hover:border-gray-700 hover:bg-gray-850"
      }">
          <div class="flex items-center space-x-4">
            ${opt.icon ? `<div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800/80 group-hover:scale-105 transition-transform">${opt.icon}</div>` : ""}
            <div>
              <div class="font-semibold text-base sm:text-lg">${opt.label}</div>
              ${opt.sublabel ? `<p class="text-xs sm:text-sm text-gray-400 mt-0.5 leading-snug">${opt.sublabel}</p>` : ""}
            </div>
          </div>
          <div class="w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            isChecked ? "border-blue-500 bg-blue-500" : "border-gray-600 group-hover:border-gray-500"
          }">
            <svg class="w-4 h-4 text-white ${isChecked ? "opacity-100" : "opacity-0"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
          </div>
        </button>
      `;
    });

    html += `
      <div class="pt-4">
        <button type="button" id="multi-next-btn" class="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none">
          Continue →
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
          '<svg class="w-5 h-5 text-amber-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
        )
        .join("");
    }

    return `
      <div class="max-w-md mx-auto text-center animate-fade-in space-y-6">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${step.badge || "Proven Result"}
        </div>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
          ${c.headline}
        </h2>

        ${
          c.statNumber
            ? `
          <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/30 to-indigo-900/20 border border-blue-500/20 my-4 text-center">
            <div class="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              ${c.statNumber}
            </div>
            <p class="text-xs sm:text-sm text-gray-300 mt-1 max-w-xs mx-auto leading-relaxed">
              ${c.statLabel}
            </p>
          </div>
        `
            : ""
        }

        <p class="text-sm sm:text-base text-gray-300 leading-relaxed text-left sm:text-center">
          ${c.bodyText}
        </p>

        ${
          c.quote
            ? `
          <div class="p-4 rounded-xl bg-gray-900/70 border border-gray-800 text-left">
            <p class="text-sm italic text-gray-300">${c.quote}</p>
            <p class="text-xs text-blue-400 font-semibold mt-2">${c.author}</p>
          </div>
        `
            : ""
        }

        ${
          c.rating
            ? `
          <div class="flex flex-col items-center gap-1">
            <div class="flex gap-1">${starsHtml}</div>
            <p class="text-xs text-gray-400 font-medium">${c.author} · <span class="text-emerald-400">${c.verified}</span></p>
          </div>
        `
            : ""
        }

        <div class="pt-2">
          <button type="button" id="interstitial-next-btn" class="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all transform active:scale-95">
            ${step.buttonText || "Continue →"}
          </button>
        </div>
      </div>
    `;
  }

  function renderNumberStep(step) {
    const val = state.answers[step.id] || step.defaultValue || 38;
    return `
      <div class="max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <div class="p-8 rounded-3xl bg-gray-900/80 border border-gray-800 shadow-2xl">
          <div class="flex items-baseline justify-center gap-2">
            <span id="number-display" class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">${val}</span>
            <span class="text-gray-400 text-lg font-medium">${step.unit}</span>
          </div>

          <div class="mt-8 flex items-center justify-center gap-4">
            <button type="button" id="num-minus-btn" class="w-14 h-14 rounded-2xl bg-gray-800 hover:bg-gray-700 active:scale-90 text-2xl font-bold text-white flex items-center justify-center transition-all border border-gray-700">
              -
            </button>
            <input type="range" id="num-range" min="${step.min}" max="${step.max}" value="${val}" class="w-full accent-blue-500 h-2 bg-gray-800 rounded-lg cursor-pointer">
            <button type="button" id="num-plus-btn" class="w-14 h-14 rounded-2xl bg-gray-800 hover:bg-gray-700 active:scale-90 text-2xl font-bold text-white flex items-center justify-center transition-all border border-gray-700">
              +
            </button>
          </div>
        </div>

        <button type="button" id="number-next-btn" class="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all transform active:scale-95">
          Continue →
        </button>
      </div>
    `;
  }

  function renderHeightStep(step) {
    const isImperial = state.units.height === "imperial";
    const heightData = state.answers.height || (isImperial ? { ft: 5, in: 6 } : { cm: 168 });

    return `
      <div class="max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <!-- Units Toggle -->
        <div class="inline-flex p-1 bg-gray-900 rounded-xl border border-gray-800">
          <button type="button" id="toggle-ft" class="px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
            isImperial ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }">FT / IN</button>
          <button type="button" id="toggle-cm" class="px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
            !isImperial ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }">CM</button>
        </div>

        <div class="p-8 rounded-3xl bg-gray-900/80 border border-gray-800 shadow-2xl">
          ${
            isImperial
              ? `
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Feet</label>
                <select id="height-ft" class="w-full py-3.5 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-bold text-xl text-center focus:border-blue-500 focus:outline-none">
                  ${[4, 5, 6, 7]
                    .map(
                      (f) =>
                        `<option value="${f}" ${heightData.ft == f ? "selected" : ""}>${f} ft</option>`
                    )
                    .join("")}
                </select>
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Inches</label>
                <select id="height-in" class="w-full py-3.5 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-bold text-xl text-center focus:border-blue-500 focus:outline-none">
                  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                    .map(
                      (i) =>
                        `<option value="${i}" ${heightData.in == i ? "selected" : ""}>${i} in</option>`
                    )
                    .join("")}
                </select>
              </div>
            </div>
          `
              : `
            <div>
              <label class="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Centimeters</label>
              <input type="number" id="height-cm" min="120" max="230" value="${heightData.cm || 168}" class="w-full py-3.5 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-bold text-2xl text-center focus:border-blue-500 focus:outline-none">
            </div>
          `
          }
        </div>

        <button type="button" id="height-next-btn" class="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all transform active:scale-95">
          Continue →
        </button>
      </div>
    `;
  }

  function renderWeightDualStep(step) {
    const isImperial = state.units.weight === "imperial";
    const weightData = state.answers.weights || (isImperial ? { current: 178, goal: 142 } : { current: 81, goal: 64 });
    const unitLabel = isImperial ? "lbs" : "kg";

    return `
      <div class="max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <!-- Units Toggle -->
        <div class="inline-flex p-1 bg-gray-900 rounded-xl border border-gray-800">
          <button type="button" id="toggle-lbs" class="px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
            isImperial ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }">LBS (US)</button>
          <button type="button" id="toggle-kg" class="px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
            !isImperial ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }">KG (Metric)</button>
        </div>

        <div class="space-y-4">
          <!-- Current Weight -->
          <div class="p-6 rounded-3xl bg-gray-900/80 border border-gray-800 shadow-2xl text-left">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase tracking-wider text-gray-400 font-bold">Current Weight</span>
              <span class="text-xs text-blue-400 font-medium">Starting Point</span>
            </div>
            <div class="flex items-center gap-3">
              <input type="number" id="weight-current" value="${weightData.current}" class="w-full py-3 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-extrabold text-3xl focus:border-blue-500 focus:outline-none">
              <span class="text-gray-400 text-lg font-bold w-12">${unitLabel}</span>
            </div>
          </div>

          <!-- Goal Weight -->
          <div class="p-6 rounded-3xl bg-gray-900/80 border border-blue-500/30 shadow-2xl text-left relative overflow-hidden">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase tracking-wider text-emerald-400 font-bold">Goal Weight</span>
              <span class="text-xs text-emerald-400/80 font-medium">Target Transformation</span>
            </div>
            <div class="flex items-center gap-3">
              <input type="number" id="weight-goal" value="${weightData.goal}" class="w-full py-3 px-4 rounded-xl bg-gray-800 border border-emerald-500/40 text-white font-extrabold text-3xl focus:border-emerald-400 focus:outline-none">
              <span class="text-emerald-400 text-lg font-bold w-12">${unitLabel}</span>
            </div>
          </div>
        </div>

        <p class="text-xs text-gray-400 leading-relaxed">
          🔒 Your private health metrics are strictly kept confidential and used solely to formulate your custom 28-day walking schedule.
        </p>

        <button type="button" id="weight-next-btn" class="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 shadow-xl shadow-emerald-500/20 transition-all transform active:scale-95">
          Generate My Plan Now ⚡
        </button>
      </div>
    `;
  }

  // Bind Events for Current Step
  function bindStepEvents(step) {
    if (step.type === "single") {
      document.querySelectorAll(".opt-single-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.getAttribute("data-val");
          state.answers[step.id] = val;
          // Visual click feedback then advance
          btn.classList.add("scale-[0.98]", "bg-blue-600/30");
          setTimeout(() => {
            goToNextStep();
          }, 180);
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
        nextBtn.addEventListener("click", () => {
          goToNextStep();
        });
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
      const toggleFt = document.getElementById("toggle-ft");
      const toggleCm = document.getElementById("toggle-cm");
      const nextBtn = document.getElementById("height-next-btn");

      toggleFt.addEventListener("click", () => {
        state.units.height = "imperial";
        renderStep(state.currentStepIndex);
      });
      toggleCm.addEventListener("click", () => {
        state.units.height = "metric";
        renderStep(state.currentStepIndex);
      });

      nextBtn.addEventListener("click", () => {
        if (state.units.height === "imperial") {
          const ft = parseInt(document.getElementById("height-ft").value, 10);
          const inVal = parseInt(document.getElementById("height-in").value, 10);
          state.answers.height = { ft, in: inVal };
        } else {
          const cm = parseInt(document.getElementById("height-cm").value, 10);
          state.answers.height = { cm };
        }
        goToNextStep();
      });
    } else if (step.type === "weight_dual") {
      const toggleLbs = document.getElementById("toggle-lbs");
      const toggleKg = document.getElementById("toggle-kg");
      const nextBtn = document.getElementById("weight-next-btn");

      toggleLbs.addEventListener("click", () => {
        state.units.weight = "imperial";
        renderStep(state.currentStepIndex);
      });
      toggleKg.addEventListener("click", () => {
        state.units.weight = "metric";
        renderStep(state.currentStepIndex);
      });

      nextBtn.addEventListener("click", () => {
        const cur = parseFloat(document.getElementById("weight-current").value) || 165;
        const goal = parseFloat(document.getElementById("weight-goal").value) || 135;
        state.answers.weights = { current: cur, goal: goal };
        finishQuizAndStartLoader();
      });
    }
  }

  // Navigation Logic
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

  // Calculate Metrics (BMI, Timeline, Deficit)
  function calculateMetrics() {
    let weightKg = 70;
    let goalKg = 60;
    let heightM = 1.68;

    const w = state.answers.weights || { current: 175, goal: 140 };
    if (state.units.weight === "imperial") {
      weightKg = w.current * 0.453592;
      goalKg = w.goal * 0.453592;
      state.metrics.lbsToLose = Math.max(5, Math.round(w.current - w.goal));
    } else {
      weightKg = w.current;
      goalKg = w.goal;
      state.metrics.lbsToLose = Math.max(5, Math.round((w.current - w.goal) * 2.20462));
    }

    const h = state.answers.height || { ft: 5, in: 6 };
    if (state.units.height === "imperial") {
      const totalInches = (h.ft || 5) * 12 + (h.in || 6);
      heightM = totalInches * 0.0254;
    } else {
      heightM = (h.cm || 168) / 100;
    }

    state.metrics.currentBmi = (weightKg / (heightM * heightM)).toFixed(1);
    state.metrics.targetBmi = (goalKg / (heightM * heightM)).toFixed(1);

    // Calculate Target Date (approx 1.7 lbs per week on structured walking + low-cortisol habit)
    const weeksNeeded = Math.max(4, Math.round(state.metrics.lbsToLose / 1.7));
    state.metrics.daysToGoal = weeksNeeded * 7;

    const targetDateObj = new Date();
    targetDateObj.setDate(targetDateObj.getDate() + state.metrics.daysToGoal);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    state.metrics.targetDate = `${monthNames[targetDateObj.getMonth()]} ${targetDateObj.getDate()}, ${targetDateObj.getFullYear()}`;
  }

  // 4. Loader & Algorithmic Calculation Screen
  function finishQuizAndStartLoader() {
    calculateMetrics();

    // Hide Quiz, Show Loader
    el.quizView.classList.add("hidden");
    el.loaderView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const loaderText = document.getElementById("loader-status-text");
    const loaderPct = document.getElementById("loader-percent");
    const loaderCircle = document.getElementById("loader-circle-progress");

    const stages = [
      { pct: 24, text: "Analyzing your metabolic profile & age group..." },
      { pct: 52, text: "Calculating optimal Zone-2 incline intervals..." },
      { pct: 78, text: "Tailoring 28-day schedule to protect joints..." },
      { pct: 100, text: "Finalizing your custom Walking Blueprint!" },
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
        }, 600);
      }
    }, 1200);
  }

  // 5. Results & Diagnostic Dashboard
  function showResultsScreen() {
    el.loaderView.classList.add("hidden");
    el.resultsView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Populate Dynamic Result Values
    const goalWeightDisplay = state.answers.weights
      ? `${state.answers.weights.goal} ${state.units.weight === "imperial" ? "lbs" : "kg"}`
      : "Ideal Weight";

    document.querySelectorAll(".res-target-date").forEach((n) => (n.textContent = state.metrics.targetDate));
    document.querySelectorAll(".res-current-bmi").forEach((n) => (n.textContent = state.metrics.currentBmi));
    document.querySelectorAll(".res-target-bmi").forEach((n) => (n.textContent = state.metrics.targetBmi));
    document.querySelectorAll(".res-goal-weight").forEach((n) => (n.textContent = goalWeightDisplay));
    document.querySelectorAll(".res-lbs-loss").forEach((n) => (n.textContent = `${state.metrics.lbsToLose} lbs`));

    // Bind Proceed to Email / Offer
    const proceedBtn = document.getElementById("results-proceed-btn");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", () => {
        showEmailCaptureScreen();
      });
    }
  }

  // 6. Email Lead Capture Screen
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
          // Store lead
          try {
            localStorage.setItem("walkfit_lead", JSON.stringify({ email, ...state.answers }));
          } catch (err) {}

          showOfferScreen();
        }
      });
    }
  }

  // 7. Offer & High-Converting Sales Page
  function showOfferScreen() {
    el.emailView.classList.add("hidden");
    el.offerView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show sticky mobile bar
    const stickyBar = document.getElementById("sticky-offer-bar");
    if (stickyBar) {
      stickyBar.classList.remove("hidden");
    }

    // Initialize 15-Minute Countdown Timer
    startCountdownTimer(15 * 60);

    // Setup Dynamic Checkout Links
    const checkoutUrl = getCheckoutUrl();
    document.querySelectorAll(".cta-checkout-btn").forEach((btn) => {
      btn.href = checkoutUrl;
      btn.addEventListener("click", () => {
        // Pixel track InitiateCheckout if present
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            value: 19.0,
            currency: "USD",
            content_name: QUIZ_DATA.config.productTitle,
          });
        }
      });
    });

    // Setup FAQ Accordions
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

  // Countdown Timer
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

  // 8. Bootstrapping
  function init() {
    initUtmTracking();

    if (el.backBtn) {
      el.backBtn.addEventListener("click", goToPreviousStep);
    }

    renderStep(0);
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
