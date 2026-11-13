// Configuração e Perguntas do Funil - Receita Metabólica Caseira (Inspirado no SlimKit)
const QUIZ_DATA = {
  config: {
    brandName: "MetabolicFit",
    productTitle: "O Protocolo da Receita Metabólica de 3 Minutos",
    productSubtitle: "A receita caseira simples que desbloqueia a queima de gordura profunda, desinflama o abdômen e acelera seu metabolismo — sem remédios e sem dietas restritivas",
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
      subtitle: "Esta informação calibra o cálculo da sua taxa metabólica de repouso e as dosagens da receita.",
      options: [
        {
          id: "female",
          label: "Feminino",
          sublabel: "Ajustado para o equilíbrio do estrogênio e desinflamação hormonal",
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

    // 2. EXATO COMO NA IMAGEM ENVIADA PELO USUÁRIO (Logo após o sexo)
    {
      id: "focus_areas_intro",
      type: "multiple",
      title: "Para começar, diga-nos em quais áreas você quer focar:",
      subtitle: "Escolha todas as que se aplicam",
      options: [
        {
          id: "lose_weight_tone",
          label: "Perder peso e tonificar",
          sublabel: "",
          icon: `<span class="text-2xl">⚖️</span>`
        },
        {
          id: "improve_health_live_longer",
          label: "Melhorar a saúde e viver mais",
          sublabel: "",
          icon: `<span class="text-2xl">❤️</span>`
        },
        {
          id: "reduce_stress",
          label: "Reduzir o estresse",
          sublabel: "",
          icon: `<span class="text-2xl">🪨</span>`
        },
        {
          id: "become_more_active",
          label: "Tornar-me mais ativo(a)",
          sublabel: "",
          icon: `<span class="text-2xl">👟</span>`
        },
        {
          id: "not_sure",
          label: "Não tenho a certeza!",
          sublabel: "",
          icon: `<span class="text-2xl">🤔</span>`
        }
      ]
    },

    // 3. Principal Motivação
    {
      id: "motivation_trigger",
      type: "single",
      title: "O que mais tem te incomodado no seu corpo recentemente?",
      subtitle: "Entender seu momento atual nos permite calibrar a proporção dos nutrientes da receita.",
      options: [
        {
          id: "stubborn_belly",
          label: "Gordura concentrada na barriga e cintura",
          sublabel: "Sensação de que o abdômen não responde a nada",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8m-4-4h8"/></svg>`
        },
        {
          id: "tired_sluggish",
          label: "Cansaço constante, sensação de peso e preguiça",
          sublabel: "Acordo sem energia e sinto fadiga ao longo do dia",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "slow_metabolism",
          label: "Metabolismo travado que engorda com facilidade",
          sublabel: "Qualquer refeição parece virar gordura imediatamente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        },
        {
          id: "bloated_body",
          label: "Inchaço diário e retenção excessiva de líquidos",
          sublabel: "Barriga estufada e roupas apertando ao final da tarde",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18m-6-6l6 6 6-6"/></svg>`
        }
      ]
    },

    // 4. Formato de Barriga
    {
      id: "belly_type",
      type: "single",
      title: "Como você descreveria o formato da sua barriga?",
      subtitle: "Cada tipo de acúmulo abdominal responde a combinações diferentes de ingredientes bioativos.",
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
          sublabel: "Mais lisa ao acordar pela manhã e estufada/inchada após o almoço ou jantar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v18m-6-6l6 6 6-6"/></svg>`
        },
        {
          id: "postpartum_belly",
          label: "Barriga Pós-Parto ou Flácida",
          sublabel: "Região inferior mais macia após a gravidez ou após período sedentário",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "general_belly",
          label: "Gordura Abdominal Geral",
          sublabel: "Acúmulo uniforme que aumentou gradualmente ao longo dos anos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`
        }
      ]
    },

    // 5. Zonas de Gordura Teimosa
    {
      id: "stubborn_zones",
      type: "multiple",
      title: "Quais partes do seu corpo mais acumulam gordura?",
      subtitle: "A receita possui ação termogênica e drenante sobre essas regiões.",
      options: [
        {
          id: "zone_pochete",
          label: "Pochete e parte inferior do umbigo",
          sublabel: "",
          icon: `<span class="text-2xl">🎯</span>`
        },
        {
          id: "zone_flancos",
          label: "Flancos e laterais da cintura",
          sublabel: "",
          icon: `<span class="text-2xl">📏</span>`
        },
        {
          id: "zone_culote",
          label: "Quadris, culote e coxas",
          sublabel: "",
          icon: `<span class="text-2xl">🦵</span>`
        },
        {
          id: "zone_costas",
          label: "Costas e dobrinhas do sutiã",
          sublabel: "",
          icon: `<span class="text-2xl">💪</span>`
        }
      ]
    },

    // 6. Intersticial Científico 1: Bloqueio Metabólico
    {
      id: "interstitial_metabolism",
      type: "interstitial",
      title: "Por que dietas restritivas e jejum extremo travam o metabolismo?",
      badge: "Descoberta Médica",
      content: {
        headline: "Quando você passa fome, o corpo entra em modo de emergência e desacelera a queima em até 38%.",
        bodyText: "O organismo interpreta a falta de calorias como ameaça de inanição. Para sobreviver, ele desliga a queima de gordura na barriga e passa a consumir seus próprios músculos. <strong>A solução não é comer menos, e sim fornecer compostos naturais bioativos</strong> que ativam as enzimas digestivas e reduzem a inflamação intestinal logo pela manhã.",
        statNumber: "38%",
        statLabel: "Redução no ritmo metabólico causada por dietas muito restritivas",
        quote: "“Uma receita matinal anti-inflamatória equilibra os hormônios da fome e sinaliza ao fígado para oxidar a gordura profunda.”",
        author: "— Dr. Edward Harris, Especialista em Metabolismo"
      },
      buttonText: "Continuar Meu Diagnóstico →"
    },

    // 7. Digestão e Inchaço
    {
      id: "digestion_feel",
      type: "single",
      title: "Como funciona a sua digestão no dia a dia?",
      subtitle: "Um intestino inflamado impede a queima de gordura e provoca gases constantes.",
      options: [
        {
          id: "dig_slow_bloated",
          label: "Digestão lenta, fico empachado(a) e com gases",
          sublabel: "Sensação de que a comida fica parada no estômago por horas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "dig_constipated",
          label: "Intestino preso, passo dias sem ir ao banheiro",
          sublabel: "Dificuldade frequente para evacuar e barriga rígida",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "dig_normal",
          label: "Funciona regularmente na maioria dos dias",
          sublabel: "Sem grandes episódios de refluxo ou prisão de ventre",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 8. Sensação após o Almoço
    {
      id: "post_lunch_energy",
      type: "single",
      title: "O que acontece com a sua energia cerca de 1 hora após o almoço?",
      subtitle: "Quedas bruscas de energia são o principal sinal de resistência à insulina.",
      options: [
        {
          id: "crash_sleepy",
          label: "Uma sonolência forte e vontade louca de tirar um cochilo",
          sublabel: "Preciso de um café ou doce para conseguir trabalhar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`
        },
        {
          id: "crash_heavy",
          label: "Fico com a barriga estufada e o corpo pesado",
          sublabel: "A calça aperta e sinto desconforto para sentar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "crash_stable",
          label: "Mantenho energia estável e sem cansaço excessivo",
          sublabel: "Consigo seguir o dia com disposição normal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 9. Vontade de Doces e Ansiedade
    {
      id: "sugar_cravings",
      type: "single",
      title: "Você costuma ter vontade incontrolável de comer doces ou carboidratos?",
      subtitle: "A receita atua diretamente nos receptores de dopamina que controlam a compulsão.",
      options: [
        {
          id: "craving_night",
          label: "Sim, principalmente à noite enquanto descanso ou assisto TV",
          sublabel: "Vontade de chocolate, sobremesa ou guloseimas após o jantar",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "craving_stress",
          label: "Sim, sempre que fico estressado(a) ou ansioso(a)",
          sublabel: "Uso a comida para acalmar a mente após momentos tensos",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01"/></svg>`
        },
        {
          id: "craving_rare",
          label: "Raramente / Consigo me controlar sem sofrimento",
          sublabel: "Como doces apenas em ocasiões especiais",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 10. Consumo de Água
    {
      id: "water_habits",
      type: "single",
      title: "Quanta água você bebe em um dia normal?",
      subtitle: "A hidratação é o veículo que transporta os ingredientes da receita para as células.",
      options: [
        {
          id: "water_low",
          label: "Menos de 2 copos (Tomo quase só café, chá ou refrigerante)",
          sublabel: "O corpo fica desidratado e o fígado retém mais toxinas",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3v10m-4-4l4 4 4-4"/></svg>`
        },
        {
          id: "water_medium",
          label: "De 3 a 6 copos (Cerca de 1 a 1,5 litro)",
          sublabel: "Consumo moderado, mas com espaço para potencializar a queima",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "water_high",
          label: "Mais de 2 litros todos os dias",
          sublabel: "Excelente hidratação para acelerar a ação da receita",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 11. Qualidade do Sono
    {
      id: "sleep_quality",
      type: "single",
      title: "Como costumam ser suas noites de sono?",
      subtitle: "O pico de queima de gordura ocorre durante as fases profundas do sono.",
      options: [
        {
          id: "sleep_poor",
          label: "Durmo mal, acordo várias vezes e levanto cansado(a)",
          sublabel: "Sensação de que o cérebro não desliga durante a noite",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
        },
        {
          id: "sleep_medium",
          label: "Durmo de 6 a 7 horas, mas com despertares leves",
          sublabel: "Sono aceitável, mas que poderia ser mais revigorante",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
        },
        {
          id: "sleep_good",
          label: "Durmo de 7 a 8 horas profundamente",
          sublabel: "Acordo descansado(a) e com energia natural",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 12. Fase de Vida / Hormônios
    {
      id: "hormonal_stage",
      type: "single",
      title: "Você percebeu alguma mudança hormonal recente?",
      subtitle: "A receita é balanceada para neutralizar a queda metabólica causada pela idade.",
      options: [
        {
          id: "hormone_menopause",
          label: "Estou na perimenopausa ou menopausa",
          sublabel: "Calores, metabolismo mais lento e gordura acumulando na cintura",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/></svg>`
        },
        {
          id: "hormone_slowdown",
          label: "Metabolismo mais lento após os 35/40 anos",
          sublabel: "Ganho peso muito mais fácil do que antigamente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>`
        },
        {
          id: "hormone_postpartum",
          label: "Pós-parto recente ou amamentação",
          sublabel: "Corpo em processo de reorganização hormonal",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 4v16m-4-8h8"/></svg>`
        },
        {
          id: "hormone_normal",
          label: "Sem alterações hormonais conhecidas",
          sublabel: "Apenas ganhei peso por rotina corrida ou sedentarismo",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 13. Intersticial 2: Depoimento Real da Receita
    {
      id: "interstitial_review_recipe",
      type: "interstitial",
      title: "Como Mariana Desinchou 8,4 kg em 21 Dias Apenas com a Receita",
      badge: "Relato Real Verificado",
      content: {
        headline: "“Eu não acreditava que tomar essa receita de manhã faria tanta diferença na minha barriga.”",
        bodyText: "“Eu vivia estufada, parecendo grávida de 5 meses no fim do dia. Tinha tentado remédios caros e nada resolvia. Quando comecei a preparar essa receita simples com ingredientes naturais que comprei na feira, meu intestino começou a funcionar como um relógio no segundo dia. Em 3 semanas, eliminei 8,4 kg e perdi 8 centímetros de cintura sem passar fome!”",
        author: "— Mariana Vasconcelos, 48 anos",
        verified: "Resultado Verificado do Protocolo",
        rating: 5,
        statNumber: "-8,4 kg",
        statLabel: "Eliminados em 21 dias com a receita caseira natural de 3 minutos",
        quote: "“O melhor de tudo é não ter efeito colateral nem dor de estômago. É saboroso e fácil de fazer.”"
      },
      buttonText: "Avançar para Minhas Medidas →"
    },

    // 14. Quanto tempo você tem pela manhã?
    {
      id: "morning_prep_time",
      type: "single",
      title: "Quanto tempo você tem disponível pela manhã?",
      subtitle: "A receita foi desenvolvida para ser preparada em menos de 3 minutos com utensílios comuns.",
      options: [
        {
          id: "time_quick",
          label: "Menos de 5 minutos (minha manhã é super corrida)",
          sublabel: "A receita é prática e fica pronta instantaneamente",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
          id: "time_calm",
          label: "10 a 15 minutos (consigo preparar com calma)",
          sublabel: "Ideal para tomar com tranquilidade antes do café",
          icon: `<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
        }
      ]
    },

    // 15. Idade
    {
      id: "age",
      type: "number",
      title: "Qual é a sua idade?",
      subtitle: "As proporções da receita são dosadas conforme a faixa etária para máxima absorção celular.",
      min: 18,
      max: 85,
      defaultValue: 42,
      unit: "anos"
    },

    // 16. Altura
    {
      id: "height",
      type: "height",
      title: "Qual é a sua altura?",
      subtitle: "Necessária para calcular o seu Índice de Massa Corporal (IMC) e a concentração dos nutrientes.",
      defaultUnit: "metric"
    },

    // 17. Peso Atual e Meta
    {
      id: "weight",
      type: "weight_dual",
      title: "Qual é o seu peso atual e qual é o seu peso dos sonhos?",
      subtitle: "Calcularemos a previsão de tempo exata para você atingir sua meta com o protocolo.",
      defaultUnit: "metric"
    }
  ]
};
