# Belo Banho Aquecedores — Arquitetura de Informação e Copydeck

**Etapa 3 de 6** · Todo o texto do site, seção por seção. Nada aqui é placeholder criativo — é o texto final, exceto onde marcado `[CONFIRMAR]`.

---

## 1. Arquitetura do site

### Decisão: híbrido → multipágina

A v1 era página única. **Isso limita severamente o alcance orgânico** — não dá para ranquear "conserto de aquecedor Rinnai" e "manutenção aquecedor condomínio" com a mesma URL.

**Arquitetura recomendada:**

```
/                                    Home — captura de pane + visão geral
│
├── /conserto-de-aquecedor           ⭐ maior volume de busca comercial
├── /instalacao-de-aquecedor-a-gas
├── /manutencao-preventiva
├── /instalacao-de-boiler
├── /recirculacao-de-agua-quente
├── /condominios                     B2B, contrato recorrente
│
├── /marcas/
│   ├── /marcas/rinnai               ⭐ intenção altíssima
│   ├── /marcas/bosch
│   ├── /marcas/lorenzetti
│   ├── /marcas/komeco
│   └── /marcas/rheem
│
├── /areas-atendidas/
│   ├── /areas-atendidas/campo-belo
│   ├── /areas-atendidas/moema
│   ├── /areas-atendidas/brooklin
│   ├── /areas-atendidas/itaim-bibi
│   └── /areas-atendidas/santo-amaro
│
├── /sobre                           autoridade, equipe, CNPJ
├── /garantia                        ⭐ página de confiança — rara na categoria
├── /blog/                           topo de funil, autoridade técnica
├── /orcamento                       formulário completo
│
└── /politica-de-privacidade         LGPD — obrigatório
```

**Prioridade de construção:**

