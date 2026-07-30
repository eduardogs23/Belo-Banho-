# Belo Banho Aquecedores — Plano de SEO Técnico e Local

**Etapa 4 de 6** · Especificação executável. Inclui schema markup pronto para colar.

---

## 1. A verdade estratégica sobre este mercado

Para "conserto de aquecedor São Paulo", a disputa real **não é a lista orgânica**. É o **Local Pack** — o bloco de 3 empresas com mapa e estrelas que aparece antes de tudo.

Consequência prática:

> **O Google Business Profile é mais importante que o site.** O site existe para sustentar o GBP, converter o clique e ranquear em cauda longa.

Investir só no site e ignorar o GBP é o erro mais caro e mais comum da categoria.

---

## 2. Google Business Profile — prioridade máxima

### Checklist de configuração

| Item | Especificação |
|---|---|
| Categoria principal | **Serviço de reparo de aquecedor de água** |
| Categorias secundárias | Encanador · Empresa de aquecimento · Serviço de instalação de gás |
| Nome | `Belo Banho Aquecedores` — exatamente igual ao site, **sem keyword stuffing** (nome inflado gera suspensão) |
| Endereço | Idêntico ao footer do site, caractere por caractere |
| Área de atendimento | Listar os bairros atendidos |
| Horário | Idêntico ao site. Configurar horário especial em feriados |
| Telefone | Número local; o mesmo do site |
| Serviços | Cadastrar cada serviço individualmente com descrição |
| Fotos | ≥20: equipe, veículo, ferramenta, antes/depois, fachada. **Atualizar mensalmente** |
| Perguntas e respostas | Semear as 8 perguntas do FAQ, respondidas pelo perfil da empresa |
| Posts | 1 por semana, mínimo |

### Estratégia de avaliações — o ativo mais valioso

Avaliações são o principal fator de ranqueamento local **e** o principal fator de conversão. Sem elas, nada mais compensa.

**Processo operacional (implementar imediatamente):**

1. Ao concluir o serviço, o técnico entrega um cartão com QR code que abre direto o formulário de avaliação
2. 2 horas depois, mensagem automática de WhatsApp com o link
3. Meta: **≥15 avaliações nos primeiros 90 dias**, depois ritmo constante
4. **Responder 100% das avaliações em até 24h** — inclusive e principalmente as negativas

**Modelo de resposta a avaliação negativa:**
> Obrigado pelo retorno, [Nome]. Lamentamos que o atendimento não tenha correspondido ao nosso padrão. Gostaríamos de entender o que aconteceu e corrigir — pode falar com [responsável] em [telefone]. Levamos isso a sério.

*Uma negativa bem respondida converte mais que dez positivas genéricas. Demonstra que a empresa existe e assume responsabilidade.*

⚠️ **Nunca comprar avaliação.** Detecção do Google é eficaz, a penalidade é a suspensão do perfil, e o dano ao posicionamento premium é irreversível.

---

## 3. Pesquisa de palavras-chave

> **Nota metodológica:** volumes abaixo são estimativas de ordem de grandeza para calibrar prioridade, não dados de ferramenta. Validar em Google Keyword Planner / Ahrefs / Semrush antes de investir em mídia paga.

### Cauda comercial — prioridade máxima

| Palavra-chave | Intenção | Página |
|---|---|---|
| conserto de aquecedor a gás | Transacional | /conserto-de-aquecedor |
| assistência técnica aquecedor são paulo | Transacional | Home |
| conserto aquecedor rinnai | Transacional | /marcas/rinnai |
| manutenção de aquecedor a gás | Transacional | /manutencao-preventiva |
| instalação de aquecedor a gás | Transacional | /instalacao-de-aquecedor-a-gas |
| técnico de aquecedor perto de mim | Local | Home + GBP |
| conserto de aquecedor [bairro] | Local | /areas-atendidas/[bairro] |

### Cauda longa — alta conversão, baixa concorrência

| Palavra-chave | Página |
|---|---|
| aquecedor não esquenta a água | /blog + FAQ |
| aquecedor acende e apaga sozinho | /blog |
| chama amarela no aquecedor é perigoso | /blog |
| quanto custa consertar aquecedor a gás | FAQ (featured snippet) |
| aquecedor a gás vale a pena consertar ou trocar | /blog |
| manutenção aquecedor condomínio | /condominios |
| sistema de recirculação de água quente | /recirculacao-de-agua-quente |
| erro [código] aquecedor rinnai | /blog — **altíssima intenção** |

### Pauta editorial inicial (blog)

Prioridade decrescente. Cada post deve ter CTA contextual para o serviço correspondente.

