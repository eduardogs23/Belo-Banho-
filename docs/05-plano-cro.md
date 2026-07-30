# Belo Banho Aquecedores — Plano de CRO e Mensuração

**Etapa 5 de 6** · Hipóteses, instrumentação e roteiro de testes.

---

## 1. Modelo de conversão

Neste negócio a conversão **não é o formulário**. É o **contato iniciado**, em qualquer canal.

```
Visitante
   ├── Liga (tel:)               ← maior intenção, menor atrito
   ├── Abre WhatsApp (wa.me)     ← canal dominante no Brasil
   └── Envia formulário          ← menor intenção, maior qualificação
```

**Erro comum na categoria:** otimizar só o formulário e tratar telefone/WhatsApp como secundários. No estado de pane, **>70% do contato acontece por telefone ou WhatsApp**. O formulário serve os estados "Projeto" e "Prevenção".

**Consequência de design:** telefone e WhatsApp têm que estar acessíveis em qualquer ponto de scroll, em qualquer dispositivo. Daí a barra de urgência no topo e a barra fixa no mobile.

---

## 2. Princípios de conversão adotados

**1. Atrito proporcional à intenção.**
Quem está sem água quente recebe um botão. Quem quer projeto de recirculação recebe um formulário. Exigir formulário de quem está em crise perde o cliente.

**2. Reversão de risco antes do CTA.**
A seção de garantia vem imediatamente antes do CTA final — não por acaso. O último argumento antes de pedir a ação deve remover o risco percebido.

**3. Zero urgência artificial.**
Sem contador, sem "restam 2 vagas". O cliente já está em urgência real. Fabricar escassez sobre alguém em crise é predatório e destrói o posicionamento premium. **Esta regra não é negociável.**

**4. Transparência de preço reduz atrito.**
Contraintuitivo, mas robusto: informar o valor da visita e que ele é abatido *aumenta* conversão. Elimina o medo de "quanto vão me cobrar" e filtra quem nunca fecharia.

**5. Um CTA primário por dobra.**
Duas ações de mesmo peso visual dividem a atenção e reduzem ambas.

---

## 3. Formulário — decisões de design

### Por que 4 campos e não 8

Cada campo adicional reduz a taxa de envio. A pergunta correta não é "o que seria bom saber?", é **"o que impede o retorno do contato se faltar?"**

| Campo | Mantido? | Justificativa |
|---|---|---|
| Nome | ✅ | Personaliza o retorno |
| WhatsApp | ✅ | Canal de retorno. **Único obrigatório de contato** |
| Bairro | ✅ | Qualifica cobertura antes do retorno — evita ligação inútil |
| Situação (radio) | ✅ | Roteia para o técnico certo e define prioridade |
| Detalhe | ⚪ opcional | Quem quiser detalhar, detalha |
| E-mail | ❌ | Retorno é por WhatsApp. Campo a mais sem uso |
| Marca do aquecedor | ❌ | Pergunta-se no retorno. A maioria não sabe de cabeça |
| Endereço completo | ❌ | Pedir endereço antes do primeiro contato gera desconfiança |
| Melhor horário | ❌ | Resolve-se na conversa |

### Especificações de usabilidade

- `type="tel"` + `inputmode="tel"` → teclado numérico no mobile
- Máscara de telefone aplicada **durante** a digitação
- Label **sempre visível** acima do campo — placeholder como label é falha de acessibilidade e prejudica preenchimento
- `autocomplete` correto: `name`, `tel`
- Validação **no blur**, nunca a cada tecla
- Mensagem de erro específica e útil — nunca "campo inválido"
- Botão desabilitado **apenas durante o envio**, com feedback de carregamento
- Fonte ≥16px (evita zoom automático no iOS)

### Radio de situação — dupla função

Além de rotear internamente, funciona como **micro-compromisso**: o clique inicial aumenta significativamente a probabilidade de conclusão (efeito de consistência).

---

## 4. Instrumentação — o que medir

### Eventos GA4

| Evento | Disparo | Parâmetros |
|---|---|---|
| `contato_whatsapp` | Clique em qualquer link `wa.me` | `origem` (hero, barra_fixa, footer, secao_x) |
| `contato_telefone` | Clique em qualquer link `tel:` | `origem` |
| `form_iniciado` | Primeiro foco em campo do formulário | — |
| `form_enviado` | Submit bem-sucedido | `situacao`, `bairro` |
| `form_erro` | Falha de validação ou envio | `campo`, `tipo_erro` |
| `scroll_75` | 75% de profundidade de rolagem | — |
| `faq_aberto` | Abertura de item do FAQ | `pergunta` |
| `cta_secundario` | Clique em CTA não primário | `secao` |

**Conversões primárias no GA4:** `contato_whatsapp`, `contato_telefone`, `form_enviado`.

