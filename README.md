# 🏃‍♂️ WalkFit Pro — Funil de Quiz de Alta Conversão (EUA / Gringa)

Funil de quiz completo inspirado na estrutura de alta conversão do **SlimKit** (`slimkit.health/walking/survey/`), adaptado estrategicamente para a venda de **Ebook de Emagrecimento no mercado americano (US Market)**.

---

## 🎯 O Que Este Funil Contém

1. **Header Minimalista com Progresso Dinâmico**:
   - Barra de progresso interativa com porcentagem calculada a cada pergunta.
   - Botão "Back" para o usuário revisar respostas sem reiniciar.
   - Badge "Science-Backed" de confiança.

2. **Quiz de Qualificação e Micro-Compromissos (15 Etapas)**:
   - **Gênero**: Calibração hormonal e metabólica.
   - **Objetivo Principal**: Perda de barriga teimosa, perda geral de peso, tonificação de pernas/glúteos ou articulações saudáveis.
   - **Zonas-Alvo (Multi-Select)**: Abdômen, coxas, braços, corpo todo.
   - **Belly Type (Assinatura SlimKit)**: Cortisol/Stressed belly, Hormonal/Menopause, Bloated, Postpartum, etc.
   - **Intersticiais Científicos de Quebra de Objeção**: Explicação de por que cardio intenso/corrida aumenta o cortisol em até 42% e faz acumular gordura visceral, enquanto caminhada inclinada (Zone-2) queima 3x mais gordura visceral.
   - **Ambiente de Treino**: Esteira em casa, esteira na academia, walking pad ou ar livre.
   - **Saúde Articular**: Ajuste para joelhos, lombar ou pés.
   - **Histórico e Hábitos**: Passos diários, tempo disponível (15-35 min), principais obstáculos passados.
   - **Métricas Corporais Dinâmicas**: Idade, Altura (Toggle FT/IN e CM) e Peso Atual / Peso Meta (Toggle LBS e KG).

3. **Tela de Análise Algorítmica (Animated Loader)**:
   - Círculo de progresso animado de 0% a 100%.
   - Frases dinâmicas de cálculo metabólico e calibração de inclinação para prender a atenção do usuário.

4. **Dashboard de Diagnóstico Personalizado**:
   - Comparação dinâmica de **IMC Atual vs IMC Meta**.
   - **Data exata projetada** para atingir o peso dos sonhos (calculada realisticamente com base nas respostas).
   - **Gráfico Comparativo Visual**: Curva de perda de peso "Without Walking Plan" vs "With 28-Day Walking Blueprint".
   - Total de gordura teimosa a ser eliminada em libras (lbs).

5. **Captura de Leads (Email Gate)**:
   - Coleta de e-mail antes da apresentação da oferta para remarketing e automação de e-mails.

6. **Página de Oferta de Alta Conversão para o Ebook (US Direct Response)**:
   - **Headline Magnética**: *The 28-Day Metabolic Walking Blueprint*.
   - **Mockup 3D do Ebook** feito em CSS puro (leve e responsivo).
   - **3 Bônus Gratuitos de Alto Valor**:
     - *Bonus #1:* Low-Cortisol Fat-Burning Meal & Smoothie Guide ($29 value)
     - *Bonus #2:* 5-Min Pre-Walk Joint Mobility Routine ($19 value)
     - *Bonus #3:* Printable 28-Day Step & Measurement Tracker ($15 value)
   - **Preço de Queima**: De ~~$67.00~~ por apenas **$19.00** (One-time payment).
   - **Countdown Timer Regressivo de 15 Minutos** com aviso de desconto reservado.
   - **Garantia Incondicional de 60 Dias**: "Lose Weight or Keep It Free".
   - **Prova Social**: Depoimentos reais em cards estilo App Store / Trustpilot.
   - **FAQ Interativo em Accordion**.
   - **Barra de Checkout Fixa (Sticky Bottom Bar)** no mobile.
   - Repasse automático de todos os parâmetros de UTM (`utm_source`, `utm_campaign`, etc.) para o link de checkout.

---

## 🚀 Como Testar Localmente

Basta abrir o terminal nesta pasta e executar:

```bash
# Rodar servidor local instantâneo
python3 -m http.server 8080
```

Abra no navegador: `http://localhost:8080`

---

## ⚙️ Como Personalizar para o seu Produto

### 1. Alterar o Link de Checkout
Abra o arquivo [`assets/js/quiz-data.js`](file:///Users/otaviocolello/Desktop/of%20emg%20gringa/assets/js/quiz-data.js) e altere a propriedade `checkoutUrl`:

```javascript
checkoutUrl: "https://seu-link-de-checkout.com", // Stripe, CartPanda, Hotmart, ClickBank, etc.
```

O script automaticamente anexará as UTMs e o email do lead ao link de checkout.

### 2. Alterar Preço ou Título
No mesmo arquivo [`assets/js/quiz-data.js`](file:///Users/otaviocolello/Desktop/of%20emg%20gringa/assets/js/quiz-data.js):

```javascript
productTitle: "The 28-Day Metabolic Walking Blueprint",
regularPrice: "$67",
salePrice: "$19",
```

### 3. Conectar Pixel do Facebook / TikTok
No [`index.html`](file:///Users/otaviocolello/Desktop/of%20emg%20gringa/index.html), você pode colar o seu código do Meta Pixel ou TikTok Pixel diretamente antes do fechamento da tag `</head>`.

---

## 🌐 Como Hospedar Gratuitamente em Produção

Como o projeto é 100% estático (HTML, CSS e JS puro):
- **Vercel**: Arraste a pasta para o dashboard da Vercel ou use `vercel deploy`.
- **Netlify**: Arraste a pasta para o app.netlify.com (deploy em 5 segundos).
- **Cloudflare Pages**: Conecte ao GitHub ou faça upload direto.
- **Hostinger / cPanel / WordPress**: Basta copiar os arquivos para a pasta `public_html`.
