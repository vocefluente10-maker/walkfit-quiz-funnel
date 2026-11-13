// Quiz Configuration and Questions Data inspired by SlimKit Treadmill Funnel
const QUIZ_DATA = {
  config: {
    brandName: "WALKFIT PRO",
    productTitle: "The 28-Day Metabolic Walking Blueprint",
    productSubtitle: "Melt Stubborn Belly Fat, Reset Your Metabolism & Drop 2-3 Sizes — Without Starvation Diets or Joint Pain",
    regularPrice: "$67",
    salePrice: "$19",
    discountPercentage: "72% OFF",
    guaranteeDays: 60,
    checkoutUrl: "https://your-checkout-link-here.com", // Replace with Stripe / CartPanda / Hotmart / ClickBank URL
  },

  steps: [
    // Step 1: Gender
    {
      id: "gender",
      type: "single",
      title: "Select your biological sex",
      subtitle: "This helps our algorithm calibrate your baseline resting metabolic rate (BMR) and hormone response to walking.",
      options: [
        {
          id: "female",
          label: "Female",
          sublabel: "Optimized for female fat-burning hormones & estrogen balance",
          icon: `<svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a5 5 0 100 10 5 5 0 000-10zm0 10v6m-3-3h6"/></svg>`
        },
        {
          id: "male",
          label: "Male",
          sublabel: "Optimized for testosterone support and abdominal fat mobilization",
          icon: `<svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h4m0 0v4m0-4l-5 5a6 6 0 10-1.4 1.4L18 6"/></svg>`
        }
      ]
    },

    // Step 2: Primary Goal
    {
      id: "primary_goal",
      type: "single",
      title: "What is your #1 weight loss goal?",
      subtitle: "Choose what matters most to you right now so we can customize your walking speed and incline.",
      options: [
        {
          id: "lose_belly",
          label: "Lose stubborn belly & visceral fat",
          sublabel: "Target deep abdominal fat without raising stress hormones",
          badge: "Most Popular",
          icon: `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
        },
        {
          id: "overall_drop",
          label: "Drop 15 to 40+ lbs overall",
          sublabel: "Steady, sustainable full-body fat reduction",
          icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
        },
        {
          id: "tone_lower",
          label: "Tone thighs, glutes & lower body",
          sublabel: "Sculpt lean legs with gentle incline walking intervals",
          icon: `<svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
        },
        {
          id: "energy_health",
          label: "Boost energy & reduce joint pain",
          sublabel: "Low-impact movement to protect knees and lower back",
          icon: `<svg class="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        }
      ]
    },

    // Step 3: Target Zones (Multi-Select)
    {
      id: "target_zones",
      type: "multiple",
      title: "Which target zones do you want to focus on?",
      subtitle: "Select all that apply. Your 28-day routine will include targeted incline sequences for these areas.",
      options: [
        {
          id: "belly_zone",
          label: "Belly & Waistline",
          sublabel: "Flatten lower tummy & love handles",
          icon: `<span class="text-2xl">🎯</span>`
        },
        {
          id: "thighs_glutes",
          label: "Thighs & Glutes",
          sublabel: "Firm back of legs & lift glutes",
          icon: `<span class="text-2xl">🦵</span>`
        },
        {
          id: "arms_back",
          label: "Back & Bra Fat / Arms",
          sublabel: "Tone upper torso with power-walking posture",
          icon: `<span class="text-2xl">💪</span>`
        },
        {
          id: "full_body",
          label: "Full Body Lean Out",
          sublabel: "Total body slimming and definition",
          icon: `<span class="text-2xl">✨</span>`
        }
      ]
    },

    // Step 4: Belly Type (SlimKit Signature Step)
    {
      id: "belly_type",
      type: "single",
      title: "What is your primary belly type?",
      subtitle: "Different types of belly fat require different walking heart-rate zones to burn efficiently.",
      options: [
        {
          id: "stressed_belly",
          label: "Stressed / Cortisol Belly",
          sublabel: "Weight concentrated in the front, often paired with poor sleep and high daily tension.",
          icon: `<span class="text-3xl">⚡</span>`
        },
        {
          id: "hormonal_belly",
          label: "Hormonal / Menopause Belly",
          sublabel: "Recent stubborn fat gain around waist, lower energy, metabolism feeling slowed down.",
          icon: `<span class="text-3xl">🌸</span>`
        },
        {
          id: "bloated_belly",
          label: "Bloated / Digestive Belly",
          sublabel: "Flatter in the morning, puffy or distended by evening.",
          icon: `<span class="text-3xl">💧</span>`
        },
        {
          id: "postpartum_belly",
          label: "Postpartum / Life-Change Belly",
          sublabel: "Softer lower abdomen after pregnancy or lifestyle changes.",
          icon: `<span class="text-3xl">👶</span>`
        },
        {
          id: "general_belly",
          label: "General Soft Belly",
          sublabel: "Even fat distribution that has accumulated over several years.",
          icon: `<span class="text-3xl">⚖️</span>`
        }
      ]
    },

    // Step 5: Interstitial Scientific Proof #1
    {
      id: "interstitial_cortisol",
      type: "interstitial",
      title: "Why Traditional Running & Hard Cardio Fails 87% of People",
      badge: "Metabolic Fact",
      content: {
        headline: "High-impact cardio can spike cortisol by up to 42%, signaling your body to HOLD onto stubborn belly fat.",
        bodyText: "When you run or do intense HIIT, your adrenal glands release stress hormones that break down muscle and store visceral fat around your abdomen. <strong>Low-impact incline walking keeps you directly in the Fat-Oxidation Zone (Zone 2)</strong>, burning pure body fat without joint wear or intense hunger cravings afterwards.",
        statNumber: "3x",
        statLabel: "More visceral belly fat burned compared to flat road walking at the same heart rate",
        quote: "“Incline walking is the holy grail for fat loss over 35: high calorie burn, zero joint stress, and zero cortisol spike.”",
        author: "— Dr. E. Harris, Exercise Physiologist"
      },
      buttonText: "Continue My Analysis →"
    },

    // Step 6: Preferred Walking Environment
    {
      id: "walking_environment",
      type: "single",
      title: "Where do you plan to do your walking workouts?",
      subtitle: "Our ebook plan includes exact protocols for treadmills, walking pads, and outdoor brisk walks.",
      options: [
        {
          id: "home_treadmill",
          label: "Home Treadmill or Walking Pad",
          sublabel: "Convenient, zero weather excuses, control incline & speed anytime",
          icon: `<svg class="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
        },
        {
          id: "gym_treadmill",
          label: "Gym Treadmill",
          sublabel: "Access to commercial treadmills with high incline levels (12-15%)",
          icon: `<svg class="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        },
        {
          id: "outdoors",
          label: "Outdoors / Neighborhood",
          sublabel: "Fresh air, parks, hill walking, and natural incline routes",
          icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
        },
        {
          id: "mix",
          label: "A mix of indoor & outdoor",
          sublabel: "Flexibility depending on your day and the weather",
          icon: `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
        }
      ]
    },

    // Step 7: Joint and Mobility Status
    {
      id: "joint_status",
      type: "single",
      title: "Do you experience any joint or mobility discomfort?",
      subtitle: "The 28-day plan incorporates zero-impact modifications to keep your joints 100% pain-free.",
      options: [
        {
          id: "knee_pain",
          label: "Knee or hip sensitivity",
          sublabel: "We'll adjust walking cadence and avoid high pounding",
          icon: `<span class="text-2xl">🦴</span>`
        },
        {
          id: "lower_back",
          label: "Lower back tightness / stiffness",
          sublabel: "We'll include pelvic alignment & posture cues for walking",
          icon: `<span class="text-2xl">🧘</span>`
        },
        {
          id: "plantar",
          label: "Feet / Plantar Fasciitis soreness",
          sublabel: "We'll focus on smooth heel-to-toe stride transitions",
          icon: `<span class="text-2xl">👟</span>`
        },
        {
          id: "none_healthy",
          label: "No joint pain / Ready for full protocol",
          sublabel: "You can execute the full incline sequences right away",
          icon: `<span class="text-2xl">💪</span>`
        }
      ]
    },

    // Step 8: Daily Step Baseline
    {
      id: "daily_steps",
      type: "single",
      title: "How many steps do you typically take on an average day?",
      subtitle: "Be honest! This gives us your baseline metabolic burn so we don't overwhelm you.",
      options: [
        {
          id: "under_3k",
          label: "Under 3,000 steps (Mostly desk/sedentary)",
          sublabel: "A gentle progressive ramp-up starting at just 15 minutes a day",
          icon: `<span class="text-2xl">🛋️</span>`
        },
        {
          id: "3k_6k",
          label: "3,000 – 6,000 steps (Light daily movement)",
          sublabel: "The sweet spot to accelerate fat oxidation with structured walks",
          icon: `<span class="text-2xl">🚶</span>`
        },
        {
          id: "6k_10k",
          label: "6,000 – 10,000 steps (Moderate activity)",
          sublabel: "Ready for metabolic incline bursts and Japanese walking intervals",
          icon: `<span class="text-2xl">🏃</span>`
        },
        {
          id: "over_10k",
          label: "10,000+ steps (High activity)",
          sublabel: "Need targeted fat-loss pacing rather than just more volume",
          icon: `<span class="text-2xl">⚡</span>`
        }
      ]
    },

    // Step 9: Workout Duration Preference
    {
      id: "workout_time",
      type: "single",
      title: "How much time can you comfortably commit per walking session?",
      subtitle: "Consistency always beats intensity. Even 20 minutes of incline walking delivers massive results.",
      options: [
        {
          id: "time_15_20",
          label: "15 to 20 minutes a day",
          sublabel: "Short, high-efficiency metabolic walk sessions",
          icon: `<span class="text-2xl">⏱️</span>`
        },
        {
          id: "time_25_35",
          label: "25 to 35 minutes a day (Recommended)",
          sublabel: "The proven golden window for maximum visceral fat oxidation",
          badge: "Best Results",
          icon: `<span class="text-2xl">⭐</span>`
        },
        {
          id: "time_40_plus",
          label: "40+ minutes a day",
          sublabel: "Extended steady-state walks for maximum calorie deficit",
          icon: `<span class="text-2xl">🔥</span>`
        }
      ]
    },

    // Step 10: Biggest Obstacle in the Past
    {
      id: "past_obstacle",
      type: "single",
      title: "What has been your biggest obstacle to losing weight in the past?",
      subtitle: "Knowing this allows us to address the exact root cause in your 28-day schedule.",
      options: [
        {
          id: "burnout",
          label: "Aggressive diets and exhausting gym workouts caused burnout",
          sublabel: "Walking is gentle, sustainable, and leaves you energized all day",
          icon: `<span class="text-2xl">😫</span>`
        },
        {
          id: "cravings",
          label: "Intense hunger and sugar/late-night cravings",
          sublabel: "Zone 2 walking stabilizes blood sugar and suppresses ghrelin (hunger hormone)",
          icon: `<span class="text-2xl">🍫</span>`
        },
        {
          id: "slow_results",
          label: "Metabolism felt sluggish or plateaued",
          sublabel: "Incline walking forces muscle recruitment that fires up resting burn rate",
          icon: `<span class="text-2xl">🐢</span>`
        },
        {
          id: "busy_schedule",
          label: "Too busy with work, family, and daily obligations",
          sublabel: "Plug-and-play sessions you can do listening to music or podcasts",
          icon: `<span class="text-2xl">📅</span>`
        }
      ]
    },

    // Step 11: Special Event / Target Timeline
    {
      id: "target_timeline",
      type: "single",
      title: "Is there a special occasion you are getting in shape for?",
      subtitle: "Having an upcoming date in mind increases completion and success rate by 74%.",
      options: [
        {
          id: "vacation_beach",
          label: "Upcoming vacation or beach trip",
          sublabel: "Want to feel light, lean, and confident in summer clothes",
          icon: `<span class="text-2xl">🏖️</span>`
        },
        {
          id: "wedding_reunion",
          label: "Wedding, family reunion, or social event",
          sublabel: "Ready to turn heads and look incredible in photos",
          icon: `<span class="text-2xl">💍</span>`
        },
        {
          id: "birthday_milestone",
          label: "Upcoming birthday or milestone age",
          sublabel: "A fresh start and a stronger, healthier body for the year ahead",
          icon: `<span class="text-2xl">🎂</span>`
        },
        {
          id: "just_myself",
          label: "Just ready to feel like myself again",
          sublabel: "Tired of feeling sluggish and ready to reclaim my vitality",
          icon: `<span class="text-2xl">✨</span>`
        }
      ]
    },

    // Step 12: Interstitial Social Proof #2
    {
      id: "interstitial_review",
      type: "interstitial",
      title: "Real Women & Men. Real Walking Transformations.",
      badge: "Verified Feedback",
      content: {
        headline: "“I lost 21 lbs in 28 days without stepping foot in a noisy gym or starving myself.”",
        bodyText: "“At 46, my doctor told me my cholesterol was creeping up and my belly fat wouldn't budge. I thought I needed to run 5 miles a day or do crazy bootcamp workouts. When I started following this 28-day incline walking routine on my home treadmill, the weight literally melted off. My knees feel great and my waist dropped 3 inches!”",
        author: "— Jennifer R., 46 (Austin, TX)",
        verified: "Verified 28-Day Blueprint Reader",
        rating: 5,
        statNumber: "94.2%",
        statLabel: "of readers reported sustained weight loss and higher daily energy within the first 14 days"
      },
      buttonText: "Personalize My Blueprint →"
    },

    // Step 13: Age Input
    {
      id: "age",
      type: "number",
      title: "What is your age?",
      subtitle: "Metabolism naturally shifts across decades. We tailor your walking cadence to match your age group.",
      min: 18,
      max: 85,
      defaultValue: 42,
      unit: "years old"
    },

    // Step 14: Height Input (Dual Imperial / Metric)
    {
      id: "height",
      type: "height",
      title: "What is your height?",
      subtitle: "Used to compute your Body Mass Index (BMI) and stride length calculation.",
      defaultUnit: "imperial" // imperial (ft/in) or metric (cm)
    },

    // Step 15: Current & Target Weight Input
    {
      id: "weight",
      type: "weight_dual",
      title: "What is your current weight and your goal weight?",
      subtitle: "We calculate your realistic fat-loss timeline based on safe metabolic burn rates.",
      defaultUnit: "imperial" // imperial (lbs) or metric (kg)
    }
  ]
};