### Por que rastrear a origem do clique

Sem o parâmetro `origem`, sabe-se *quanto* converte, mas não *onde*. Com ele, descobre-se em qual seção o cliente decide — e é ali que se investe.

### Ferramentas recomendadas

| Ferramenta | Uso |
|---|---|
| GA4 | Eventos e funil |
| Google Tag Manager | Gestão de tags sem deploy |
| Microsoft Clarity | Mapa de calor e gravação de sessão — **gratuito, alto valor** |
| Search Console | Consultas de entrada |

**Clarity é a maior alavanca no início:** com pouco tráfego, teste A/B não tem significância estatística. Gravação de sessão revela problemas com 50 visitas.

---

## 5. Backlog de testes A/B

⚠️ **Pré-requisito:** teste A/B exige ~100 conversões por variante para significância. Com tráfego inicial baixo, **não teste — use Clarity e corrija o óbvio.** Comece a testar quando houver volume.

Ordem de prioridade por impacto esperado ÷ esforço:

| # | Hipótese | Variante A | Variante B | Métrica |
|---|---|---|---|---|
| 1 | Transparência de preço aumenta conversão | Sem valor de visita | "Visita técnica R$ X, abatida do serviço" | Taxa de contato |
| 2 | Barra fixa mobile aumenta contato | Sem barra | Com barra após 40% de scroll | `contato_*` no mobile |
| 3 | H1 de método supera H1 de rapidez | "Aquecedor com defeito não se resolve no improviso" | "Água quente resolvida com padrão de engenharia" | Scroll + contato |
| 4 | Barra de urgência no topo | Sem | Com | Rejeição + contato |
| 5 | Formulário na home vs. só CTA | Só botão para /orcamento | Formulário embutido na home | `form_enviado` |
| 6 | Foto real de técnico vs. ilustração | Ilustração SVG | Foto real de técnico | Contato |
| 7 | Ordem: garantia antes vs. depois do FAQ | Depois | Antes | Contato |

**Teste 6 tem o maior potencial isolado** — mas depende de produção fotográfica.

---

## 6. Otimizações de conversão já implementadas no site v2

| Elemento | Problema resolvido |
|---|---|
| Barra de urgência no topo | Pane não precisa rolar para achar contato |
| Barra fixa mobile após 40% de scroll | Contato acessível em qualquer ponto |
| Telefone clicável em todo lugar | Reduz atrito no estado de maior intenção |
| Faixa de confiança logo após o hero | Antecipa objeção antes que vire dúvida |
| Seção "Como trabalhamos" | Responde "posso confiar?" — objeção nº1 |
| Seção de segurança/NBR | Endereça medo latente não verbalizado |
| Área de cobertura explícita | Elimina "será que atendem meu bairro?" |
| Garantia com escopo e exclusões | Reversão de risco antes do CTA |
| Formulário de 4 campos | Atrito mínimo com qualificação suficiente |
| FAQ com respostas honestas | Objeções residuais + featured snippet |
| Mensagem de WhatsApp pré-preenchida | Remove o "e agora, o que escrevo?" |
| Contraste e alvos de toque AA | Acessibilidade = conversão em mobile |

---

## 7. Operação — onde a conversão realmente se perde

O site entrega o contato. **A venda se perde depois, na operação.** Sem isso, nada acima importa.

| Item | Padrão-alvo |
|---|---|
| Tempo de resposta no WhatsApp | **<5 minutos** em horário comercial. Após 30 min, a chance de fechamento despenca — o cliente já chamou outro |
| Resposta fora do horário | Mensagem automática com prazo real de retorno. Nunca silêncio |
| Primeira mensagem | Confirmar bairro, entender o problema, dar prazo. **Nunca** começar por preço |
| Envio da identificação do técnico | Foto e nome no dia anterior ou na manhã da visita — é o pilar de confiança nº1, e depende 100% da operação |
| Follow-up de orçamento não fechado | 1 mensagem em 48h. Uma só. Insistir queima a marca |
| Pós-serviço | Mensagem em 2h com pedido de avaliação no Google |

⚠️ **Se o WhatsApp não for respondido rápido, todo o investimento em site e SEO é desperdiçado.** Esta é a maior alavanca de receita do projeto inteiro, e é gratuita.

---

## 8. Critérios de aceite

- [x] Modelo de conversão multicanal, não centrado em formulário
- [x] Cada campo do formulário justificado — inclusive os removidos
- [x] Plano de eventos GA4 com parâmetro de origem
- [x] Backlog de testes priorizado, com alerta de significância estatística
- [x] Proibição explícita de urgência artificial
- [x] Gargalo operacional identificado e quantificado

---

**Próximo:** implementação — `site/index.html`
