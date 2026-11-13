// Configuração e Perguntas do Funil de Caminhada e Emagrecimento (Inspirado no SlimKit)
const QUIZ_DATA = {
  config: {
    brandName: "Caminhada Fit",
    productTitle: "O Protocolo da Caminhada Metabólica de 28 Dias",
    productSubtitle: "Elimine a gordura localizada da barriga, acelere o metabolismo e reduza de 2 a 3 números de calça — sem dietas malucas e sem impacto nos joelhos",
    regularPrice: "R$ 197",
    salePrice: "R$ 67",
    discountPercentage: "66% OFF",
    guaranteeDays: 60,
    checkoutUrl: "https://seu-link-de-checkout.com", // Substitua pelo link da CartPanda, Hotmart, Kiwify, Stripe, etc.
  },

  steps: [
    // 1. Gênero
    {
      id: "gender",
      type: "single",
      title: "Qual é o seu sexo biológico?",
      subtitle: "Usamos essa informação para calibrar sua taxa metabólica basal e a resposta hormonal aos treinos de caminhada.",
      options: [
        {
          id: "female",
          label: "Feminino",
          sublabel: "Ajustado para o equilíbrio do estrogênio e queima de gordura feminina",
          icon: `<svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a5 5 0 100 10 5 5 0 000-10zm0 10v6m-3-3h6"/></svg>`
        },
        {
          id: "male",
          label: "Masculino",
          sublabel: "Ajustado para estímulo de testosterona e queima de gordura abdominal",
          icon: `<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h4m0 0v4m0-4l-5 5a6 6 0 10-1.4 1.4L18 6"/></svg>`
        }
      ]
    },

    // 2. Objetivo Principal
    {
      id: "primary_goal",
      type: "single",
      title: "Qual é o seu objetivo número #1 agora?",
      subtitle: "Escolha sua maior prioridade para ajustarmos a velocidade e a inclinação ideal da sua caminhada.",
      options: [
        {
          id: "lose_belly",
          label: "Perder a barriga teimosa e gordura visceral",
          sublabel: "Focar na gordura profunda do abdômen sem elevar o hormônio do estresse",
          badge: "Mais Escolhido",
          icon: `<svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "overall_drop",
          label: "Eliminar de 5 a 20+ kg no corpo todo",
          sublabel: "Redução de peso constante e sem o temido efeito sanfona",
          icon: `<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
        },
        {
          id: "tone_lower",
          label: "Tonificar pernas, coxas e glúteos",
          sublabel: "Enrijecer a musculatura inferior através de tiros com inclinação",
          icon: `<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
        },
        {
          id: "energy_health",
          label: "Ter mais energia e eliminar dores nas juntas",
          sublabel: "Movimento suave e de baixo impacto para proteger joelhos e coluna",
          icon: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        }
      ]
    },

    // 3. Zonas-Alvo (Multi-seleção)
    {
      id: "target_zones",
      type: "multiple",
      title: "Em quais áreas do corpo você quer focar?",
      subtitle: "Você pode selecionar mais de uma opção. A rotina terá estímulos específicos para cada uma.",
      options: [
        {
          id: "belly_zone",
          label: "Barriga e Cintura",
          sublabel: "Reduzir o 'pochete' e afinar as medidas laterais",
          icon: `<span class="text-xl">🎯</span>`
        },
        {
          id: "thighs_glutes",
          label: "Coxas e Bumbum",
          sublabel: "Fimar a parte de trás das pernas e levantar o glúteo",
          icon: `<span class="text-xl">🦵</span>`
        },
        {
          id: "arms_back",
          label: "Costas e Braços",
          sublabel: "Queimar a gordurinha do sutiã e firmar o 'tchauzinho'",
          icon: `<span class="text-xl">💪</span>`
        },
        {
          id: "full_body",
          label: "Emagrecimento Geral",
          sublabel: "Secar o corpo de forma harmônica e uniforme",
          icon: `<span class="text-xl">✨</span>`
        }
      ]
    },

    // 4. Tipo de Barriga (Assinatura SlimKit)
    {
      id: "belly_type",
      type: "single",
      title: "Como você descreveria o formato da sua barriga?",
      subtitle: "Tipos diferentes de gordura abdominal respondem a frequências cardíacas diferentes.",
      options: [
        {
          id: "stressed_belly",
          label: "Barriga de Estresse (Cortisol)",
          sublabel: "Gordura concentrada na frente do abdômen, comum em quem tem noites de sono ruins ou dias agitados.",
          icon: `<span class="text-2xl">⚡</span>`
        },
        {
          id: "hormonal_belly",
          label: "Barriga Hormonal / Menopausa",
          sublabel: "Apareceu nos últimos anos ao redor da cintura, com a sensação de que o metabolismo ficou lento.",
          icon: `<span class="text-2xl">🌸</span>`
        },
        {
          id: "bloated_belly",
          label: "Barriga Inchada / Digestiva",
          sublabel: "Mais lisa ao acordar pela manhã e estufada/inchada no final do dia.",
          icon: `<span class="text-2xl">💧</span>`
        },
        {
          id: "postpartum_belly",
          label: "Barriga Pós-Parto ou Pós-Mudança de Vida",
          sublabel: "Região inferior mais flácida após a gravidez ou após um longo período sedentário.",
          icon: `<span class="text-2xl">👶</span>`
        },
        {
          id: "general_belly",
          label: "Barriga Uniforme / Geral",
          sublabel: "Gordura distribuída por igual que foi acumulando aos poucos.",
          icon: `<span class="text-2xl">⚖️</span>`
        }
      ]
    },

    // 5. Quebra de Objeção Científica (SlimKit Interstitial)
    {
      id: "interstitial_cortisol",
      type: "interstitial",
      title: "Por que correr ou fazer treinos exaustivos falha com 87% das pessoas?",
      badge: "Fato Científico",
      content: {
        headline: "Exercícios de alto impacto disparam o cortisol em até 42%, forçando o corpo a RETER gordura na barriga.",
        bodyText: "Quando você se submete a corridas pesadas ou treinos exaustivos, o corpo entra em estado de sobrevivência e libera picos de cortisol. Isso quebra massa magra e armazena gordura visceral no abdômen. <strong>A caminhada inclinada em ritmo constante mantém seu corpo na chamada Zona 2 de queima pura de gordura</strong>, sem estressar as articulações e sem provocar aquela fome incontrolável depois do treino.",
        statNumber: "3x",
        statLabel: "Mais gordura profunda da barriga queimada em comparação à caminhada plana na mesma duração",
        quote: "“A caminhada inclinada é o método definitivo após os 35 anos: queima calórica elevada, impacto zero nos joelhos e zero disparo de cortisol.”",
        author: "— Dr. E. Harris, Fisiologista do Exercício"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 6. Onde prefere caminhar
    {
      id: "walking_environment",
      type: "single",
      title: "Onde você pretende fazer suas caminhadas?",
      subtitle: "Nosso plano traz treinos exatos tanto para esteira quanto para esteiras portáteis (walking pad) e caminhada ao ar livre.",
      options: [
        {
          id: "home_treadmill",
          label: "Esteira em casa ou Walking Pad",
          sublabel: "Máxima comodidade, sem desculpas de chuva ou horário, controle total de velocidade",
          icon: `<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
        },
        {
          id: "gym_treadmill",
          label: "Esteira na academia",
          sublabel: "Acesso a esteiras profissionais com regulagem de inclinação elevada (até 12-15%)",
          icon: `<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        },
        {
          id: "outdoors",
          label: "Ao ar livre (rua, parque ou condomínio)",
          sublabel: "Ar puro, ladeiras naturais e caminhada com ritmo progressivo",
          icon: `<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
        },
        {
          id: "mix",
          label: "Uma mistura de esteira e ar livre",
          sublabel: "Flexibilidade para adaptar conforme a sua rotina e o clima da semana",
          icon: `<svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        }
      ]
    },

    // 7. Articulações e limitações
    {
      id: "joint_status",
      type: "single",
      title: "Você sente algum desconforto nas articulações?",
      subtitle: "O método de 28 dias inclui ajustes ergonômicos para não sobrecarregar nenhuma articulação.",
      options: [
        {
          id: "knee_pain",
          label: "Sensibilidade nos joelhos ou quadris",
          sublabel: "Ajustaremos a cadência e evitaremos impactos secos",
          icon: `<span class="text-xl">🦴</span>`
        },
        {
          id: "lower_back",
          label: "Rigidez ou incômodo na lombar",
          sublabel: "Incluiremos correções de postura de caminhada e alinhamento pélvico",
          icon: `<span class="text-xl">🧘</span>`
        },
        {
          id: "plantar",
          label: "Dores na sola dos pés ou fascite plantar",
          sublabel: "Foco na transição suave do calcanhar para a ponta do pé",
          icon: `<span class="text-xl">👟</span>`
        },
        {
          id: "none_healthy",
          label: "Nenhum incômodo / Estou 100% bem",
          sublabel: "Pode iniciar as séries de inclinação e ritmo padrão imediatamente",
          icon: `<span class="text-xl">💪</span>`
        }
      ]
    },

    // 8. Passos diários
    {
      id: "daily_steps",
      type: "single",
      title: "Aproximadamente quantos passos você dá por dia?",
      subtitle: "Seja sincero(a). Isso nos permite calcular sua queima diária atual sem sobrecarregar sua rotina.",
      options: [
        {
          id: "under_3k",
          label: "Menos de 3.000 passos (Fico quase o dia todo sentado/a)",
          sublabel: "Começaremos com uma progressão suave de apenas 15 minutos diários",
          icon: `<span class="text-xl">🛋️</span>`
        },
        {
          id: "3k_6k",
          label: "3.000 a 6.000 passos (Movimento leve no dia a dia)",
          sublabel: "A faixa ideal para acelerar a queima com caminhadas estruturadas",
          icon: `<span class="text-xl">🚶</span>`
        },
        {
          id: "6k_10k",
          label: "6.000 a 10.000 passos (Rotina ativa)",
          sublabel: "Pronto para tiros intervalados na esteira e método japonês de caminhada",
          icon: `<span class="text-xl">🏃</span>`
        },
        {
          id: "over_10k",
          label: "Mais de 10.000 passos (Muito ativo/a)",
          sublabel: "Foco em otimizar o ritmo cardíaco em vez de apenas acumular distância",
          icon: `<span class="text-xl">⚡</span>`
        }
      ]
    },

    // 9. Tempo disponível
    {
      id: "workout_time",
      type: "single",
      title: "Quanto tempo por dia você pode dedicar à caminhada?",
      subtitle: "A consistência diária vence treinos longos. Até 20 minutos de caminhada na inclinação geram resultados impressionantes.",
      options: [
        {
          id: "time_15_20",
          label: "15 a 20 minutos por dia",
          sublabel: "Sessões curtas e super eficientes de estímulo metabólico",
          icon: `<span class="text-xl">⏱️</span>`
        },
        {
          id: "time_25_35",
          label: "25 a 35 minutos por dia (Recomendado)",
          sublabel: "A janela de ouro comprovada para queima máxima de gordura visceral",
          badge: "Melhores Resultados",
          icon: `<span class="text-xl">⭐</span>`
        },
        {
          id: "time_40_plus",
          label: "40 minutos ou mais por dia",
          sublabel: "Caminhadas prolongadas para quem tem mais tempo livre",
          icon: `<span class="text-xl">🔥</span>`
        }
      ]
    },

    // 10. Maior obstáculo do passado
    {
      id: "past_obstacle",
      type: "single",
      title: "Qual foi o seu maior obstáculo para emagrecer no passado?",
      subtitle: "Identificar isso evita que você caia nas mesmas armadilhas durante os 28 dias.",
      options: [
        {
          id: "burnout",
          label: "Dietas restritivas e academias lotadas me desanimaram rápido",
          sublabel: "A caminhada é prazerosa, fácil de sustentar e te deixa disposto o dia todo",
          icon: `<span class="text-xl">😫</span>`
        },
        {
          id: "cravings",
          label: "Vontade incontrolável de comer doces ou beliscar à noite",
          sublabel: "Caminhar na Zona 2 estabiliza a glicose e equilibra o hormônio da fome",
          icon: `<span class="text-xl">🍫</span>`
        },
        {
          id: "slow_results",
          label: "Sentia que meu metabolismo estava travado e os quilos não saíam",
          sublabel: "A inclinação na esteira recruta mais músculos e eleva o gasto calórico em repouso",
          icon: `<span class="text-xl">🐢</span>`
        },
        {
          id: "busy_schedule",
          label: "Falta de tempo com trabalho, família e compromissos",
          sublabel: "Treinos simples que você faz enquanto escuta música, podcasts ou vê uma série",
          icon: `<span class="text-xl">📅</span>`
        }
      ]
    },

    // 11. Ocasião especial
    {
      id: "target_timeline",
      type: "single",
      title: "Existe alguma data ou evento especial em mente?",
      subtitle: "Ter um objetivo com data aumenta a taxa de sucesso do protocolo em 74%.",
      options: [
        {
          id: "vacation_beach",
          label: "Férias, praia ou viagem próxima",
          sublabel: "Quero me sentir leve, desinchado(a) e com roupas mais confortáveis",
          icon: `<span class="text-xl">🏖️</span>`
        },
        {
          id: "wedding_reunion",
          label: "Casamento, formatura ou encontro de família",
          sublabel: "Quero me sentir radiante e confiante ao tirar fotos",
          icon: `<span class="text-xl">💍</span>`
        },
        {
          id: "birthday_milestone",
          label: "Aniversário próximo ou nova fase de vida",
          sublabel: "Um recomeço com mais saúde, disposição e autoestima renovada",
          icon: `<span class="text-xl">🎂</span>`
        },
        {
          id: "just_myself",
          label: "Apenas por mim mesmo(a)",
          sublabel: "Cansei de me sentir indisposto(a) e quero voltar a gostar do que vejo no espelho",
          icon: `<span class="text-xl">✨</span>`
        }
      ]
    },

    // 12. Prova Social Humanizada
    {
      id: "interstitial_review",
      type: "interstitial",
      title: "Histórias Reais de Quem Transformou a Saúde Caminhando",
      badge: "Depoimento Real",
      content: {
        headline: "“Eliminei 9,4 kg em 28 dias sem pisar em uma academia barulhenta e sem passar fome.”",
        bodyText: "“Aos 47 anos, meu médico avisou que meus triglicerídeos estavam subindo e a gordura da barriga só aumentava. Achei que teria que correr 5 km por dia ou passar fome com folhas. Quando comecei esse protocolo de caminhada inclinada na esteira de casa, a diferença foi absurda. Meus joelhos não doem e diminuí dois números da calça!”",
        author: "— Mariana R., 47 anos",
        verified: "Aluna Verificada do Protocolo",
        rating: 5,
        statNumber: "94,2%",
        statLabel: "dos praticantes relataram perda de peso consistente e mais energia já nas primeiras duas semanas"
      },
      buttonText: "Personalizar Meu Plano →"
    },

    // 13. Idade
    {
      id: "age",
      type: "number",
      title: "Qual é a sua idade?",
      subtitle: "O metabolismo muda com as décadas. Adaptamos a cadência ideal da caminhada para a sua faixa etária.",
      min: 18,
      max: 85,
      defaultValue: 42,
      unit: "anos"
    },

    // 14. Altura (Metros / Centímetros)
    {
      id: "height",
      type: "height",
      title: "Qual é a sua altura?",
      subtitle: "Necessário para calcular o seu Índice de Massa Corporal (IMC) e o tamanho da sua passada.",
      defaultUnit: "metric"
    },

    // 15. Peso Atual e Meta (KG)
    {
      id: "weight",
      type: "weight_dual",
      title: "Qual é o seu peso atual e qual é o seu peso dos sonhos?",
      subtitle: "Calculamos uma estimativa realista e segura de perda de peso sem risco para a sua saúde.",
      defaultUnit: "metric"
    }
  ]
};
