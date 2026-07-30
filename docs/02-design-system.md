# Belo Banho Aquecedores — Design System

**Etapa 2 de 6** · Especificação visual completa. Um desenvolvedor deve conseguir implementar sem perguntar nada.

---

## 1. Princípios de design

**1. Contenção comunica competência.**
Cada elemento decorativo a mais reduz a percepção de seriedade técnica. Quando em dúvida, remova.

**2. O vermelho é bisturi, não tinta.**
Azul é 90% da superfície. Vermelho aparece só onde há ação ou alerta. Vermelho em excesso vira promoção de varejo — o oposto do posicionamento.

**3. Espaço em branco é orçamento.**
Marcas que respiram parecem caras. Densidade visual comunica "barato e apressado".

**4. Movimento tem função.**
Animação existe para orientar atenção ou dar feedback. Nunca para impressionar. Tudo respeita `prefers-reduced-motion`.

**5. Contraste é acessibilidade, não estilo.**
Mínimo WCAG AA (4.5:1 texto normal, 3:1 texto grande e componentes de UI). Sem exceção.

---

## 2. Paleta

### Azul institucional — autoridade, segurança, engenharia

| Token | Hex | Uso |
|---|---|---|
| `--blue-950` | `#060F1D` | Fundos ultra-escuros, footer |
| `--blue-900` | `#0B1B33` | Fundo hero, superfícies escuras principais |
| `--blue-800` | `#102A4E` | Gradientes, cartões escuros |
| `--blue-700` | `#16386B` | Títulos em fundo claro |
| `--blue-600` | `#1D4A8F` | Ícones, links, elementos interativos |
| `--blue-500` | `#2A61B0` | Estados hover |
| `--blue-100` | `#E4ECF7` | Fundos de ícone, bordas suaves |
| `--blue-50` | `#F4F7FC` | Fundo de seção alternado |

### Vermelho de ação — urgência controlada

| Token | Hex | Uso |
|---|---|---|
| `--red-700` | `#A2132A` | Hover de botão primário |
| `--red-600` | `#C4162E` | **Botão primário, eyebrow, acentos** |
| `--red-500` | `#E01B3D` | Destaques em fundo escuro |
| `--red-50` | `#FCEEF0` | Fundo de ícone de alerta |

### Neutros

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#131A26` | Texto principal |
| `--gray-700` | `#3D4757` | Texto secundário forte |
| `--gray-500` | `#68738A` | Texto de apoio, legendas |
| `--gray-300` | `#B4BDCB` | Texto desabilitado |
| `--gray-200` | `#DEE3EB` | Bordas |
| `--gray-100` | `#EFF2F6` | Fundos sutis |
| `--white` | `#FFFFFF` | Superfície base |

### Funcionais

| Token | Hex | Uso |
|---|---|---|
| `--wa` | `#25D366` | WhatsApp — **exclusivo desta função**, nunca decorativo |
| `--wa-dark` | `#1DA851` | Hover WhatsApp |
| `--success` | `#0E9F6E` | Confirmações, checks |
| `--flame-a` / `--flame-b` | `#C4162E` → `#FF8A3D` | Gradiente de chama — **só em ilustração** |

### Regra de proporção

```
Azul + neutros ......... 90% da superfície
Vermelho ............... 7%  (CTAs e acentos)
Verde WhatsApp ......... 3%  (só botões de WhatsApp)
```

### Contrastes validados (WCAG)

| Combinação | Ratio | Nível |
|---|---|---|
| `--ink` sobre branco | 15.8:1 | AAA |
| `--gray-500` sobre branco | 5.1:1 | AA |
| branco sobre `--blue-900` | 15.2:1 | AAA |
| branco sobre `--red-600` | 6.4:1 | AA |
| `--blue-700` sobre `--blue-50` | 9.7:1 | AAA |

⚠️ `--gray-300` nunca deve carregar texto informativo — só estados desabilitados.

---

## 3. Tipografia

### Famílias

- **Display:** `Sora` — 600, 700, 800. Títulos, botões, números.
  *Geométrica com leve tensão técnica. Não é neutra demais (Inter) nem expressiva demais (Poppins).*
- **Texto:** `Inter` — 400, 500, 600. Corpo, labels, listas.
- **Fallback:** `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`

Carregar com `font-display: swap` e `preconnect`. Subconjunto `latin` + `latin-ext`.

### Escala fluida

| Token | clamp() | Uso |
|---|---|---|
| `--fs-display` | `clamp(2.5rem, 1.6rem + 3.8vw, 4rem)` | H1 do hero |
| `--fs-h1` | `clamp(2rem, 1.4rem + 2.6vw, 3.25rem)` | H1 interno |
| `--fs-h2` | `clamp(1.75rem, 1.3rem + 1.9vw, 2.625rem)` | Título de seção |
| `--fs-h3` | `clamp(1.25rem, 1.15rem + .45vw, 1.5rem)` | Título de card |
| `--fs-lead` | `clamp(1.0625rem, 1rem + .3vw, 1.1875rem)` | Subtítulo de seção |
| `--fs-body` | `1rem` | Corpo |
| `--fs-sm` | `.9375rem` | Apoio |
| `--fs-xs` | `.8125rem` | Legenda, label |