| Fase | Páginas | Justificativa |
|---|---|---|
| **1 — agora** | Home, /conserto-de-aquecedor, /garantia | Cobrem 70% da intenção comercial |
| **2** | Serviços restantes, /condominios | Completa o funil |
| **3** | /marcas/*, /areas-atendidas/* | Escala SEO local e por marca |
| **4** | /blog, /sobre | Autoridade de longo prazo |

**Regra anti-canibalização:** páginas de bairro e de marca **não** podem ser cópias com palavra trocada. Cada uma precisa de ≥40% de conteúdo único (referências locais reais, particularidades técnicas da marca). Google penaliza doorway pages.

---

## 2. Wireframe da Home — ordem e justificativa

| # | Bloco | Objetivo | Por que nesta posição |
|---|---|---|---|
| 1 | Barra de urgência | Captura pane imediata | Antes de tudo — quem está em crise não rola a página |
| 2 | Header fixo | Navegação + CTA persistente | — |
| 3 | **Hero** | Proposta de valor + 2 CTAs | 8 segundos para responder "vocês resolvem meu problema?" |
| 4 | **Faixa de confiança** | 4 provas verificáveis | Imediatamente após o hero — antes que a dúvida se instale |
| 5 | Serviços | Cobertura de escopo | Cliente confirma que o problema dele está listado |
| 6 | **Como trabalhamos** | Método em 4 etapas | Diferencial central do posicionamento |
| 7 | **Segurança e norma** | Endereça o medo latente | Nenhum concorrente faz isso |
| 8 | Manutenção preventiva | Upsell / recorrência | Depois de estabelecer confiança |
| 9 | Recirculação | Ticket alto | Público de projeto |
| 10 | Marcas | Confirmação de competência | Objeção "atendem minha marca?" |
| 11 | Área de cobertura | Objeção "atendem meu bairro?" | Objeção final antes do CTA |
| 12 | **Garantia** | Reversão de risco | Imediatamente antes do CTA principal |
| 13 | FAQ | Objeções residuais + SEO | Captura featured snippet |
| 14 | **Formulário + CTA final** | Conversão | — |
| 15 | Footer | Navegação, NAP, legal | — |
| 16 | Barra fixa mobile | Conversão persistente | Aparece após 40% de scroll |

**Mudança relevante em relação à v1:** depoimentos saíram. Voltam quando houver widget real do Google Business Profile. Depoimento digitado sem fonte verificável pesa negativamente contra o público que estamos mirando.

---

## 3. Copydeck — Home

### 3.1 Barra de urgência (topo)

> **Sem água quente hoje?** Atendimento de emergência — [Ligar agora] [WhatsApp]

*Racional: 60%+ do tráfego chega em estado de pane. Dar a saída antes do hero reduz drasticamente a taxa de rejeição desse segmento.*

---

### 3.2 Hero

**Eyebrow:** `Assistência técnica especializada · Zona Sul de São Paulo`

**H1:**
> ## Aquecedor com defeito não se resolve no improviso.

**Subtítulo:**
> Instalação, manutenção e conserto de aquecedores a gás com diagnóstico documentado, técnico identificado e orçamento aprovado antes de qualquer execução.

**CTA primário:** `Solicitar orçamento` → formulário
**CTA secundário:** `Falar no WhatsApp` → wa.me

**Faixa de micro-provas sob os CTAs:**
`Orçamento sem compromisso` · `Técnico identificado` · `Serviço com garantia por escrito`

*Racional do H1: não promete rapidez (commodity, todo mundo promete). Ataca o improviso — que é exatamente o medo real do cliente e o ponto fraco do concorrente informal. Posiciona preço premium na primeira linha.*

**Alternativas para teste A/B:**
- B: "Água quente resolvida com padrão de engenharia."
- C: "Seu aquecedor nas mãos de quem segue norma técnica."

---

### 3.3 Faixa de confiança (4 colunas)

| Ícone | Título | Descrição |
|---|---|---|
| Escudo | **Conformidade NBR 13103** | Instalação e manutenção seguindo a norma técnica de aparelhos a gás. |
| Crachá | **Técnico identificado** | Você recebe o nome e a foto do técnico antes da visita. |
| Documento | **Orçamento antes da execução** | Nada é executado sem sua aprovação por escrito. |
| Selo | **Garantia formalizada** | `[CONFIRMAR: X]` dias de garantia documentada em todo serviço. |

---

### 3.4 Serviços

**Eyebrow:** `O que fazemos`
**H2:** Especialistas em aquecimento de água — e só nisso.
**Lead:** Não somos uma manutenção geral que também mexe com aquecedor. É o nosso único serviço, e é por isso que fazemos bem.

| Serviço | Descrição |
|---|---|
| **Conserto de aquecedor** | Diagnóstico da falha, orçamento da peça e reparo executado com teste de funcionamento ao final. |
| **Instalação de aquecedor a gás** | Dimensionamento conforme o consumo real da residência, com exaustão e ventilação dentro da norma. |
| **Manutenção preventiva** | Limpeza, regulagem de combustão e verificação de estanqueidade. Evita a pane antes dela acontecer. |
| **Manutenção corretiva** | Correção de falhas de funcionamento com substituição de componentes originais ou equivalentes homologados. |
| **Instalação de boiler** | Sistemas de acumulação para residências com alto consumo simultâneo de água quente. |
| **Recirculação de água quente** | Água quente imediata em todos os pontos, sem desperdício de espera. |
| **Atendimento residencial** | Casas e apartamentos, com visita agendada em horário combinado. |
| **Condomínios** | Contrato de manutenção com relatório técnico e nota fiscal para prestação de contas. |

---

### 3.5 Como trabalhamos (bloco de método — diferencial central)

**Eyebrow:** `Nosso método`
**H2:** Quatro etapas. Nenhuma surpresa.
**Lead:** O improviso é o que torna um serviço técnico caro e perigoso. Nosso processo existe para eliminá-lo.

**01 · Triagem por telefone ou WhatsApp**
Descrevemos as possibilidades antes de sair da oficina. Se o problema for simples e você puder resolver sozinho, dizemos isso — sem cobrar visita.

**02 · Visita com técnico identificado**
Você recebe nome e foto do técnico antes da chegada. Ele chega uniformizado, com crachá e ferramenta de medição.

**03 · Diagnóstico e orçamento por escrito**
Explicamos o que está errado, o que precisa ser feito e quanto custa. Se a peça precisar ser encomendada, o prazo é informado antes de você decidir. **Nada é executado sem sua aprovação.**

**04 · Execução, teste e garantia**
O serviço é testado na sua frente. Você recebe a garantia por escrito e a nota fiscal.

*Racional: a etapa 01 ("se você puder resolver sozinho, dizemos isso") é o elemento de maior impacto de confiança do site inteiro. Custa pouquíssimo em receita perdida e compra credibilidade que nenhuma quantidade de adjetivo compra.*

---

### 3.6 Segurança e norma (bloco escuro)

**Eyebrow:** `Segurança`
**H2:** Gás não admite margem de erro.
**Lead:** Instalação irregular de aparelho a gás é causa recorrente de intoxicação por monóxido de carbono em ambiente residencial. Não é um detalhe técnico — é o motivo pelo qual esse serviço não deve ser feito por qualquer um.

**Verificamos em toda visita:**
- **Estanqueidade da linha de gás** — teste de vazamento em conexões e registro
- **Exaustão dos gases de combustão** — chaminé desobstruída e com tiragem adequada
- **Ventilação do ambiente** — área mínima de abertura conforme NBR 13103
- **Qualidade da combustão** — chama regulada, sem formação excessiva de monóxido
- **Pressão de entrada** — dentro da faixa de operação do equipamento

**Nota de encerramento:**
> Se encontrarmos uma condição de risco, comunicamos imediatamente — mesmo quando não é o serviço que você contratou.

*Racional: esta seção não existe em nenhum concorrente da região. É o maior diferencial de percepção de autoridade do site e responde ao medo 3 (explosão/vazamento), que é latente e nunca verbalizado.*

---

### 3.7 Manutenção preventiva

**Eyebrow:** `Manutenção preventiva`
**H2:** A pane sempre avisa antes. Quase ninguém escuta.
**Lead:** Chama amarelada, água que oscila de temperatura, cheiro de gás, aparelho que desarma sozinho. São sinais de desgaste — e o momento mais barato de resolver.

- **Consumo de gás sob controle** — queimador sujo ou desregulado gasta mais para aquecer o mesmo volume
- **Vida útil prolongada** — desgaste identificado cedo não vira troca de componente caro
- **Segurança verificada** — estanqueidade, exaustão e combustão checadas em toda revisão
- **Sem banho frio no pior dia** — a falha quase nunca acontece em dia conveniente

**Recomendação de frequência:**
Uso residencial — a cada 12 meses. Uso intenso ou sistema coletivo de condomínio — a cada 6 meses.

---

### 3.8 Recirculação de água quente

**Eyebrow:** `Sistemas de recirculação`
**H2:** Água quente imediata, sem litros pelo ralo.
**Lead:** Em residências com tubulação longa, cada banho começa com 20 a 60 segundos de água fria descartada. O sistema de recirculação mantém a água aquecida em circulação e elimina essa espera.

- **Conforto imediato** — água na temperatura assim que a torneira abre
- **Redução de desperdício** — elimina o volume descartado na espera
- **Compatível com o aparelho existente** — na maioria dos casos não exige troca do aquecedor
- **Projeto dimensionado** — avaliamos traçado, bomba e controle antes de propor

**CTA:** `Avaliar viabilidade na minha casa`

---

### 3.9 Marcas

**Eyebrow:** `Marcas atendidas`
**H2:** Atendemos as principais marcas do mercado.
**Lead:** Peças originais ou equivalentes homologadas, conforme disponibilidade e o que fizer mais sentido para o seu caso — sempre informado antes.

`Rinnai` `Bosch` `Lorenzetti` `Komeco` `Rheem` `Orbis` `Cumulus` `Inova` `Harman` `Sakura`

**Nota:** Sua marca não está na lista? Fale com a gente — a maioria dos aquecedores a gás compartilha os mesmos princípios de funcionamento.

---

### 3.10 Área de cobertura

**Eyebrow:** `Onde atendemos`
**H2:** Zona Sul de São Paulo, com equipe próxima.
**Lead:** Trabalhar numa região concentrada é uma escolha: reduz o tempo até a sua casa e permite retorno rápido se algo precisar de ajuste.

`Campo Belo` `Moema` `Brooklin` `Itaim Bibi` `Vila Olímpia` `Santo Amaro` `Jardins` `Vila Nova Conceição` `Chácara Santo Antônio` `Granja Julieta`

**Nota:** `[CONFIRMAR: raio de atendimento real]` Não encontrou seu bairro? Consulte disponibilidade.

---

### 3.11 Garantia

**Eyebrow:** `Garantia`
**H2:** O que está coberto — e o que não está.

**Lead:** Garantia vaga não é garantia. A nossa vem por escrito, com prazo e escopo definidos.

**Coberto:**
- Serviço executado — `[CONFIRMAR: X]` dias
- Peça substituída — `[CONFIRMAR: X]` dias ou prazo do fabricante, o que for maior
- Retorno sem custo se a falha original reincidir dentro do prazo

**Não coberto:**
- Falha nova, sem relação com o serviço executado
- Dano por mau uso, obra de terceiros ou intervenção de outro prestador
- Desgaste natural de componente que estava fora do escopo do orçamento aprovado

*Racional: declarar o que NÃO está coberto aumenta a confiança, não reduz. Sinaliza que o documento é real e que a empresa não vai criar exceção na hora do problema.*

---

### 3.12 FAQ

Escrito para capturar featured snippet — resposta objetiva na primeira frase, detalhe depois.

**Quanto custa consertar um aquecedor a gás?**
O valor depende do defeito e da peça envolvida. A visita técnica com diagnóstico custa `[CONFIRMAR: R$ X]` e é abatida do serviço caso você aprove o orçamento. Você recebe o valor fechado antes de qualquer execução — sem custo adicional depois.

**Em quanto tempo vocês atendem?**
`[CONFIRMAR: prazo real]` Atendimentos de emergência têm prioridade na agenda. Ao entrar em contato, informamos o horário disponível mais próximo antes de você se comprometer.

**Com que frequência devo fazer manutenção preventiva?**
A cada 12 meses em uso residencial. Em sistemas coletivos de condomínio ou uso intenso, a cada 6 meses. A revisão regular mantém o consumo de gás sob controle e verifica as condições de segurança do aparelho.

**Vocês emitem nota fiscal?**
`[CONFIRMAR]` Sim. Emitimos nota fiscal em todos os serviços, o que é requisito para condomínios e para acionamento de garantia.

**Meu aquecedor tem conserto ou preciso trocar?**
Na maioria dos casos tem conserto. A troca só se justifica quando o custo do reparo se aproxima do valor de um aparelho novo ou quando o modelo não tem mais peça de reposição disponível. Dizemos isso claramente no diagnóstico — inclusive quando a recomendação é não consertar.

**Quais marcas vocês atendem?**
Rinnai, Bosch, Lorenzetti, Komeco, Rheem, Orbis, Cumulus, Inova, entre outras. A maioria dos aquecedores a gás de passagem compartilha os mesmos princípios de funcionamento, então mesmo marcas menos comuns costumam ser atendidas.

**O orçamento tem custo?**
A visita técnica com diagnóstico tem o valor de `[CONFIRMAR: R$ X]`, abatido do serviço se aprovado. Isso existe porque o diagnóstico exige deslocamento e instrumento de medição — não é um "dar uma olhada". Orçamentos de instalação e projetos são gratuitos.

**Vale a pena instalar recirculação de água quente?**
Vale quando a distância entre o aquecedor e os pontos de uso gera espera longa — tipicamente casas ou apartamentos grandes. Em imóveis compactos o ganho é pequeno. Avaliamos e dizemos honestamente se compensa no seu caso.

---

### 3.13 CTA final + formulário

**H2:** Vamos resolver isso.
**Lead:** Descreva o que está acontecendo. Retornamos com o próximo passo e o prazo de atendimento.

**Formulário (4 campos — ver justificativa em `05-plano-cro.md`):**

| Campo | Tipo | Obrigatório |
|---|---|---|
| Nome | texto | Sim |
| WhatsApp | tel | Sim |
| Bairro | texto | Sim |
| Qual a situação? | radio: `Sem água quente` / `Instalação` / `Manutenção` / `Condomínio` / `Outro` | Sim |
| Detalhe (opcional) | textarea | Não |

**Botão:** `Enviar solicitação`
**Nota sob o botão:** Sem compromisso. Respondemos em horário comercial.
**Consentimento LGPD:** Ao enviar, você concorda com nossa [Política de Privacidade](/politica-de-privacidade). Usamos seus dados apenas para responder esta solicitação.

**Alternativa lateral:** Prefere falar agora? `[WhatsApp]` `[Ligar]`

---

### 3.14 Footer

**Coluna 1 — Marca**
Logo + "Assistência técnica especializada em aquecedores a gás, boilers e sistemas de aquecimento de água. Zona Sul de São Paulo."

**Coluna 2 — Serviços** (links para as páginas de serviço)
**Coluna 3 — Institucional** (Sobre, Garantia, Áreas atendidas, Blog, FAQ)
**Coluna 4 — Contato (NAP consistente — crítico para SEO local)**

```
Belo Banho Aquecedores
[CONFIRMAR: Endereço completo]
Campo Belo, São Paulo – SP, [CEP]
Telefone: [CONFIRMAR]
WhatsApp: [CONFIRMAR]
E-mail: contato@belobanho.com.br
Seg. a Sex. 8h–18h · Sáb. 8h–13h [CONFIRMAR]
```

**Rodapé legal:**
`© 2026 Belo Banho Aquecedores · CNPJ [CONFIRMAR] · Política de Privacidade`

⚠️ **NAP (Name, Address, Phone) precisa ser idêntico, caractere por caractere, ao Google Business Profile.** Divergência prejudica ranqueamento local.

---

## 4. Microcopy

| Contexto | Texto |
|---|---|
| Botão WhatsApp (aria-label) | Falar com a Belo Banho Aquecedores no WhatsApp |
| Mensagem pré-preenchida WhatsApp | "Olá! Vim pelo site e gostaria de solicitar um orçamento." |
| Formulário — sucesso | Recebemos sua solicitação. Retornamos em horário comercial pelo WhatsApp informado. |
| Formulário — erro de campo | Precisamos deste dado para retornar o contato. |
| Formulário — erro de envio | Não conseguimos enviar agora. Tente novamente ou fale direto no WhatsApp. |
| Campo WhatsApp — ajuda | Com DDD. É por aqui que retornamos. |
| Barra fixa mobile | `Ligar` · `WhatsApp` |
| Skip link | Pular para o conteúdo principal |
| Menu mobile (aria) | Abrir menu de navegação / Fechar menu |
| Página 404 | Esta página não existe. Talvez você esteja procurando [Serviços] ou queira [Falar no WhatsApp]. |

---

## 5. Meta tags por página

| Página | Title (≤60) | Description (≤155) |
|---|---|---|
| Home | Belo Banho Aquecedores \| Conserto e Instalação em SP | Assistência técnica em aquecedores a gás na Zona Sul de SP. Técnico identificado, orçamento antes da execução e garantia por escrito. |
| /conserto-de-aquecedor | Conserto de Aquecedor a Gás \| Zona Sul SP | Aquecedor sem água quente? Diagnóstico documentado e orçamento aprovado antes do reparo. Atendemos as principais marcas. |
| /manutencao-preventiva | Manutenção Preventiva de Aquecedor \| Belo Banho | Revisão completa com verificação de estanqueidade, exaustão e combustão conforme NBR 13103. Residencial e condomínios. |
| /instalacao-de-aquecedor-a-gas | Instalação de Aquecedor a Gás \| Belo Banho SP | Instalação dimensionada conforme o consumo real, com exaustão e ventilação dentro da norma técnica. |
| /garantia | Nossa Garantia \| Belo Banho Aquecedores | O que está coberto e o que não está, por escrito. Transparência total sobre prazo e escopo do serviço. |
| /condominios | Manutenção de Aquecedores para Condomínios \| SP | Contrato de manutenção com relatório técnico e nota fiscal para prestação de contas. Zona Sul de São Paulo. |

---

## 6. Critérios de aceite

- [x] Arquitetura multipágina com prioridade de construção definida
- [x] Ordem da home justificada bloco a bloco
- [x] Depoimentos fabricados removidos e substituídos por prova verificável
- [x] Todo dado não confirmado marcado `[CONFIRMAR]` — zero invenção
- [x] FAQ escrito para featured snippet
- [x] Microcopy completa, incluindo estados de erro
- [x] Meta tags dentro dos limites de caracteres
- [x] NAP marcado como crítico para SEO local

---

**Próximo:** `04-plano-seo.md`
