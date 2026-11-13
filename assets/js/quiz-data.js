// Configuração e Perguntas do Funil de Caminhada e Emagrecimento (47 Etapas Inspiradas no SlimKit)
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
      subtitle: "Esta informação calibra o cálculo da sua taxa metabólica de repouso e a resposta hormonal ao treino.",
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
          sublabel: "Ajustado para estímulo de testosterona e queima de gordura visceral profunda",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 4h4m0 0v4m0-4l-5 5a6 6 0 10-1.4 1.4L18 6"/></svg>`
        }
      ]
    },

    // 2. Principal Motivação
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

    // 3. Objetivo #1
    {
      id: "primary_goal",
      type: "single",
      title: "Qual é a sua principal meta nos próximos 28 dias?",
      subtitle: "Definir seu objetivo prioritário nos ajuda a calibrar a intensidade dos treinos.",
      options: [
        {
          id: "goal_drop_belly",
          label: "Perder barriga e diminuir medidas da cintura",
          sublabel: "Reduzir o estufamento e secar a gordura abdominal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "goal_weight_loss",
          label: "Emagrecer de 5 a 20 kg no corpo todo",
          sublabel: "Perda constante de gordura corporal sem efeito sanfona",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
        },
        {
          id: "goal_tone_legs",
          label: "Enrijecer pernas, coxas e bumbum",
          sublabel: "Tonificar a musculatura com subidas na esteira",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20m-6-10h12"/></svg>`
        },
        {
          id: "goal_vitality",
          label: "Recuperar a saúde, o sono e a vitalidade",
          sublabel: "Acordar com energia e sem dores crônicas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        }
      ]
    },

    // 4. Última vez no peso ideal
    {
      id: "last_time_fit",
      type: "single",
      title: "Quando foi a última vez que você esteve no seu peso ideal?",
      subtitle: "Isso indica o quanto a sua memória metabólica ainda está ativa.",
      options: [
        {
          id: "fit_under_1yr",
          label: "Há menos de 1 ano",
          sublabel: "O ganho de peso foi recente e o corpo responde muito rápido",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "fit_1_3yr",
          label: "Entre 1 e 3 anos atrás",
          sublabel: "Mudanças de rotina ou estresse causaram o ganho gradual",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        },
        {
          id: "fit_3_5yr",
          label: "Entre 3 e 5 anos atrás",
          sublabel: "O metabolismo se acostumou com o peso atual e precisa de estímulo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "fit_over_5yr",
          label: "Há mais de 5 anos ou nunca estive",
          sublabel: "Faremos uma reativação metabólica passo a passo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 5. Sentimento no espelho / roupas
    {
      id: "mirror_feeling",
      type: "single",
      title: "Como você se sente ao se olhar no espelho ultimamente?",
      subtitle: "A forma como você se enxerga influencia diretamente a sua constância.",
      options: [
        {
          id: "mirror_avoid",
          label: "Evito me olhar e me escondo em roupas largas",
          sublabel: "Sinto incômodo com o reflexo e perdi a vontade de me arrumar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`
        },
        {
          id: "mirror_frustrated",
          label: "Fico frustrado(a) ao ver que as roupas não servem mais",
          sublabel: "A sensação de aperto na cintura estraga o meu dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9.5 15.5a3.5 3.5 0 015 0"/></svg>`
        },
        {
          id: "mirror_ready",
          label: "Incomodado(a), mas 100% determinado(a) a virar o jogo",
          sublabel: "Cheguei no meu limite e estou pronto(a) para seguir o plano",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 6. Impacto na vida
    {
      id: "life_impact",
      type: "single",
      title: "O que mais mudaria na sua vida ao atingir seu peso ideal?",
      subtitle: "O emagrecimento verdadeiro vai muito além do número na balança.",
      options: [
        {
          id: "impact_confidence",
          label: "Minha autoestima e confiança explodiriam",
          sublabel: "Voltaria a gostar de tirar fotos e me sentir atraente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "impact_energy",
          label: "Teria muito mais energia para aproveitar o dia e a família",
          sublabel: "Disposição para brincar, passear e trabalhar sem cansaço crônico",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "impact_health",
          label: "Me livraria do medo de doenças e exames alterados",
          sublabel: "Glicose, colesterol e pressão totalmente normalizados",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12h6m-3-3v6m-7 5h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
        }
      ]
    },

    // 7. Estrutura Corporal (Body Shape)
    {
      id: "body_shape",
      type: "single",
      title: "Como você definiria a estrutura do seu corpo?",
      subtitle: "A genética influencia onde o excesso calórico é armazenado primeiro.",
      options: [
        {
          id: "shape_apple",
          label: "Formato Maçã",
          sublabel: "Maior parte do peso na barriga e tronco, com pernas mais finas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "shape_pear",
          label: "Formato Pêra",
          sublabel: "Gordura concentrada nos quadris, glúteos e coxas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3c-2 3-4 6-4 10a6 6 0 0012 0c0-4-2-7-4-10z"/></svg>`
        },
        {
          id: "shape_rectangle",
          label: "Formato Retangular",
          sublabel: "Distribuição por igual entre ombros, cintura e quadril",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "shape_hourglass",
          label: "Formato Ampulheta",
          sublabel: "Cintura marcada com proporções equilibradas no busto e quadril",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6 3h12l-4 6 4 6H6l4-6-4-6z"/></svg>`
        }
      ]
    },

    // 8. Tipo de Barriga (Belly Type)
    {
      id: "belly_type",
      type: "single",
      title: "Qual é o aspecto principal da sua barriga?",
      subtitle: "Cada tipo de gordura abdominal exige uma intensidade específica para queimar.",
      options: [
        {
          id: "stressed_belly",
          label: "Barriga de Estresse (Cortisol)",
          sublabel: "Gordura concentrada na frente do abdômen, ligada a noites mal dormidas e ansiedade",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "hormonal_belly",
          label: "Barriga Hormonal / Menopausa",
          sublabel: "Surgiu ao redor da cintura nos últimos anos com a sensação de metabolismo lento",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v6"/></svg>`
        },
        {
          id: "bloated_belly",
          label: "Barriga Inchada / Digestiva",
          sublabel: "Mais lisa ao acordar pela manhã e estufada/inchada no final do dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18m-6-6l6 6 6-6"/></svg>`
        },
        {
          id: "postpartum_belly",
          label: "Barriga Pós-Parto ou Flácida",
          sublabel: "Região inferior mais macia após a gravidez ou período sedentário",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "general_belly",
          label: "Gordura Abdominal Geral",
          sublabel: "Acúmulo uniforme que aumentou gradualmente com os anos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        }
      ]
    },

    // 9. Zonas de Foco (Multi-seleção)
    {
      id: "target_zones",
      type: "multiple",
      title: "Quais regiões você mais deseja afinar e tonificar?",
      subtitle: "Você pode selecionar mais de uma opção. Incluiremos estímulos específicos para cada uma.",
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
          sublabel: "Firmar a parte de trás das pernas e empinar os glúteos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20m-6-10h12"/></svg>`
        },
        {
          id: "zone_arms",
          label: "Braços e Costas",
          sublabel: "Queimar a gordurinha do sutiã e firmar a musculatura dos braços",
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

    // 10. Ponto mais difícil
    {
      id: "hardest_spot",
      type: "single",
      title: "Onde você sente que a gordura é mais teimosa para sair?",
      subtitle: "A gordura 'teimosa' possui maior densidade de receptores alfa-2, que só respondem à Zona 2.",
      options: [
        {
          id: "spot_lower_belly",
          label: "Na parte inferior do umbigo (pochete)",
          sublabel: "Mesmo perdendo peso no rosto ou pernas, ela teima em ficar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "spot_love_handles",
          label: "Nos flancos laterais (pneuzinhos da cintura)",
          sublabel: "Aparecem marcando na calça jeans ou roupas mais justas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 12h16"/></svg>`
        },
        {
          id: "spot_inner_thighs",
          label: "Na parte interna das coxas e culote",
          sublabel: "Assaduras ao caminhar e sensação de atrito entre as pernas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20"/></svg>`
        },
        {
          id: "spot_back_bra",
          label: "Nas costas, abaixo da linha do sutiã",
          sublabel: "Dobrinhas que marcam nas blusas e roupas de costas abertas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6 4h12M6 20h12"/></svg>`
        }
      ]
    },

    // 11. Intersticial Científico 1: Cortisol
    {
      id: "interstitial_cortisol",
      type: "interstitial",
      title: "Por que correr ou treinar até a exaustão falha com 87% das pessoas?",
      badge: "Fato Científico",
      content: {
        headline: "Exercícios de alto impacto disparam o cortisol em até 42%, forçando o corpo a RETER gordura na cintura.",
        bodyText: "Quando você se obriga a correr ou fazer treinos pesados que te deixam sem ar, o corpo entra em alerta e libera picos de cortisol. Esse hormônio quebra massa magra e sinaliza ao organismo para estocar gordura visceral de proteção ao redor do abdômen. <strong>A caminhada inclinada em ritmo moderado mantém a frequência cardíaca na Zona 2</strong>, onde mais de 80% da energia vem diretamente das células de gordura, sem impacto nos joelhos e sem provocar fome incontrolável depois.",
        statNumber: "3x",
        statLabel: "Mais gordura profunda da barriga oxidada do que na caminhada plana no mesmo tempo",
        quote: "“A caminhada inclinada é o método definitivo após os 35 anos: máximo gasto calórico, impacto zero nas articulações e zero disparo de cortisol.”",
        author: "— Dr. Edward Harris, Fisiologista Clínico"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 12. O que tentou no último ano
    {
      id: "past_attempts",
      type: "single",
      title: "O que você já tentou no último ano para perder peso?",
      subtitle: "Para sabermos quais métodos o seu corpo já experimentou recentemente.",
      options: [
        {
          id: "attempt_restrictive_diet",
          label: "Dietas restritivas (Low-carb, Cetogênica, Jejum)",
          sublabel: "Funcionaram por um tempo, mas foram impossíveis de manter",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "attempt_gym_cardio",
          label: "Academia, musculação pesada ou aulas de dança",
          sublabel: "Fiquei com dores no corpo e desanimei com a falta de tempo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/></svg>`
        },
        {
          id: "attempt_meds_shakes",
          label: "Remédios emagrecedores, chás ou shakes",
          sublabel: "Perdi peso no início mas recuperei tudo logo depois",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18"/></svg>`
        },
        {
          id: "attempt_nothing",
          label: "Quase nada / Estou começando agora do zero",
          sublabel: "Procurando um método leve e definitivo para começar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 13. Motivo de desistência no passado
    {
      id: "dropout_reason",
      type: "single",
      title: "O que mais te fez parar ou desanimar no passado?",
      subtitle: "Identificar o motivo real garante que o plano de caminhada seja 100% à prova de desistência.",
      options: [
        {
          id: "drop_hunger",
          label: "A fome incontrolável e a vontade de comer doces à noite",
          sublabel: "Passava o dia regrado(a) e atacava a geladeira antes de dormir",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "drop_exhaustion",
          label: "Cansaço extremo e dores nas juntas no dia seguinte",
          sublabel: "O exercício me deixava moído(a) e sem energia para trabalhar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "drop_time",
          label: "Falta de tempo para ir até uma academia e treinar 1h",
          sublabel: "Trabalho, família e casa tomavam todo o meu dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
          id: "drop_slow",
          label: "Resultados lentos demais que me desmotivaram",
          sublabel: "Muito esforço para quase nenhuma mudança na balança",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        }
      ]
    },

    // 14. Efeito Sanfona
    {
      id: "yo_yo_effect",
      type: "single",
      title: "Você já passou pelo temido efeito sanfona?",
      subtitle: "Perder peso rápido e recuperar tudo logo em seguida desregula o ponto de ajuste metabólico.",
      options: [
        {
          id: "yoyo_frequent",
          label: "Sim, vivo no efeito sanfona há vários anos",
          sublabel: "Já perdi e ganhei os mesmos 5 a 10 kg repetidas vezes",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        },
        {
          id: "yoyo_once_twice",
          label: "Aconteceu uma ou duas vezes recentemente",
          sublabel: "Após um período de estresse ou mudança brusca de rotina",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "yoyo_steady_gain",
          label: "Não / Apenas fui engordando aos poucos e não consigo emagrecer",
          sublabel: "O peso subiu lentamente ao longo dos últimos anos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
        }
      ]
    },

    // 15. Relação com a Balança
    {
      id: "scale_frequency",
      type: "single",
      title: "Com que frequência você costuma se pesar?",
      subtitle: "A retenção hídrica oscila diariamente e a balança nem sempre reflete a perda de gordura.",
      options: [
        {
          id: "scale_daily",
          label: "Todos os dias (costumo ficar ansioso/a com o número)",
          sublabel: "Uma variação de gramas afeta o meu humor no dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "scale_weekly",
          label: "Uma vez por semana ou de vez em quando",
          sublabel: "Apenas para acompanhar se estou no caminho certo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
        },
        {
          id: "scale_never",
          label: "Raramente / Tenho medo ou evito a balança",
          sublabel: "Prefiro me guiar pelo caimento das roupas no corpo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`
        }
      ]
    },

    // 16. Intersticial de Confiança 2
    {
      id: "interstitial_habit",
      type: "interstitial",
      title: "A Regra dos 28 Dias: Por que a Caminhada Funciona Onde a Academia Falhou",
      badge: "Neurociência do Hábito",
      content: {
        headline: "Seu cérebro precisa de 21 a 28 dias para transformar uma atividade em piloto automático.",
        bodyText: "Treinos pesados ativam a amígdala cerebral (área de fuga e dor), fazendo o cérebro sabotar a rotina após duas semanas. Já a caminhada diária com música ou podcast estimula a liberação gradual de dopamina e serotonina. Você não precisa de 'força de vontade sobre-humana' — o método se torna um momento prazeroso do seu dia que desestressa a mente enquanto queima gordura.",
        statNumber: "91%",
        statLabel: "dos participantes relatam que a caminhada se tornou um hábito natural e esperado do dia",
        quote: "“A consistência de 25 minutos diários caminhando na inclinação vence 2 horas de academia sofrida qualquer dia da semana.”",
        author: "— Revista Britânica de Medicina Esportiva"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 17. Rotina de Trabalho e Ocupação
    {
      id: "work_routine",
      type: "single",
      title: "Como é a maior parte do seu dia de trabalho?",
      subtitle: "Para calcularmos seu gasto calórico basal espontâneo (NEAT).",
      options: [
        {
          id: "work_desk",
          label: "Sentado(a) na maior parte do tempo",
          sublabel: "Trabalho em escritório, home office, computador ou volante",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "work_standing",
          label: "Em pé a maior parte do tempo, mas sem esforço cardiovascular",
          sublabel: "Comércio, vendas, atendimento, ensino ou enfermagem",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20"/></svg>`
        },
        {
          id: "work_home",
          label: "Cuidando da casa e da família",
          sublabel: "Atividades domésticas variadas, compras e rotina familiar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
        },
        {
          id: "work_physical",
          label: "Trabalho com esforço físico ativo contínuo",
          sublabel: "Carrego peso ou me desloco constantemente a pé",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 18. Passos Diários Estimados
    {
      id: "daily_steps",
      type: "single",
      title: "Aproximadamente quantos passos você dá em um dia normal?",
      subtitle: "Se você usa smartwatch ou celular no bolso, selecione sua média.",
      options: [
        {
          id: "steps_under_3k",
          label: "Menos de 3.000 passos (Bastante sedentário/a)",
          sublabel: "Vamos começar com uma progressão suave de apenas 15 minutos diários",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/></svg>`
        },
        {
          id: "steps_3k_6k",
          label: "De 3.000 a 6.000 passos (Movimentação moderada)",
          sublabel: "A faixa ideal para acelerar a queima com caminhadas estruturadas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/></svg>`
        },
        {
          id: "steps_6k_10k",
          label: "De 6.000 a 10.000 passos (Ativo)",
          sublabel: "Pronto para os tiros intervalados e o método japonês de caminhada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>`
        },
        {
          id: "steps_over_10k",
          label: "Mais de 10.000 passos (Muito ativo)",
          sublabel: "Foco em otimizar a inclinação e a frequência cardíaca ideal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 19. Horário Preferido
    {
      id: "preferred_time",
      type: "single",
      title: "Em qual período do dia você prefere fazer sua caminhada?",
      subtitle: "A caminhada matinal queima mais gordura em jejum; a noturna reduz o cortisol acumulado no dia.",
      options: [
        {
          id: "time_morning",
          label: "Pela manhã (antes das obrigações)",
          sublabel: "Ativação metabólica para queimar calorias o dia inteiro",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "time_lunch",
          label: "No intervalo do almoço",
          sublabel: "Excelente para quebrar o pico glicêmico pós-refeição",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
          id: "time_afternoon",
          label: "No final da tarde (após o trabalho)",
          sublabel: "Para descarregar o estresse mental e a tensão acumulada do dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`
        },
        {
          id: "time_evening",
          label: "À noite (antes de relaxar)",
          sublabel: "Ajuda a soltar a musculatura e preparar o corpo para um sono profundo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
        }
      ]
    },

    // 20. Onde vai caminhar
    {
      id: "walking_environment",
      type: "single",
      title: "Onde você planeja realizar suas sessões de caminhada?",
      subtitle: "O método de 28 dias traz instruções exatas tanto para esteira quanto para rua.",
      options: [
        {
          id: "env_home_treadmill",
          label: "Esteira em casa ou Walking Pad (Esteira Portátil)",
          sublabel: "Máxima comodidade, sem desculpas de chuva ou horário, fazendo no conforto do lar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
        },
        {
          id: "env_gym",
          label: "Esteira na academia ou condomínio",
          sublabel: "Acesso a esteiras profissionais com regulagem de inclinação elevada (até 12-15%)",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        },
        {
          id: "env_outdoors",
          label: "Ao ar livre (parque, praça ou rua)",
          sublabel: "Caminhadas na rua com aplicação das técnicas de subida e passada progressiva",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 7 6 2-6 2-2 7-2-7-6-2 6-2 2-7z"/></svg>`
        },
        {
          id: "env_mix",
          label: "Uma combinação de esteira e ar livre",
          sublabel: "Flexibilidade para adaptar conforme a semana e o clima",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        }
      ]
    },

    // 21. Experiência prévia com esteira
    {
      id: "treadmill_experience",
      type: "single",
      title: "Você já praticou caminhada em esteira ergométrica?",
      subtitle: "A esteira permite calibrar a inclinação milimetricamente para queimar mais calorias.",
      options: [
        {
          id: "tm_regular",
          label: "Sim, pratico ou já pratiquei com regularidade",
          sublabel: "Conheço os comandos de velocidade e inclinação",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "tm_sometimes",
          label: "Já caminhei algumas vezes, mas sem um método certo",
          sublabel: "Apenas subia e caminhava no plano sem saber a inclinação ideal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "tm_never",
          label: "Nunca usei uma esteira / Sou iniciante total",
          sublabel: "Quero aprender o passo a passo seguro desde o primeiro dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></svg>`
        }
      ]
    },

    // 22. Método 12-3-30
    {
      id: "heard_12_3_30",
      type: "single",
      title: "Você conhece o famoso protocolo 12-3-30 de esteira?",
      subtitle: "Criado nos EUA, ele consiste em inclinar a esteira a 12%, a 3 milhas/hora durante 30 minutos.",
      options: [
        {
          id: "tried_too_heavy",
          label: "Já tentei, mas achei muito pesado para as panturrilhas e joelhos",
          sublabel: "A inclinação direta de 12% é agressiva demais para quem está voltando",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "heard_interested",
          label: "Já ouvi falar e tenho interesse em aprender a versão adaptada",
          sublabel: "Uma progressão inteligente que começa em 3% e sobe aos poucos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "never_heard_12330",
          label: "Nunca ouvi falar",
          sublabel: "Quero entender como essa técnica queima tanta gordura sem correr",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        }
      ]
    },

    // 23. Articulações e Sensibilidade
    {
      id: "joint_sensitivities",
      type: "single",
      title: "Você sente algum desconforto ou dor nas articulações?",
      subtitle: "Ajustamos a passada e a velocidade para absorver o impacto e proteger sua cartilagem.",
      options: [
        {
          id: "joint_knee",
          label: "Sensibilidade nos joelhos ou quadris",
          sublabel: "Usaremos a técnica de passada curta para proteger a patela",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "joint_lower_back",
          label: "Tensão ou pontadas na coluna lombar",
          sublabel: "Incluiremos a postura com ativação abdominal que descarrega a coluna",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 12h16"/></svg>`
        },
        {
          id: "joint_feet",
          label: "Dores na sola dos pés, calcanhares ou fascite plantar",
          sublabel: "Orientação para aterrissagem pelo mediopé e calçado correto",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>`
        },
        {
          id: "joint_none",
          label: "Nenhuma dor articular / Me sinto 100% bem",
          sublabel: "Pronto(a) para executar as progressões padrão do protocolo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 24. Reação em Subidas
    {
      id: "incline_reaction",
      type: "single",
      title: "Ao caminhar em ladeiras ou subidas, como seu corpo reage?",
      subtitle: "A inclinação é a chave mestra para elevar o gasto calórico sem precisar correr.",
      options: [
        {
          id: "inc_heart_pants",
          label: "Fico sem fôlego muito rápido",
          sublabel: "Indica que precisamos calibrar a inclinação em níveis suaves (2% a 5%)",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "inc_calves_burn",
          label: "Minhas panturrilhas queimam e ficam pesadas",
          sublabel: "Vamos ensinar o alongamento prévio de sóleo e gastrocnêmio",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20"/></svg>`
        },
        {
          id: "inc_feel_good",
          label: "Reajo bem e sinto que queima muito mais gordura",
          sublabel: "Pronto(a) para os picos de queima acelerada na esteira",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 25. Flexibilidade e Mobilidade
    {
      id: "body_flexibility",
      type: "single",
      title: "Como você avalia a flexibilidade do seu corpo hoje?",
      subtitle: "Articulações flexíveis aumentam o recrutamento muscular dos glúteos na caminhada.",
      options: [
        {
          id: "flex_stiff",
          label: "Sinto o corpo travado, especialmente pela manhã",
          sublabel: "Dificuldade para amarrar os sapatos ou agachar sem incômodo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/></svg>`
        },
        {
          id: "flex_moderate",
          label: "Mobilidade razoável, me movimento sem grandes limitações",
          sublabel: "Consigo caminhar e realizar as atividades diárias normalmente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "flex_good",
          label: "Boa mobilidade e flexibilidade corporal",
          sublabel: "Consigo me alongar e fazer movimentos amplos com facilidade",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 26. Intersticial 3: Depoimento Sandra
    {
      id: "interstitial_review_sandra",
      type: "interstitial",
      title: "História Real: Como Sandra Desinflamou os Joelhos e Secou a Barriga",
      badge: "Caso Real de Sucesso",
      content: {
        headline: "“Aos 51 anos, achei que meu metabolismo tinha morrido. Eliminei 8,8 kg apenas caminhando.”",
        bodyText: "“Eu sentia pontadas nos dois joelhos ao tentar correr ou fazer esteira rápida. Quando recebi o cronograma de caminhada inclinada de 28 dias com os passos curtos, não senti absolutamente dor nenhuma. Caminho assistindo à minha novela e já eliminei 8,8 kg e 9 centímetros de cintura. Minha médica até suspendeu um dos remédios de pressão!”",
        author: "— Sandra Marcondes, 51 anos",
        verified: "Aluna Verificada do Protocolo",
        rating: 5,
        statNumber: "8,8 kg",
        statLabel: "Eliminados em 28 dias sem impacto e sem passar fome",
        quote: "“O segredo não é velocidade nem suor escorrendo. É manter a inclinação certa no tempo certo.”"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 27. Metabolismo mais lento
    {
      id: "slow_metabolism",
      type: "single",
      title: "Você sente que o seu metabolismo ficou mais lento com os anos?",
      subtitle: "Após os 35 anos, a taxa metabólica de repouso cai cerca de 2 a 3% por década se não for estimulada.",
      options: [
        {
          id: "meta_much_slower",
          label: "Sim, parece que engordo até bebendo água",
          sublabel: "Qualquer refeição fora do padrão parece acumular direto na barriga",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        },
        {
          id: "meta_somewhat_slower",
          label: "Um pouco mais lento do que quando eu era mais jovem",
          sublabel: "Demoro muito mais tempo para perder 1 ou 2 kg do que antes",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "meta_not_sure",
          label: "Não tenho certeza / Apenas estou sedentário(a)",
          sublabel: "Acredito que meu corpo só precisa de um estímulo constante para acordar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 28. Fase Hormonal
    {
      id: "hormonal_stage",
      type: "single",
      title: "Você está passando por alguma transição hormonal?",
      subtitle: "Alterações no estrogênio e na progesterona redirecionam a gordura para o abdômen.",
      options: [
        {
          id: "hormone_menopause",
          label: "Estou na perimenopausa ou menopausa",
          sublabel: "Ondas de calor, alterações de humor e acúmulo de gordura na cintura",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "hormone_postpartum",
          label: "Pós-parto recente ou amamentando",
          sublabel: "O corpo ainda está em processo de reequilíbrio hormonal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "hormone_regular",
          label: "Ciclo hormonal regular / Sem alterações relevantes",
          sublabel: "Hormônios equilibrados e sem sintomas de menopausa",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "hormone_male",
          label: "Sou homem (foco em testosterona e queima visceral)",
          sublabel: "Ajustado para redução da gordura intra-abdominal masculina",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M16 4h4m0 0v4m0-4l-5 5a6 6 0 10-1.4 1.4L18 6"/></svg>`
        }
      ]
    },

    // 29. Medicamentos e Suplementos
    {
      id: "medications_daily",
      type: "single",
      title: "Você toma algum medicamento ou suplemento de uso contínuo?",
      subtitle: "Certos remédios afetam a retenção hídrica e a taxa de queima calórica.",
      options: [
        {
          id: "med_pressure_thyroid",
          label: "Remédios para pressão, tireoide ou colesterol",
          sublabel: "A caminhada diária auxilia diretamente no controle desses marcadores",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12h6m-3-3v6m-7 5h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
        },
        {
          id: "med_anxiety",
          label: "Remédios para ansiedade, sono ou antidepressivos",
          sublabel: "A caminhada em Zona 2 eleva a liberação de endorfina e regula o humor",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "med_vitamins",
          label: "Apenas vitaminas, colágeno ou suplementos comuns",
          sublabel: "Uso regular de suplementos nutricionais sem medicamentos pesados",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "med_none",
          label: "Não tomo nenhum medicamento de uso contínuo",
          sublabel: "Saúde estável e livre de prescrições diárias",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 30. Injetáveis tipo Ozempic
    {
      id: "glp1_interest",
      type: "single",
      title: "Qual é a sua opinião sobre injeções emagrecedoras (como Ozempic/Wegovy)?",
      subtitle: "Muitas pessoas sofrem com perda de massa magra e efeito rebote após parar essas medicações.",
      options: [
        {
          id: "glp_prefer_natural",
          label: "Prefiro emagrecer 100% ao natural sem depender de remédios",
          sublabel: "Quero aprender a ativar meu próprio metabolismo sem efeitos colaterais",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "glp_used_rebounded",
          label: "Já usei, mas quando parei o peso voltou em dobro",
          sublabel: "Preciso de um método sustentável para manter o peso para sempre",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        },
        {
          id: "glp_using_now",
          label: "Uso atualmente e preciso caminhar para não perder músculos",
          sublabel: "A caminhada inclinada protege a massa magra durante o emagrecimento",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        }
      ]
    },

    // 31. Intersticial 4: Preservação de Massa Magra
    {
      id: "interstitial_muscle",
      type: "interstitial",
      title: "Como a Caminhada Inclinada Queima Gordura Sem Deixar o Corpo Flácido",
      badge: "Biomecânica do Exercício",
      content: {
        headline: "Perder peso rápido sem o estímulo correto faz o corpo queimar até 35% de músculos em vez de gordura.",
        bodyText: "Quando você simplesmente fecha a boca ou corre sem orientação, o corpo 'canibaliza' as fibras musculares das pernas e glúteos para gerar energia, resultando naquela aparência de emagrecimento flácido e rosto abatido. <strong>A inclinação da esteira força a contração isométrica dos glúteos e da cadeia posterior</strong>, sinalizando ao corpo para preservar 100% dos seus músculos e queimar exclusivamente o tecido adiposo da barriga.",
        statNumber: "0%",
        statLabel: "De perda de massa magra quando a frequência cardíaca é mantida rigorosamente na Zona 2",
        quote: "“A caminhada na esteira inclinada tonifica pernas e levanta o bumbum enquanto derrete a gordura da cintura.”",
        author: "— Journal of Applied Physiology"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 32. Padrão Alimentar
    {
      id: "diet_pattern",
      type: "single",
      title: "Como você descreveria sua alimentação na maior parte da semana?",
      subtitle: "Não exigimos dietas restritivas; adaptamos o gasto calórico ao seu estilo de vida.",
      options: [
        {
          id: "diet_normal",
          label: "Como de tudo (arroz, feijão, carnes, massas e pães)",
          sublabel: "Alimentação caseira e tradicional sem regras rígidas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "diet_healthy_struggle",
          label: "Tento comer saudável de dia, mas me desrego à noite",
          sublabel: "Café e almoço leves, mas muita fome e ansiedade no final da tarde",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "diet_eating_out",
          label: "Como muito na rua, delivery ou fast food",
          sublabel: "A correria do dia a dia dificulta cozinhar a própria comida",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "diet_veg",
          label: "Vegetariana / Vegana ou com restrições alimentares",
          sublabel: "Foco em alimentos vegetais sem consumo de carne",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 33. Consumo de Água
    {
      id: "water_intake",
      type: "single",
      title: "Quanta água pura você bebe ao longo do dia?",
      subtitle: "A queima de cada molécula de gordura exige hidratação celular ativa.",
      options: [
        {
          id: "water_under_1l",
          label: "Menos de 2 copos (Tomo quase só café ou refrigerante)",
          sublabel: "O corpo fica inflamado e retém mais líquidos para se proteger",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v10m-4-4l4 4 4-4"/></svg>`
        },
        {
          id: "water_1_to_2l",
          label: "Entre 1 e 2 litros (Cerca de 4 a 6 copos)",
          sublabel: "Nível razoável, com potencial de melhorar a drenagem linfática",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "water_over_2l",
          label: "Mais de 2 litros de água todos os dias",
          sublabel: "Excelente hidratação para acelerar o resultado da caminhada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 34. Gatilho para sair da linha
    {
      id: "cravings_trigger",
      type: "single",
      title: "Qual é o seu maior gatilho para sair da linha na alimentação?",
      subtitle: "Identificar o momento de vulnerabilidade evita a auto-sabotagem.",
      options: [
        {
          id: "trigger_sweets_night",
          label: "Vontade incontrolável de comer doces ou chocolates à noite",
          sublabel: "Geralmente quando finalmente sento no sofá para relaxar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "trigger_emotional_stress",
          label: "Comer por ansiedade, tristeza ou estresse no trabalho",
          sublabel: "Uso a comida como recompensa após um dia difícil",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "trigger_weekends",
          label: "Finais de semana, cervejinha, pizzas e eventos com amigos",
          sublabel: "Segunda a sexta vai bem, mas sábado e domingo desandam",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18m-6-6l6 6 6-6"/></svg>`
        },
        {
          id: "trigger_tiredness",
          label: "Cansaço tão grande que peço comida pronta por preguiça",
          sublabel: "Falta de energia para preparar algo saudável",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 35. Sensação Pós-Almoço
    {
      id: "post_meal_feeling",
      type: "single",
      title: "Como você costuma se sentir 1 hora após o almoço?",
      subtitle: "Mostra o quanto seu corpo tem resistência à insulina.",
      options: [
        {
          id: "post_heavy_sleepy",
          label: "Com uma sonolência pesada e precisando de um café ou doce",
          sublabel: "Queda brusca de glicose que dá preguiça e sensação de moleza",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`
        },
        {
          id: "post_bloated",
          label: "Com a barriga estufada, empachada e com gases",
          sublabel: "Sensação de digestão lenta que dura a tarde toda",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "post_balanced",
          label: "Bem disposto(a), com digestão leve e energia contínua",
          sublabel: "Sem picos de sonolência ou desconforto gástrico",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 36. Beliscos Noturnos
    {
      id: "late_night_snacking",
      type: "single",
      title: "Você costuma assaltar a geladeira ou beliscar tarde da noite?",
      subtitle: "Calorias consumidas após as 21h têm o dobro de probabilidade de virar gordura visceral.",
      options: [
        {
          id: "snack_almost_always",
          label: "Quase todas as noites enquanto assisto TV ou descanso",
          sublabel: "Pipoca, bolachas, chocolates, pães ou sobras do jantar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "snack_sometimes",
          label: "Algumas vezes na semana, dependendo do estresse",
          sublabel: "Nos dias mais pesados sinto vontade de compensar na comida",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "snack_never",
          label: "Raramente ou nunca belisco depois do jantar",
          sublabel: "Consigo fechar a cozinha após a última refeição",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 37. Horas de Sono
    {
      id: "sleep_hours",
      type: "single",
      title: "Quantas horas de sono você costuma ter por noite?",
      subtitle: "Dormir menos de 7h eleva o hormônio grelina, fazendo você sentir 25% mais fome no dia seguinte.",
      options: [
        {
          id: "sleep_less_6",
          label: "Menos de 6 horas por noite",
          sublabel: "Noites curtas e com déficit crônico de descanso",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
        },
        {
          id: "sleep_6_to_7",
          label: "Entre 6 e 7 horas",
          sublabel: "Tempo razoável, mas às vezes acordo antes do despertador",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "sleep_7_to_8",
          label: "Entre 7 e 8 horas completas",
          sublabel: "A faixa ideal para queima noturna de gordura e regeneração",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 38. Como Acorda pela Manhã
    {
      id: "morning_energy",
      type: "single",
      title: "Como você costuma se sentir ao acordar pela manhã?",
      subtitle: "Mostra se o seu corpo está conseguindo resetar o cortisol durante a madrugada.",
      options: [
        {
          id: "wake_tired",
          label: "Exausto(a), parecendo que um caminhão passou por cima",
          sublabel: "Demoro horas para o corpo e a mente começarem a funcionar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`
        },
        {
          id: "wake_slow",
          label: "Levemente cansado(a), preciso de café imediatamente",
          sublabel: "Apenas consigo conversar ou render depois do café da manhã",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "wake_refreshed",
          label: "Descansado(a), disposto(a) e com energia para o dia",
          sublabel: "Pronto(a) para começar as tarefas sem lentidão",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 39. Nível de Estresse
    {
      id: "stress_level",
      type: "single",
      title: "Como você avalia o nível de estresse da sua rotina atual?",
      subtitle: "O estresse crônico desvia o metabolismo para o modo de retenção de gordura abdominal.",
      options: [
        {
          id: "stress_high",
          label: "Muito alto (vivo sob pressão e com a mente a mil por hora)",
          sublabel: "Dificuldade para relaxar mesmo nas horas de folga",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "stress_moderate",
          label: "Moderado (tenho dias tranquilos e outros bem corridos)",
          sublabel: "Consigo administrar a maior parte das situações",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "stress_low",
          label: "Baixo (minha rotina é calma e organizada)",
          sublabel: "Pouca sobrecarga mental no dia a dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 40. Descompressão Mental
    {
      id: "mental_decompression",
      type: "single",
      title: "Você enxerga a caminhada como seu momento de autocuidado?",
      subtitle: "Reservar 25 a 30 minutos diários para você é terapêutico para a mente e para o corpo.",
      options: [
        {
          id: "mind_oasis",
          label: "Sim, preciso desesperadamente de 30 minutos só para mim",
          sublabel: "Um momento sagrado sem celular, cobranças ou demandas de outras pessoas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "mind_podcast",
          label: "Sim, pretendo aproveitar para ouvir minhas músicas ou podcasts",
          sublabel: "O tempo passa voando enquanto me exercito e aprendo algo novo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>`
        },
        {
          id: "mind_focus_body",
          label: "Meu foco é 100% no resultado físico e na queima de gordura",
          sublabel: "Quero entrar, fazer o protocolo certo e ver a barriga diminuir",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 41. Tempo Diário Dedicável
    {
      id: "daily_time_commit",
      type: "single",
      title: "Quanto tempo por dia você pode reservar sem atrapalhar sua vida?",
      subtitle: "Constância de 25 minutos diários bate 2 horas de academia sofrida qualquer dia.",
      options: [
        {
          id: "time_15_20",
          label: "15 a 20 minutos por dia",
          sublabel: "Sessões dinâmicas de aceleração metabólica rápida",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
          id: "time_25_35",
          label: "25 a 35 minutos por dia (Janela Recomendada)",
          sublabel: "O tempo perfeito comprovado para queima máxima de gordura visceral",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>`
        },
        {
          id: "time_40_plus",
          label: "40 minutos ou mais por dia",
          sublabel: "Para quem tem mais tempo livre e deseja gasto calórico elevado",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        }
      ]
    },

    // 42. Dias por Semana
    {
      id: "days_per_week",
      type: "single",
      title: "Quantos dias na semana você prefere caminhar?",
      subtitle: "O protocolo se adapta tanto a quem faz 3 vezes quanto a quem prefere caminhar quase todo dia.",
      options: [
        {
          id: "days_3",
          label: "3 dias por semana (Segundas, Quartas e Sextas)",
          sublabel: "Ritmo leve para quem tem uma rotina bastante corrida",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>`
        },
        {
          id: "days_4_5",
          label: "4 a 5 dias por semana (Segunda a Sexta)",
          sublabel: "O ritmo ideal para queimar gordura de forma contínua e descansar no fim de semana",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "days_daily",
          label: "Todos os dias (7 dias por semana)",
          sublabel: "Caminhadas diárias variando entre dias intensos e dias leves de recuperação",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        }
      ]
    },

    // 43. Ocasião Especial com Data
    {
      id: "special_occasion",
      type: "single",
      title: "Você tem alguma data, festa ou ocasião especial em mente?",
      subtitle: "Ter um prazo visual no horizonte multiplica a taxa de conclusão do programa em 74%.",
      options: [
        {
          id: "event_vacation",
          label: "Férias, praia ou viagem próxima",
          sublabel: "Quero me sentir leve, desinchado(a) e à vontade em roupas de calor",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        },
        {
          id: "event_wedding_party",
          label: "Casamento, formatura ou festa de família",
          sublabel: "Quero entrar com segurança naquele vestido ou terno especial",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l4-4m-4 4l-4-4"/></svg>`
        },
        {
          id: "event_birthday",
          label: "Aniversário próximo ou nova década de vida",
          sublabel: "Comemorar mais um ano com meu melhor corpo e muita saúde",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 7 6 2-6 2-2 7-2-7-6-2 6-2 2-7z"/></svg>`
        },
        {
          id: "event_for_myself",
          label: "Faço isso por mim mesmo(a)",
          sublabel: "Não tenho uma festa marcada, apenas cansei de adiar o meu bem-estar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        }
      ]
    },

    // 44. Nível de Comprometimento
    {
      id: "commitment_level",
      type: "single",
      title: "Em uma escala de 1 a 10, o quanto você está comprometido(a)?",
      subtitle: "Apenas quem se compromete com os 28 dias atinge a queima profunda de gordura.",
      options: [
        {
          id: "commit_10",
          label: "10 de 10 — Estou 100% pronto(a) para seguir o plano",
          sublabel: "Chega de desculpas, vou fazer acontecer pelos próximos 28 dias",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        },
        {
          id: "commit_8_9",
          label: "8 a 9 — Muito motivado(a) e com vontade real de mudar",
          sublabel: "Quero começar logo e ver a diferença no meu corpo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        },
        {
          id: "commit_6_7",
          label: "6 a 7 — Quero testar para ver como meu corpo responde",
          sublabel: "Vou começar no ritmo leve para sentir a melhora",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        }
      ]
    },

    // 45. Idade
    {
      id: "age",
      type: "number",
      title: "Qual é a sua idade?",
      subtitle: "A frequência cardíaca ideal da Zona 2 varia com a idade para garantir segurança máxima.",
      min: 18,
      max: 85,
      defaultValue: 42,
      unit: "anos"
    },

    // 46. Altura (Centímetros)
    {
      id: "height",
      type: "height",
      title: "Qual é a sua altura?",
      subtitle: "Usada para calcular seu Índice de Massa Corporal (IMC) e o tamanho biomecânico da passada.",
      defaultUnit: "metric"
    },

    // 47. Peso Atual e Peso Meta
    {
      id: "weight",
      type: "weight_dual",
      title: "Qual é o seu peso atual e qual é o seu peso dos sonhos?",
      subtitle: "Calcularemos o cronograma seguro para você eliminar a gordura sem efeito sanfona.",
      defaultUnit: "metric"
    }
  ]
};