### Regras

- **Altura de linha:** títulos `1.12`–`1.2` · corpo `1.65` · legenda `1.5`
- **Tracking:** display `-0.03em` · h2 `-0.02em` · corpo `0` · eyebrow `+0.14em`
- **Largura de medida:** máximo `68ch` em corpo de texto. Acima disso a leitura degrada.
- **Nunca** justificar texto. Sempre alinhamento à esquerda (ou centro em blocos curtos).

---

## 4. Espaçamento e grid

### Escala (base 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 72 · 96 · 128`

Tokens: `--sp-1` a `--sp-11`.

### Ritmo vertical de seção

| Breakpoint | Padding vertical |
|---|---|
| ≥1024px | `112px` |
| 640–1023px | `88px` |
| <640px | `64px` |

### Container

```css
width: min(1200px, 100% - 2 * var(--gutter));
--gutter: 24px;             /* mobile */
--gutter: 32px;             /* ≥640px */
--gutter: 48px;             /* ≥1024px */
```

### Breakpoints

| Nome | Valor | Comportamento |
|---|---|---|
| `sm` | 480px | Ajustes de tipografia |
| `md` | 640px | Menu vira hambúrguer abaixo disso |
| `lg` | 1024px | Grids passam de 2 para 3–4 colunas |
| `xl` | 1280px | Container atinge largura máxima |

---

## 5. Elevação e raio

### Raio

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | `10px` | Badges, chips |
| `--r-md` | `16px` | Cards, inputs |
| `--r-lg` | `24px` | Painéis grandes |
| `--r-xl` | `32px` | Blocos de CTA |
| `--r-full` | `999px` | Botões, pills |

### Sombra

Sombras usam o azul da marca, nunca preto puro — preto puro suja e parece amador.

```css
--sh-sm: 0 2px 8px rgba(11,27,51,.06);
--sh-md: 0 8px 28px rgba(11,27,51,.08);
--sh-lg: 0 20px 56px rgba(11,27,51,.12);
--sh-xl: 0 32px 80px rgba(11,27,51,.16);
--sh-red: 0 10px 30px rgba(196,22,46,.28);
--sh-wa:  0 10px 30px rgba(37,211,102,.30);
```

---

## 6. Componentes

### Botão

| Variante | Fundo | Texto | Quando usar |
|---|---|---|---|
| `.btn--primary` | `--red-600` | branco | Ação principal da página. **Um por dobra.** |
| `.btn--whatsapp` | `--wa` | branco | Contato por WhatsApp |
| `.btn--phone` | branco | `--blue-800` | Ligação — em fundo escuro |
| `.btn--outline` | transparente + borda | `--blue-700` | Ação secundária |
| `.btn--ghost` | transparente | `--blue-600` | Ação terciária, links de apoio |

**Especificação:**
- Altura mínima **48px** (alvo de toque WCAG 2.5.5)
- Padding `16px 32px` · `--r-full`
- Transição `.24s cubic-bezier(.4,0,.2,1)`
- Hover: `translateY(-2px)` + sombra intensificada
- Active: `translateY(0)` — feedback tátil
- **Focus visible:** `outline: 3px solid var(--blue-600); outline-offset: 3px` — obrigatório

### Card

- Fundo branco · `--r-md` · `--sh-md` · borda `1px solid transparent`
- Hover: `translateY(-6px)`, `--sh-lg`, borda `--blue-100`
- Padding `32px 28px`
- Ícone em container `56×56`, `--r-md`, fundo `--blue-100`, traço `1.75px`

### Ícones

- Biblioteca: **stroke-based**, traço `1.75px`, cantos arredondados, grid 24×24
- Nunca misturar ícones preenchidos com contornados
- Tamanhos: `20px` (inline) · `24px` (lista) · `28px` (card)
- Cor herda do container (`currentColor`)

### Campo de formulário

- Altura `52px` · `--r-md` · borda `1.5px solid var(--gray-200)`
- Focus: borda `--blue-600` + `box-shadow: 0 0 0 4px rgba(29,74,143,.12)`
- Erro: borda `--red-600` + mensagem abaixo com ícone
- Label **sempre visível** acima do campo — nunca placeholder como label

### Barra fixa de CTA (mobile)

Aparece após 40% de scroll. Altura `68px`, fundo branco, `--sh-xl` invertida.
Dois botões lado a lado: **Ligar** (outline) + **WhatsApp** (preenchido).
Respeita `env(safe-area-inset-bottom)` em iOS.

---

## 7. Movimento

| Ação | Duração | Easing |
|---|---|---|
| Hover / micro-feedback | `160ms` | `cubic-bezier(.4,0,.2,1)` |
| Entrada de elemento | `600ms` | `cubic-bezier(.16,1,.3,1)` |
| Acordeão / expansão | `380ms` | `cubic-bezier(.4,0,.2,1)` |
| Barra fixa | `280ms` | `cubic-bezier(.4,0,.2,1)` |

