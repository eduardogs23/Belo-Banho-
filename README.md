# Belo Banho Aquecedores

Site institucional e projeto de presença digital.
Assistência técnica em aquecedores a gás, boilers e pressurizadores — São Paulo.

**No ar:** https://belo-banho.vercel.app

---

## Estrutura

```
.
├── site/                      # o site publicado
│   ├── index.html             # home
│   ├── assets/
│   │   ├── style.css          # design system completo
│   │   ├── app.js             # menu, FAQ, formulário, tracking
│   │   └── mascote.svg        # Belito — mascote da marca
│   ├── marcas/                # 8 páginas, uma por marca de aquecedor
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/                      # estratégia (ler nesta ordem)
│   ├── 01-estrategia-de-marca.md
│   ├── 02-design-system.md
│   ├── 03-arquitetura-e-copydeck.md
│   ├── 04-plano-seo.md
│   └── 05-plano-cro.md
│
└── vercel.json                # publica a pasta site/
```

Site estático: HTML, CSS e JavaScript puros. Sem build, sem dependências, sem `npm install`.

---

## Editar

Abra qualquer arquivo em `site/` num editor de texto e salve. Para ver o resultado, abra `site/index.html` no navegador.

**Onde mexer no quê:**

| Quero mudar | Arquivo |
|---|---|
| Textos, seções, estrutura da home | `site/index.html` |
| Cores, fontes, espaçamentos | `site/assets/style.css` (bloco `:root` no topo) |
| Comportamento do formulário e do menu | `site/assets/app.js` |
| Mascote | `site/assets/mascote.svg` |
| Conteúdo de uma marca | `site/marcas/[marca].html` |

---

## Publicar

Se o repositório estiver conectado ao Vercel, **todo `git push` publica automaticamente**. Não precisa de mais nada.

Publicação manual, se precisar:

```bash
npx vercel --prod
```

---

## Pendências antes do go-live

### 1. Dados reais

Busque e substitua em todos os arquivos de `site/`:

| Buscar | Trocar por |
|---|---|
| `5511999999999` | WhatsApp real, formato internacional sem símbolos |
| `+5511999999999` | Telefone real com `+55` |
| `(11) 99999-9999` | Telefone formatado |
| `00.000.000/0001-00` | CNPJ |
| `belobanho.com.br` | Domínio real, se for outro |

**Confirmar também:** "Mais de 10 anos" · "Atendimento 24 horas" · prazo de garantia · valor da visita técnica.

### 2. Fotos

Dois espaços reservados no código, marcados com `class="photo-slot"` — um no hero, outro na seção "Sobre". Troque a `<div>` por uma `<img>`.

Ordem de impacto: técnico uniformizado com crachá em atendimento real > ferramenta de medição em uso > antes/depois de instalação > veículo identificado.

Foto real mediana supera banco de imagens impecável. O cliente reconhece stock photo e desconta a credibilidade.

### 3. Depoimentos

Os 3 depoimentos da home são **ilustrativos** — há um comentário no código marcando isso.

Publicar depoimento inventado com nome de pessoa é publicidade enganosa (CDC art. 37) e, se alguém procurar a pessoa e não achar, o estrago de credibilidade é maior que o jurídico.

O card já está desenhado com selo do Google. Colete avaliações reais (processo em `docs/04-plano-seo.md`, seção 2) e substitua o texto.

### 4. Formulário

Hoje o `<form>` simula o envio. Troque o bloco marcado `/* INTEGRAÇÃO */` em `site/assets/app.js` por um POST real:

```js
fetch('https://formspree.io/f/SEU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(Object.fromEntries(new FormData(form)))
}).then(function (r) {
  if (r.ok) card.classList.add('is-sent'); else throw new Error();
}).catch(function () {
  btn.disabled = false;
  btn.textContent = 'Enviar solicitação';
  alert('Não conseguimos enviar agora. Tente novamente ou fale no WhatsApp.');
});
```

### 5. Mensuração

Google Analytics 4 (o código já dispara `gtag()`) · Microsoft Clarity (gratuito, maior valor no início) · Search Console com o `sitemap.xml`.

### 6. Google Business Profile

Checklist completo em `docs/04-plano-seo.md`, seção 2.

**Em busca local, o GBP pesa mais que o site.** Publicar sem configurá-lo é entregar metade do resultado.

### 7. Página `/politica-de-privacidade`

Obrigatória (LGPD). O site já linka para essa URL em dois pontos.

---

## Verificações automatizadas

```
Aninhamento HTML .................. 9 arquivos, sem erros
CSS balanceado .................... OK
JS (node --check) ................. OK
JSON-LD ........................... 26 blocos, todos válidos
H1 único por página ............... 9/9
Title / description ............... dentro dos limites
Links internos .................... nenhum quebrado
Similaridade entre marcas ......... 56% máx (limiar de risco: ~70%)
Acessibilidade .................... skip link, focus-visible, ARIA, reduced-motion
```

---

## A maior alavanca não é o site

Está em `docs/05-plano-cro.md`, seção 7: **responder o WhatsApp em menos de 5 minutos.**

Passados 30 minutos sem resposta, a chance de fechamento despenca — o cliente já chamou outra empresa. É a única alavanca do projeto que custa zero e vale mais que todas as outras somadas.
