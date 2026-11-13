// Configuração e Perguntas do Funil de Caminhada e Emagrecimento (Baseado no SlimKit Treadmill Survey)
const QUIZ_DATA = {
  config: {
    brandName: "Caminhada Fit",
    productTitle: "O Protocolo da Caminhada Metabólica de 28 Dias",
    productSubtitle: "Elimine a gordura profunda da barriga, reduza o cortisol e volte a usar suas roupas favoritas — sem correr e sem impacto nos joelhos",
    regularPrice: "R$ 197",
    salePrice: "R$ 67",
    discountPercentage: "66% OFF",
    guaranteeDays: 60,
    checkoutUrl: "https://seu-link-de-checkout.com",
  },

  steps: [
    // 1. Gênero
    {
      id: "gender",
      type: "single",
      title: "Qual é o seu sexo biológico?",
      subtitle: "Esta informação calibra o cálculo da sua taxa metabólica de repouso e o perfil hormonal de queima de gordura.",
      options: [
        {
          id: "female",
          label: "Feminino",
          sublabel: "Ajustado para o equilíbrio do estrogênio e queima de gordura nas zonas femininas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4a5 5 0 100 10 5 5 0 000-10zm0 10v6m-3-3h6"/></svg>`
        },
        {
          id: "male",
          label: "Masculino",
          sublabel: "Ajustado para preservação muscular e mobilização da gordura intra-abdominal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 4h4m0 0v4m0-4l-5 5a6 6 0 10-1.4 1.4L18 6"/></svg>`
        }
      ]
    },

    // 2. Principal Motivação (SlimKit signature step)
    {
      id: "motivation_trigger",
      type: "single",
      title: "O que te fez buscar uma mudança agora?",
      subtitle: "Entender seu momento atual nos ajuda a criar um ritmo realista para a sua rotina.",
      options: [
        {
          id: "stubborn_belly",
          label: "Quero eliminar a gordura localizada na barriga",
          sublabel: "Sinto que o abdômen não responde a dietas comuns",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8m-4-4h8"/></svg>`
        },
        {
          id: "tired_sluggish",
          label: "Sinto cansaço constante e falta de energia",
          sublabel: "Acordo sem disposição e sinto o corpo pesado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "body_changed_age",
          label: "Meu corpo mudou e meu metabolismo parece travado",
          sublabel: "O que funcionava aos 20 ou 30 anos não funciona mais hoje",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        },
        {
          id: "need_gentle_routine",
          label: "Preciso de um método leve que não machuque meus joelhos",
          sublabel: "Treinos pesados de academia não são adequados para mim",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        },
        {
          id: "doctor_advice",
          label: "Meu médico recomendou caminhar e perder peso",
          sublabel: "Para controlar colesterol, pressão ou glicose no sangue",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12h6m-3-3v6m-7 5h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
        }
      ]
    },

    // 3. Transformação Emocional Desejada (SlimKit "feelFirst")
    {
      id: "feel_first",
      type: "single",
      title: "Qual é a primeira melhora que você deseja sentir?",
      subtitle: "Os primeiros benefícios da caminhada metabólica aparecem antes mesmo da balança.",
      options: [
        {
          id: "feel_lighter",
          label: "Sentir o corpo mais leve e desinchado",
          sublabel: "Diminuir a retenção líquida e a sensação de inchaço",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`
        },
        {
          id: "wake_energy",
          label: "Acordar com mais disposição pela manhã",
          sublabel: "Eliminar a sensação de cansaço crônico ao levantar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "feel_confident",
          label: "Voltar a me sentir confiante nas roupas",
          sublabel: "Colocar qualquer peça de roupa sem precisar me esconder",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "less_stiff",
          label: "Sentir o corpo menos travado e sem dores articulares",
          sublabel: "Mais mobilidade para abaixar, subir escadas e brincar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>`
        }
      ]
    },

    // 4. Formato de Corpo Atual (SlimKit bodyType)
    {
      id: "body_shape",
      type: "single",
      title: "Como você definiria a estrutura do seu corpo?",
      subtitle: "A distribuição do tecido adiposo varia conforme o biotipo genético.",
      options: [
        {
          id: "shape_apple",
          label: "Formato Maçã",
          sublabel: "A maior parte do peso se acumula na barriga e no tronco, com pernas mais finas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "shape_pear",
          label: "Formato Pêra",
          sublabel: "O peso se concentra nos quadris, coxas e glúteos, com cintura mais estreita",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3c-2 3-4 6-4 10a6 6 0 0012 0c0-4-2-7-4-10z"/></svg>`
        },
        {
          id: "shape_rectangle",
          label: "Formato Retangular",
          sublabel: "Gordura distribuída por igual entre ombros, cintura e quadril",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "shape_hourglass",
          label: "Formato Ampulheta",
          sublabel: "Cintura bem marcada, com acúmulo equilibrado no busto e quadris",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6 3h12l-4 6 4 6H6l4-6-4-6z"/></svg>`
        }
      ]
    },

    // 5. Tipo Específico de Barriga (SlimKit signature step)
    {
      id: "belly_type",
      type: "single",
      title: "Qual é o aspecto principal da sua barriga?",
      subtitle: "Cada tipo de gordura abdominal exige uma intensidade específica na esteira para queimar com eficiência.",
      options: [
        {
          id: "stressed_belly",
          label: "Barriga de Estresse (Cortisol)",
          sublabel: "Gordura concentrada na região frontal, acompanhada de noites mal dormidas e rotina agitada.",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "hormonal_belly",
          label: "Barriga Hormonal / Menopausa",
          sublabel: "Surgiu recentemente ao redor da cintura, com a impressão de que o metabolismo reduziu o ritmo.",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v6"/></svg>`
        },
        {
          id: "bloated_belly",
          label: "Barriga Inchada / Digestiva",
          sublabel: "Mais lisa ao acordar pela manhã e estufada ou inchada ao final da tarde.",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18m-6-6l6 6 6-6"/></svg>`
        },
        {
          id: "postpartum_belly",
          label: "Barriga Pós-Parto ou Flácida",
          sublabel: "Região inferior mais macia após a gravidez ou após um período prolongado sem atividade.",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "general_belly",
          label: "Gordura Abdominal Geral",
          sublabel: "Acúmulo uniforme que foi aumentando gradualmente com os anos.",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        }
      ]
    },

    // 6. Zonas de Foco (Multi-seleção)
    {
      id: "target_zones",
      type: "multiple",
      title: "Quais regiões você mais deseja afinar e tonificar?",
      subtitle: "Selecione todas as opções que desejar. Ajustaremos os estímulos de inclinação para cada uma.",
      options: [
        {
          id: "zone_belly",
          label: "Abdômen e Cintura",
          sublabel: "Eliminar a pochete inferior e diminuir as medidas laterais",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "zone_legs",
          label: "Coxas e Bumbum",
          sublabel: "Firmar a parte posterior das pernas e levantar os glúteos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20m-6-10h12"/></svg>`
        },
        {
          id: "zone_arms",
          label: "Braços e Costas",
          sublabel: "Queimar a gordurinha do sutiã e tonificar a musculatura dos braços",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 12h16m-8-8v16"/></svg>`
        },
        {
          id: "zone_full",
          label: "Emagrecimento Geral",
          sublabel: "Secar e desinchar o corpo de forma harmônica e equilibrada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 7 6 2-6 2-2 7-2-7-6-2 6-2 2-7z"/></svg>`
        }
      ]
    },

    // 7. Intersticial Científico #1: O Segredo do Cortisol (SlimKit style)
    {
      id: "interstitial_cortisol",
      type: "interstitial",
      title: "Por que correr ou treinar até a exaustão falha com 87% das pessoas?",
      badge: "Evidência Fisiológica",
      content: {
        headline: "Exercícios de alto impacto disparam o cortisol em até 42%, forçando o corpo a RETER gordura na cintura.",
        bodyText: "Quando você se obriga a correr ou fazer treinos intensos que te deixam sem ar, as glândulas adrenais entram em alerta e liberam picos de cortisol. Esse hormônio quebra massa magra e sinaliza ao organismo para estocar gordura visceral de proteção ao redor dos órgãos vitais. <strong>A caminhada inclinada em velocidade moderada mantém a frequência cardíaca na Zona 2</strong>, onde mais de 80% da energia gasta vem diretamente das células de gordura, sem desgaste articular e sem provocar ataques de fome no final do dia.",
        statNumber: "3x",
        statLabel: "Mais gordura profunda da barriga oxidada do que na caminhada plana no mesmo tempo",
        quote: "“A caminhada inclinada é a ferramenta mais eficaz para quem tem mais de 35 anos: máximo gasto calórico, impacto zero nos joelhos e zero disparo de cortisol.”",
        author: "— Dr. Edward Harris, Fisiologista Clínico"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 8. Onde você prefere caminhar? (SlimKit treadmill options)
    {
      id: "walking_location",
      type: "single",
      title: "Onde você pretende realizar as caminhadas?",
      subtitle: "Nosso plano inclui a tabela exata de velocidade e inclinação para cada cenário.",
      options: [
        {
          id: "home_treadmill",
          label: "Esteira em casa ou Walking Pad (Esteira Portátil)",
          sublabel: "Comodidade máxima, sem desculpas de chuva ou trânsito, fazendo no seu próprio horário",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
        },
        {
          id: "gym_treadmill",
          label: "Esteira na academia",
          sublabel: "Acesso a esteiras profissionais com regulagem de alta inclinação (até 12-15%)",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        },
        {
          id: "outdoor_walking",
          label: "Ao ar livre (rua, parque ou condomínio)",
          sublabel: "Caminhadas na rua com aplicação das técnicas de subida e passada progressiva",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 7 6 2-6 2-2 7-2-7-6-2 6-2 2-7z"/></svg>`
        },
        {
          id: "mix_routine",
          label: "Uma combinação de esteira e ar livre",
          sublabel: "Flexibilidade para adaptar conforme a semana e o clima",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        }
      ]
    },

    // 9. Nível Atual de Caminhada (SlimKit fitnesLevel)
    {
      id: "walking_level",
      type: "single",
      title: "Como você avalia seu fôlego na caminhada atualmente?",
      subtitle: "Começar no ritmo correto é essencial para que o exercício seja prazeroso e não gere exaustão.",
      options: [
        {
          id: "level_beginner",
          label: "Iniciante",
          sublabel: "Sinto falta de ar após 10 a 15 minutos de caminhada contínua",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/></svg>`
        },
        {
          id: "level_intermediate",
          label: "Intermediário",
          sublabel: "Consigo caminhar de 20 a 30 minutos em ritmo moderado sem precisar parar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/></svg>`
        },
        {
          id: "level_advanced",
          label: "Avançado",
          sublabel: "Consigo caminhar mais de 30 minutos em ritmo acelerado e com subidas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>`
        }
      ]
    },

    // 10. Você já ouviu falar do método 12-3-30? (SlimKit 12-3-30 step)
    {
      id: "heard_12_3_30",
      type: "single",
      title: "Você já ouviu falar no famoso treino 12-3-30 na esteira?",
      subtitle: "Uma rotina que viralizou nos Estados Unidos por transformar corpos apenas caminhando na inclinação.",
      options: [
        {
          id: "tried_it",
          label: "Sim, já tentei mas achei muito pesado",
          sublabel: "A inclinação direta de 12% sobrecarregou minhas panturrilhas ou lombar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "heard_never_tried",
          label: "Já ouvi falar, mas nunca cheguei a praticar",
          sublabel: "Gostaria de aprender uma versão adaptada e segura para o meu nível",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "never_heard",
          label: "Nunca ouvi falar",
          sublabel: "Quero entender como funciona essa técnica de caminhada inclinada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        }
      ]
    },

    // 11. Cuidados Articulares e Posturais (SlimKit joint care step)
    {
      id: "joint_care",
      type: "single",
      title: "Você tem alguma sensibilidade ou dor articular?",
      subtitle: "Ajustamos a inclinação inicial para amortecer o peso corporal sobre as articulações.",
      options: [
        {
          id: "pain_knee",
          label: "Sensibilidade nos joelhos ou quadris",
          sublabel: "Usaremos uma passada curta com amortecimento pélvico",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "pain_back",
          label: "Incômodo ou aperto na região lombar",
          sublabel: "Incluiremos a postura com ativação abdominal que descarrega a coluna",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 12h16"/></svg>`
        },
        {
          id: "pain_feet",
          label: "Dores na sola dos pés ou fascite plantar",
          sublabel: "Orientação para aterrissagem pelo mediopé e calçado apropriado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>`
        },
        {
          id: "pain_none",
          label: "Sem dores articulares / Me sinto ótimo(a)",
          sublabel: "Pronto para iniciar as progressões normais de inclinação",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 12. Atividade no Dia a Dia (SlimKit typicalDay)
    {
      id: "typical_day",
      type: "single",
      title: "Como é a maior parte do seu dia a dia?",
      subtitle: "Para sabermos quanto de gasto calórico espontâneo (NEAT) você já possui.",
      options: [
        {
          id: "mostly_sitting",
          label: "Sentado(a) a maior parte do tempo",
          sublabel: "Trabalho em escritório, home office ou volante",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "on_my_feet",
          label: "Fico bastante em pé, mas sem exercícios estruturados",
          sublabel: "Comércio, tarefas domésticas, atendimento ou cuidados com a família",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20"/></svg>`
        },
        {
          id: "active_day",
          label: "Dia bastante ativo fisicamente",
          sublabel: "Caminho bastante ou exerço atividade com esforço físico contínuo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 13. Quantidade de Água Diária (SlimKit water intake step)
    {
      id: "water_intake",
      type: "single",
      title: "Quanta água você bebe em um dia normal?",
      subtitle: "A hidratação adequada acelera a lipólise (quebra de gordura) durante as caminhadas.",
      options: [
        {
          id: "water_low",
          label: "Menos de 2 copos (Tomo quase só café ou suco)",
          sublabel: "Seu metabolismo pode estar desidratado, retendo mais líquidos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v10m-4-4l4 4 4-4"/></svg>`
        },
        {
          id: "water_medium",
          label: "Entre 3 e 6 copos (Cerca de 1 litro)",
          sublabel: "Consumo moderado, mas com espaço para acelerar a queima",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>`
        },
        {
          id: "water_high",
          label: "Mais de 2 litros por dia",
          sublabel: "Excelente nível de hidratação celular",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 14. Padrão de Sono (SlimKit sleep step)
    {
      id: "sleep_quality",
      type: "single",
      title: "Como costuma ser a qualidade das suas noites de sono?",
      subtitle: "O sono ruim desregula os hormônios da fome (grelina e leptina), aumentando a vontade de beliscar doces.",
      options: [
        {
          id: "sleep_poor",
          label: "Durmo menos de 6 horas ou acordo cansado(a)",
          sublabel: "Noites agitadas, com dificuldade para desligar a mente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
        },
        {
          id: "sleep_fair",
          label: "Durmo de 6 a 7 horas, mas com despertares noturnos",
          sublabel: "Sono razoável, porém com quebras durante a madrugada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "sleep_good",
          label: "Durmo 7 a 8 horas de forma profunda e reparadora",
          sublabel: "Acordo descansado(a) e com o corpo revigorado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 15. Comportamento entre as Refeições (SlimKit between meals)
    {
      id: "eating_cravings",
      type: "single",
      title: "Como você se sente nos intervalos entre as refeições?",
      subtitle: "A caminhada inclinada modula a sensibilidade à insulina e reduz picos de fome descontrolada.",
      options: [
        {
          id: "craving_sweets",
          label: "Sinto vontade incontrolável de comer doces à tarde ou à noite",
          sublabel: "Geralmente associada a cansaço mental ou ansiedade",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "craving_snack",
          label: "Costumo beliscar sem perceber quando estou ansioso(a)",
          sublabel: "Fome emocional que não passa mesmo após comer",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "craving_heavy",
          label: "Sinto o estômago pesado e fico com sono após as refeições",
          sublabel: "Queda brusca de energia logo depois de almoçar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`
        },
        {
          id: "craving_balanced",
          label"Tenho energia equilibrada e como nas horas certas",
          sublabel: "Fome normal que surge apenas quando realmente preciso me alimentar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 16. Mudança Hormonal / Menopausa (SlimKit menopauseStage step)
    {
      id: "hormonal_stage",
      type: "single",
      title: "Você percebeu alguma mudança hormonal recente no seu corpo?",
      subtitle: "Quedas hormonais após os 35/40 anos mudam a forma como a gordura é estocada no abdômen.",
      options: [
        {
          id: "stage_peri",
          label: "Estou na perimenopausa ou menopausa",
          sublabel: "Calores, metabolismo mais lento e gordura acumulando na cintura",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "stage_slowdown",
          label: "Não estou na menopausa, mas sinto meu metabolismo mais lento",
          sublabel: "Ganho peso com muito mais facilidade do que antes",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        },
        {
          id: "stage_postpartum",
          label: "Pós-parto recente ou mudança de medicação",
          sublabel: "Corpo em fase de readaptação hormonal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "stage_normal",
          label: "Não percebi alterações hormonais relevantes",
          sublabel: "Apenas ganhei peso por sedentarismo ou excesso calórico",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 17. Quanto tempo diário você pode dedicar? (SlimKit workTime)
    {
      id: "daily_time",
      type: "single",
      title: "Quanto tempo por dia você consegue reservar para caminhar?",
      subtitle: "A regularidade diária é 5x mais importante do que treinos longos e espaçados.",
      options: [
        {
          id: "time_15_20",
          label: "15 a 20 minutos por dia",
          sublabel: "Sessões dinâmicas de ativação metabólica",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
          id: "time_25_35",
          label: "25 a 35 minutos por dia (Recomendado)",
          sublabel: "O tempo exato para atingir a zona de máxima queima de gordura visceral",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>`
        },
        {
          id: "time_40_plus",
          label: "40 minutos ou mais",
          sublabel: "Para quem tem mais tempo e deseja um gasto calórico elevado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 18. Ocasião Especial (SlimKit importantEvent)
    {
      id: "special_event",
      type: "single",
      title: "Você tem alguma data ou evento especial em mente?",
      subtitle: "Estudos comportamentais mostram que ter uma meta com data aumenta a adesão em 74%.",
      options: [
        {
          id: "event_vacation",
          label: "Férias, praia ou viagem próxima",
          sublabel: "Quero me sentir leve, sem vergonha de colocar biquíni ou roupas de verão",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "event_celebration",
          label: "Casamento, formatura ou festa importante",
          sublabel: "Quero entrar naquele vestido ou terno que ficou apertado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l4-4m-4 4l-4-4"/></svg>`
        },
        {
          id: "event_birthday",
          label: "Aniversário próximo ou nova década de vida",
          sublabel: "Um marco para inaugurar uma versão mais saudável de mim",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 7 6 2-6 2-2 7-2-7-6-2 6-2 2-7z"/></svg>`
        },
        {
          id: "event_myself",
          label: "Faço isso por mim mesmo(a)",
          sublabel: "Não tenho uma festa marcada, apenas cansei de adiar minha saúde",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        }
      ]
    },

    // 19. Intersticial de Prova Social Real (SlimKit testimonial step)
    {
      id: "interstitial_review",
      type: "interstitial",
      title: "Resultados Comprovados de Quem Começou a Caminhar",
      badge: "Avaliação 5 Estrelas",
      content: {
        headline: "“Eliminei 8,8 kg em 28 dias sem correr um metro sequer e sem passar fome.”",
        bodyText: "“Eu já tinha tentado de tudo: jejum intermitente, remédios para emagrecer e até crossfit, mas meus joelhos inflamavam e a barriga continuava lá. Quando descobri a técnica da caminhada inclinada em Zona 2, mudou tudo. Faço 25 minutos na esteira assistindo ao meu programa preferido. Já reduzi 7 centímetros de cintura e não tenho dor nenhuma!”",
        author: "— Patrícia Mendonça, 49 anos",
        verified: "Praticante Verificada do Método",
        rating: 5,
        statNumber: "94,2%",
        statLabel: "dos praticantes mantêm a rotina por mais de 3 meses por ser fácil, leve e sustentável"
      },
      buttonText: "Avançar para Minhas Medidas →"
    },

    // 20. Idade
    {
      id: "age",
      type: "number",
      title: "Qual é a sua idade?",
      subtitle: "A frequência cardíaca alvo para queima de gordura (Zona 2) muda conforme a idade.",
      min: 18,
      max: 85,
      defaultValue: 42,
      unit: "anos"
    },

    // 21. Altura (Centímetros)
    {
      id: "height",
      type: "height",
      title: "Qual é a sua altura?",
      subtitle: "Usada para calcular seu Índice de Massa Corporal (IMC) e o tamanho biomecânico da sua passada.",
      defaultUnit: "metric"
    },

    // 22. Peso Atual e Peso Meta
    {
      id: "weight",
      type: "weight_dual",
      title: "Qual é o seu peso atual e qual é o seu peso dos sonhos?",
      subtitle: "Definiremos uma progressão semanal gradual para garantir que o resultado seja permanente.",
      defaultUnit: "metric"
    }
  ]
};