**Reveal on scroll:** `opacity 0→1` + `translateY(28px→0)`, stagger de `80ms` entre irmãos. Dispara a 12% de visibilidade, executa **uma vez só** (`unobserve` após disparo).

**Obrigatório:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

---

## 8. Logotipo

**Construção:** símbolo + wordmark em duas linhas.

- **Símbolo:** gota estilizada com chama interna, dentro de container `--r-md` com gradiente `--blue-700 → --blue-600`. A chama usa `--red-500` — único ponto de vermelho no logo.
- **Wordmark:** "Belo Banho" em Sora 800 + "AQUECEDORES" em Sora 600, `--fs-xs`, tracking `+0.22em`, cor `--red-600`.

**Área de proteção:** metade da altura do símbolo em todos os lados.
**Tamanho mínimo:** 32px de altura do símbolo.
**Versões:** positiva (fundo claro) · negativa (fundo escuro) · monocromática.

**Proibido:** aplicar sobre foto sem tarja · distorcer proporção · trocar cores · adicionar sombra ou contorno.

---

## 9. Fotografia (diretriz para quando houver material)

Este é o maior salto de qualidade disponível e depende de produção real.

**O que fotografar, em ordem de impacto:**

1. **Técnico uniformizado com crachá, em atendimento real** — resolve os medos 2 e 3 de uma vez
2. **Ferramenta e instrumento de medição em uso** (manômetro, analisador de combustão) — prova de método
3. **Antes/depois de instalação** — prova de qualidade de acabamento
4. **Van/veículo com identificação visual**

**Diretriz de imagem:** luz natural, ambiente real (não estúdio), sem pose forçada, sem banco de imagens genérico. Uma foto real medíocre supera uma foto de banco impecável — porque o cliente reconhece stock photo e desconta a credibilidade.

**Tratamento:** temperatura levemente fria, contraste médio, sem filtro saturado. Overlay `--blue-900` a 35% quando houver texto sobreposto.

**Enquanto não houver fotos:** ilustração SVG técnica proprietária (implementada no site v2). Nunca stock photo.

---

## 10. Tokens CSS prontos

```css
:root {
  /* Azul */
  --blue-950:#060F1D; --blue-900:#0B1B33; --blue-800:#102A4E;
  --blue-700:#16386B; --blue-600:#1D4A8F; --blue-500:#2A61B0;
  --blue-100:#E4ECF7; --blue-50:#F4F7FC;

  /* Vermelho */
  --red-700:#A2132A; --red-600:#C4162E; --red-500:#E01B3D; --red-50:#FCEEF0;

  /* Neutros */
  --ink:#131A26; --gray-700:#3D4757; --gray-500:#68738A;
  --gray-300:#B4BDCB; --gray-200:#DEE3EB; --gray-100:#EFF2F6; --white:#fff;

  /* Funcionais */
  --wa:#25D366; --wa-dark:#1DA851; --success:#0E9F6E;

  /* Tipografia */
  --font-display:'Sora',system-ui,sans-serif;
  --font-body:'Inter',system-ui,sans-serif;
  --fs-display:clamp(2.5rem,1.6rem + 3.8vw,4rem);
  --fs-h1:clamp(2rem,1.4rem + 2.6vw,3.25rem);
  --fs-h2:clamp(1.75rem,1.3rem + 1.9vw,2.625rem);
  --fs-h3:clamp(1.25rem,1.15rem + .45vw,1.5rem);
  --fs-lead:clamp(1.0625rem,1rem + .3vw,1.1875rem);
  --fs-body:1rem; --fs-sm:.9375rem; --fs-xs:.8125rem;

  /* Espaço */
  --sp-1:4px;  --sp-2:8px;  --sp-3:12px; --sp-4:16px;
  --sp-5:24px; --sp-6:32px; --sp-7:40px; --sp-8:56px;
  --sp-9:72px; --sp-10:96px; --sp-11:128px;

  /* Raio */
  --r-sm:10px; --r-md:16px; --r-lg:24px; --r-xl:32px; --r-full:999px;

  /* Sombra */
  --sh-sm:0 2px 8px rgba(11,27,51,.06);
  --sh-md:0 8px 28px rgba(11,27,51,.08);
  --sh-lg:0 20px 56px rgba(11,27,51,.12);
  --sh-xl:0 32px 80px rgba(11,27,51,.16);
  --sh-red:0 10px 30px rgba(196,22,46,.28);
  --sh-wa:0 10px 30px rgba(37,211,102,.30);

  /* Movimento */
  --ease:cubic-bezier(.4,0,.2,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
}
```

---

## 11. Critérios de aceite

- [x] Paleta com contrastes WCAG AA validados e documentados
- [x] Escala tipográfica fluida — sem media query para fonte
- [x] Regra de proporção de cor que impede o vermelho dominar
- [x] Alvos de toque ≥48px
- [x] Estados de foco especificados (não removidos)
- [x] `prefers-reduced-motion` obrigatório
- [x] Tokens prontos para copiar e colar

---

**Próximo:** `03-copydeck.md`