1. **Aquecedor não esquenta a água: 7 causas e o que fazer antes de chamar o técnico** — alto volume, gera confiança ao ensinar
2. **Chama amarela no aquecedor: por que isso é um sinal de alerta** — segurança, reforça posicionamento
3. **Consertar ou trocar o aquecedor? Como decidir** — captura decisão de compra
4. **Códigos de erro Rinnai: o que cada um significa** — cauda longa de altíssima intenção
5. **Manutenção preventiva de aquecedor: o que é feito e com que frequência**
6. **NBR 13103 explicada: o que a norma exige da instalação a gás** — autoridade técnica
7. **Recirculação de água quente: quando compensa instalar**
8. **Aquecedor de passagem x boiler: qual faz sentido para a sua casa**

**Regra editorial:** cada post responde de verdade à pergunta. Conteúdo que enrola para forçar a ligação é detectado pelo leitor e pelo Google. Ensinar o cliente a resolver o simples é o que faz ele chamar você no complexo.

---

## 4. Schema markup (JSON-LD)

Colar no `<head>`. Este é o item técnico de maior impacto e o mais negligenciado pela concorrência.

### 4.1 LocalBusiness — em todas as páginas

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://belobanho.com.br/#organizacao",
  "name": "Belo Banho Aquecedores",
  "description": "Assistência técnica especializada em instalação, manutenção e conserto de aquecedores a gás, boilers e sistemas de aquecimento de água na Zona Sul de São Paulo.",
  "url": "https://belobanho.com.br",
  "telephone": "[CONFIRMAR: +5511XXXXXXXXX]",
  "email": "contato@belobanho.com.br",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CONFIRMAR]",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "[CONFIRMAR]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[CONFIRMAR]",
    "longitude": "[CONFIRMAR]"
  },
  "areaServed": [
    { "@type": "City", "name": "São Paulo" },
    { "@type": "Place", "name": "Campo Belo" },
    { "@type": "Place", "name": "Moema" },
    { "@type": "Place", "name": "Brooklin" },
    { "@type": "Place", "name": "Itaim Bibi" },
    { "@type": "Place", "name": "Vila Olímpia" },
    { "@type": "Place", "name": "Santo Amaro" },
    { "@type": "Place", "name": "Jardins" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00", "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00", "closes": "13:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de aquecedor a gás" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalação de aquecedor a gás" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção preventiva de aquecedor" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalação de boiler" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistema de recirculação de água quente" }}
    ]
  },
  "sameAs": ["[CONFIRMAR: Instagram, Facebook, perfil GBP]"]
}
```

⚠️ **Não incluir `aggregateRating` manualmente.** Rating inventado em schema é violação de diretriz e gera penalidade manual. As estrelas devem vir do GBP.

### 4.2 FAQPage — na home e nas páginas com FAQ

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa consertar um aquecedor a gás?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O valor depende do defeito e da peça envolvida. A visita técnica com diagnóstico tem valor fixo, abatido do serviço caso o orçamento seja aprovado. O valor fechado é informado antes de qualquer execução."
      }
    },
    {
      "@type": "Question",
      "name": "Com que frequência devo fazer manutenção preventiva no aquecedor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cada 12 meses em uso residencial. Em sistemas coletivos de condomínio ou uso intenso, a cada 6 meses."
      }
    },
    {
      "@type": "Question",
      "name": "Meu aquecedor tem conserto ou preciso trocar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na maioria dos casos tem conserto. A troca se justifica quando o custo do reparo se aproxima do valor de um aparelho novo ou quando não há mais peça de reposição disponível para o modelo."
      }
    }
  ]
}
```

### 4.3 Service — nas páginas de serviço

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conserto de aquecedor a gás",
  "provider": { "@id": "https://belobanho.com.br/#organizacao" },
  "areaServed": { "@type": "City", "name": "São Paulo" },
  "description": "Diagnóstico documentado, orçamento aprovado antes da execução e garantia por escrito no conserto de aquecedores a gás.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "BRL"
  }
}
```

### 4.4 BreadcrumbList — páginas internas

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://belobanho.com.br/" },
    { "@type": "ListItem", "position": 2, "name": "Conserto de aquecedor", "item": "https://belobanho.com.br/conserto-de-aquecedor" }
  ]
}
```

---

## 5. SEO técnico — checklist

### On-page

- [ ] **Um único `<h1>` por página**, contendo a keyword principal de forma natural
- [ ] Hierarquia `h2`/`h3` sem pular níveis
- [ ] `<title>` ≤60 caracteres · `<meta description>` ≤155
- [ ] `<link rel="canonical">` em todas as páginas
- [ ] Open Graph + Twitter Card completos (imagem 1200×630)
- [ ] `lang="pt-BR"` no `<html>`
- [ ] Todo `<img>` com `alt` descritivo — vazio (`alt=""`) só em decorativo
- [ ] URLs curtas, com hífen, sem acento, sem parâmetro
- [ ] Links internos contextuais entre serviços relacionados
- [ ] `robots.txt` + `sitemap.xml` enviados ao Search Console

### Performance (Core Web Vitals)

| Métrica | Meta | Como atingir |
|---|---|---|
| **LCP** | <2.0s | CSS crítico inline; hero sem imagem pesada; `preconnect` para fontes |
| **INP** | <200ms | JS mínimo, sem framework, listeners passivos |
| **CLS** | <0.05 | `width`/`height` explícitos em toda mídia; `font-display: swap` com fallback métrico próximo |

**Regras adicionais:**
- Imagens em **WebP/AVIF**, com `loading="lazy"` fora da primeira dobra
- `fetchpriority="high"` na imagem do LCP
- Zero biblioteca externa não essencial — o site v2 é HTML/CSS/JS puro por decisão de performance
- Hospedagem em CDN (Vercel — já configurado)

### Mobile

- [ ] Viewport correto
- [ ] Alvos de toque ≥48px
- [ ] Fonte base ≥16px (evita zoom automático no iOS)
- [ ] `tel:` e `wa.me` funcionando em toque
- [ ] Sem scroll horizontal em nenhuma largura

### Segurança e conformidade

- [ ] HTTPS obrigatório com redirect de HTTP
- [ ] `www` → apex (ou o inverso) com 301 consistente
- [ ] Página de Política de Privacidade (LGPD)
- [ ] Banner de cookies se houver analytics com cookie
- [ ] Consentimento explícito no formulário

---

## 6. Estratégia de páginas locais

Cada página de bairro precisa de conteúdo genuinamente único — não é template com nome trocado.

**Estrutura mínima:**

1. H1: `Conserto de Aquecedor em [Bairro] — Belo Banho Aquecedores`
2. Parágrafo com referência **real** ao bairro (perfil de imóvel predominante, particularidade de instalação da região)
3. Serviços prestados na região
4. Ruas/microrregiões atendidas
5. FAQ específico do bairro
6. Mapa incorporado
7. CTA

**Exemplo de particularidade real utilizável:** prédios antigos de Moema e Campo Belo frequentemente têm aquecedor em área de serviço fechada, o que exige atenção redobrada à ventilação exigida pela NBR 13103. Isso é verdadeiro, útil e impossível de copiar sem conhecimento do território.

⚠️ **Não criar 30 páginas de bairro de uma vez.** Começar com 5, medir desempenho, escalar o que funcionar. Volume de páginas finas é penalizado (Helpful Content).

---

## 7. Link building

Nesta categoria, autoridade de domínio importa menos que sinais locais. Prioridade:

1. **Citações NAP** — Apontador, Telelistas, Solutudo, GuiaMais, Yelp Brasil. NAP idêntico em todas
2. **Associações de bairro e grupos de síndicos** — parceria real, não link comprado
3. **Fornecedores e distribuidores de peças** — página de "assistências autorizadas/parceiras"
4. **Imobiliárias e administradoras de condomínio** — indicação mútua
5. **Imprensa local** — pauta de segurança (intoxicação por monóxido no inverno) é jornalisticamente atraente e gera link editorial

❌ Não comprar links. ❌ Não usar PBN. O risco não compensa num negócio local.

---

## 8. Mensuração

**Ferramentas obrigatórias:** Google Search Console · Google Analytics 4 · Google Business Profile Insights

**KPIs por horizonte:**

| Prazo | Meta |
|---|---|
| 30 dias | GBP completo, ≥10 avaliações, site indexado, Core Web Vitals verdes |
| 90 dias | Top 3 no Local Pack para "conserto de aquecedor [bairro]", ≥25 avaliações |
| 180 dias | Primeira página orgânica para 3+ termos comerciais, blog gerando tráfego |
| 365 dias | Referência regional; tráfego orgânico como canal principal de aquisição |

---

## 9. Critérios de aceite

- [x] GBP priorizado acima do site, com justificativa
- [x] Schema markup pronto para colar, sem rating inventado
- [x] Keywords mapeadas para páginas específicas
- [x] Core Web Vitals com metas numéricas e método
- [x] Estratégia local com alerta anti-doorway-page
- [x] Pauta editorial com 8 pautas priorizadas
- [x] Limitação metodológica dos volumes declarada honestamente

---

**Próximo:** `05-plano-cro.md`
