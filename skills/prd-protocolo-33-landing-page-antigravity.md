# PRD: Landing Page do Protocolo 33 para Anti-Gravity

## Introdução / Visão Geral

Este documento especifica a implementação de uma landing page de alta conversão para o produto **Protocolo 33**, com foco em público majoritariamente feminino, estética premium escura com simbologia de percepção, dinheiro e campo energético, e estrutura de venda orientada pela copy existente e pelo design system já definido.

A página deve ser construída no **Anti-Gravity** como uma experiência editorial-comercial de alta percepção de valor, sem sacrificar clareza, velocidade de leitura, escaneabilidade, performance e conversão.

A proposta central do produto é apresentar o **Protocolo 33** como um processo de 33 dias para revogar contratos de linhagem relacionados à escassez financeira. A landing page deve traduzir essa promessa com clareza, densidade simbólica e CTA forte, preservando o tom da copy e a direção visual do design system. Base de copy: `pagina-de-vendas-protocolo33(1).md`. Base de sistema visual e lógica estrutural: `design_system(1).py`, `core(2).py` e `search(1).py`.

## Contexto do Produto

- **Nome do produto:** Protocolo 33
- **Subtítulo principal:** A Desinstalação da Escassez
- **Formato:** 33 aulas gravadas
- **Preço:** R$ 333,00
- **Público principal:** mulheres espiritualmente conscientes, com repertório prévio em terapia, energia, consciência e processos internos, mas com repetição de padrões de escassez
- **Objetivo da página:** converter tráfego qualificado em compra direta
- **Canal de implementação:** Anti-Gravity
- **Fontes de verdade:**
  - Copy de vendas
  - Design system MASTER
  - Override específico da landing page
  - Mockup HTML da landing page

## Objetivos

- Traduzir a copy em uma landing page funcional, premium e clara.
- Implementar uma experiência visual coerente com o design system do Protocolo 33.
- Maximizar legibilidade, escaneabilidade e clareza de CTA.
- Sustentar alto valor percebido sem poluir a interface.
- Organizar a página para leitura progressiva: impacto, identificação, mecanismo, prova estrutural, oferta e fechamento.
- Permitir iteração futura no Anti-Gravity sem retrabalho estrutural.
- Preservar o tom feminino, sofisticado, denso e simbólico definido para a marca.

## Premissas Assumidas

Estas premissas foram adotadas para evitar bloqueio de execução:

1. A página será uma **landing page única**, longa, voltada para venda direta.
2. O escopo inclui **UI + conteúdo + estrutura de conversão**, não apenas visual.
3. A copy enviada será a principal fonte textual, com apenas microajustes de diagramação, hierarquia e quebras para web.
4. O design system previamente estruturado é a referência obrigatória para tokens, atmosfera, tipografia, imagem e componentes.
5. A implementação no Anti-Gravity deve priorizar blocos reutilizáveis e fácil manutenção.
6. Não estão incluídas automações de checkout, CRM, pixel, analytics avançado ou testes A/B nesta fase, exceto se a plataforma já oferecer isso como configuração nativa.

## Usuários-Alvo

### Perfil Primário
Mulher adulta, consciente, com repertório prévio em autoconhecimento, espiritualidade, terapia ou mentalidade, mas que segue repetindo tensão financeira, subprecificação, medo de expansão, culpa ao receber e lealdade à escassez familiar.

### Perfil Secundário
Mulher empreendedora digital ou profissional autônoma, já habituada a investir em conhecimento, que busca uma solução com linguagem mais sofisticada e menos genérica do que o mercado de prosperidade costuma oferecer.

## Problema que a Página Resolve

A usuária já viu conteúdos sobre abundância, dinheiro, consciência e merecimento, mas não reconhece nessas abordagens uma explicação suficientemente profunda para o padrão que continua repetindo. A landing page deve apresentar o mecanismo central da oferta de modo claro, distinto e desejável: **contratos de linhagem ligados à escassez**.

Ao mesmo tempo, a página precisa resolver outro problema: transformar uma tese densa e simbólica em uma experiência que ainda seja comercialmente eficiente.

## Proposta de Valor da Página

Apresentar o Protocolo 33 como uma oferta:

- diferente do mercado genérico de abundância
- ancorada em mecanismo próprio
- esteticamente premium
- emocionalmente precisa
- intelectualmente sofisticada
- simples de comprar

## Escopo

### Incluído
- Landing page completa
- Estruturação dos blocos principais
- Aplicação visual do design system
- Inserção da copy com hierarquia web
- CTAs primário e secundários
- Seções de mecanismo, conteúdo, objeções e oferta
- Tratamento visual de feminilidade, olho, campo, órbitas, matéria e dinheiro
- Responsividade para desktop, tablet e mobile
- Estados de hover, foco e acessibilidade básica
- Organização pronta para Anti-Gravity

### Não Incluído
- Checkout externo customizado
- Área de membros
- Sequências de email
- Upsell, downsell ou order bump
- Dashboard administrativo
- Lógica de CRM
- Instrumentação avançada de analytics
- Tradução para outros idiomas
- Produção real de fotografias ou vídeos
- Banco de imagens final licenciado
- Animações complexas em WebGL ou 3D customizado

## User Stories

### US-001: Estrutura base da landing page
**Description:** Como visitante, eu quero uma página organizada em blocos claros para que eu consiga entender a oferta sem me perder.

**Acceptance Criteria:**
- [ ] A página contém hero, mecanismo, diferenciação, blocos dos 33 contratos, funcionamento, para quem é, para quem não é, objeções, investimento e CTA final
- [ ] A ordem dos blocos respeita progressão lógica de conversão
- [ ] Cada bloco possui título, subtítulo e espaçamento consistente
- [ ] A página pode ser montada com seções independentes no Anti-Gravity
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-002: Hero premium com alto valor percebido
**Description:** Como visitante, eu quero sentir imediatamente que esta oferta tem profundidade, valor e identidade própria.

**Acceptance Criteria:**
- [ ] O hero apresenta “Protocolo 33” com destaque visual
- [ ] O subtítulo “A Desinstalação da Escassez” aparece em posição nobre
- [ ] Existe CTA principal acima da dobra
- [ ] O hero usa fundo escuro sofisticado com elementos orbitais, partículas ou halo
- [ ] Toda figura humana, se existir, é de mulher
- [ ] Elementos visuais evitam clichês de prosperidade genérica
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-003: Aplicação fiel da copy principal
**Description:** Como visitante, eu quero ler a mensagem da oferta com fluidez para entender rapidamente por que isso é diferente.

**Acceptance Criteria:**
- [ ] A headline principal da copy é preservada
- [ ] A sub-headline sobre 33 dias e contratos de linhagem é preservada
- [ ] O lead do aplicativo do banco aparece formatado para leitura web
- [ ] O texto do mecanismo é destacado com hierarquia superior ao texto corrido
- [ ] Não há blocos excessivamente longos sem quebra visual
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-004: Bloco visual do mecanismo
**Description:** Como visitante, eu quero identificar qual é o mecanismo único da oferta para justificar meu interesse e compra.

**Acceptance Criteria:**
- [ ] Existe uma seção dedicada ao mecanismo “revogar contratos de linhagem”
- [ ] O termo central do mecanismo aparece em destaque visual
- [ ] O bloco combina texto e linguagem visual coerente com o conceito de campo, código, percepção ou herança
- [ ] O layout do mecanismo não depende apenas de texto corrido
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-005: Seção dos 33 contratos com boa usabilidade
**Description:** Como visitante, eu quero entender os temas do protocolo sem enfrentar uma parede de texto cansativa.

**Acceptance Criteria:**
- [ ] Os 33 contratos são organizados por fases
- [ ] Cada fase possui título e agrupamento claro
- [ ] Cada item pode ser exibido em cards, acordeões ou blocos compactos
- [ ] A leitura em mobile continua viável
- [ ] O bloco transmite densidade sem parecer bagunçado
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-006: Seção “O que acontece dentro”
**Description:** Como visitante, eu quero saber como a experiência funciona na prática antes de comprar.

**Acceptance Criteria:**
- [ ] A seção apresenta a estrutura das aulas e a duração aproximada
- [ ] Os quatro momentos da aula são visualmente segmentados
- [ ] As ferramentas do protocolo aparecem em lista ou cards claros
- [ ] A seção ajuda a reduzir ambiguidade operacional
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-007: Segmentação “para quem é” e “para quem não é”
**Description:** Como visitante, eu quero entender rapidamente se esta oferta combina comigo.

**Acceptance Criteria:**
- [ ] Existe uma seção “Para quem é isso”
- [ ] Existe uma seção “Para quem não é”
- [ ] As duas seções têm contraste visual suficiente entre si
- [ ] O conteúdo é escaneável
- [ ] A leitura reforça qualificação do público
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-008: Bloco de investimento e CTA final
**Description:** Como visitante, eu quero enxergar com clareza o preço, o valor e o próximo passo.

**Acceptance Criteria:**
- [ ] O preço R$ 333,00 aparece com destaque visual
- [ ] O racional de preço por dia é legível
- [ ] O CTA principal é visualmente dominante
- [ ] O CTA final aparece após fechamento argumentativo
- [ ] O botão leva para a ação de compra definida no Anti-Gravity
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-009: Microinterações elegantes
**Description:** Como visitante, eu quero sentir refinamento na interface sem perder desempenho.

**Acceptance Criteria:**
- [ ] Botões possuem hover suave
- [ ] Links possuem estado de foco visível
- [ ] Cards ou blocos interativos possuem transição moderada
- [ ] Não há movimento excessivo que prejudique a leitura
- [ ] `prefers-reduced-motion` é respeitado
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-010: Responsividade premium
**Description:** Como visitante em qualquer dispositivo, eu quero consumir a página com conforto visual e clareza.

**Acceptance Criteria:**
- [ ] Layout validado em 375px, 768px, 1024px e 1440px
- [ ] Hero não quebra em mobile
- [ ] Os cards dos contratos reorganizam corretamente
- [ ] Botões mantêm tamanho clicável adequado
- [ ] Textos mantêm contraste e legibilidade
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-011: Consistência com design system
**Description:** Como marca, eu quero que a landing page respeite os padrões definidos para manter coerência estética.

**Acceptance Criteria:**
- [ ] A implementação usa os tokens visuais definidos no MASTER do design system
- [ ] O override da landing page prevalece quando houver conflito com o MASTER
- [ ] Paleta, tipografia, botões e fundos seguem o sistema
- [ ] Não são introduzidos estilos arbitrários fora do sistema sem justificativa
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

### US-012: Acessibilidade mínima obrigatória
**Description:** Como visitante, eu quero navegar e ler a página com conforto, inclusive com teclado e leitores de tela básicos.

**Acceptance Criteria:**
- [ ] Hierarquia semântica de headings é correta
- [ ] Contraste mínimo adequado para texto principal
- [ ] Botões e links têm rótulo claro
- [ ] Imagens decorativas usam tratamento adequado
- [ ] Foco visível em elementos interativos
- [ ] Typecheck/lint passes
- [ ] Verify in browser using dev-browser skill

## Requisitos Funcionais

- FR-1: O sistema deve implementar uma landing page única para o produto Protocolo 33.
- FR-2: A página deve usar como base textual a copy existente do arquivo `pagina-de-vendas-protocolo33(1).md`.
- FR-3: A página deve usar como referência visual obrigatória o design system previamente gerado para o projeto.
- FR-4: A página deve possuir hero com nome do produto, subtítulo e CTA acima da dobra.
- FR-5: A página deve conter um bloco que explique o mecanismo central da oferta.
- FR-6: A página deve apresentar os 33 contratos organizados por fases.
- FR-7: A página deve apresentar o conteúdo interno do produto e as ferramentas utilizadas.
- FR-8: A página deve conter seções “Para quem é” e “Para quem não é”.
- FR-9: A página deve apresentar o valor de R$ 333,00 com destaque e CTA de compra.
- FR-10: A página deve incluir bloco de objeções.
- FR-11: A página deve incluir CTA principal e CTA final.
- FR-12: Toda imagem com pessoa deve representar mulher.
- FR-13: O sistema visual deve priorizar fundo escuro, contraste alto, brilho controlado e atmosfera premium.
- FR-14: O sistema deve permitir a presença de símbolos como olho, campo, órbita, partículas, halo e referências sutis a dinheiro.
- FR-15: O sistema não deve usar estética masculina como centro visual.
- FR-16: O sistema deve evitar visual de abundância genérica, excesso de dourado chamativo e clichês místicos previsíveis.
- FR-17: Os componentes devem ser responsivos para desktop, tablet e mobile.
- FR-18: Os elementos interativos devem possuir hover, foco e comportamento consistente.
- FR-19: A implementação deve respeitar `prefers-reduced-motion`.
- FR-20: A hierarquia tipográfica deve separar com clareza headline, subtítulo, texto corrido, legenda e CTA.
- FR-21: O Anti-Gravity deve receber a página organizada em blocos/seções fáceis de editar.
- FR-22: O projeto deve considerar o override específico da landing page como prioridade sobre o MASTER do design system quando houver divergência.
- FR-23: O texto da página pode ser reformatado para web, mas sem descaracterizar o tom e a tese principal da copy.
- FR-24: O CTA deve apontar para a ação de compra ou checkout configurado no ambiente final.
- FR-25: A página deve manter performance aceitável mesmo com texturas, halos, gradientes e microinterações.

## Requisitos Não Funcionais

- NFR-1: A página deve carregar de forma eficiente, evitando recursos visuais pesados sem necessidade.
- NFR-2: O texto principal deve manter contraste adequado em telas comuns e brilho reduzido.
- NFR-3: O layout deve ser semanticamente organizado para SEO básico on-page.
- NFR-4: O design deve transmitir sofisticação e feminilidade sem recorrer a clichês visuais infantis.
- NFR-5: O sistema deve ser fácil de atualizar por outra pessoa no Anti-Gravity.
- NFR-6: O projeto deve manter coerência visual mesmo em futuras expansões da página.

## Não Objetivos

- Não criar nova oferta.
- Não reescrever toda a copy do zero.
- Não transformar a landing page em site institucional completo.
- Não incluir área de login, cadastro ou comunidade.
- Não criar quiz, simulador ou experiência gamificada.
- Não implementar fluxo multietapas de checkout dentro da landing page.
- Não desenvolver CMS próprio.
- Não construir versão multilíngue.
- Não adicionar elementos visuais masculinos.
- Não transformar o visual em “luxo genérico” ou “espiritualidade genérica”.

## Considerações de Design

### Direção Visual
A landing page deve seguir a linha de **tecnologia ritualística feminina**:
- fundo preto profundo ou quase preto
- brilho localizado, nunca estourado
- partículas, órbitas, halos e sensação de campo
- simbologia de percepção, valor e herança
- feminilidade densa, madura e elegante
- composição premium, não caricata

### Elementos Visuais Permitidos
- olho feminino em close ou abstraído
- íris com textura que remeta a dinheiro, código, nota, mapa ou campo
- linhas orbitais e atômicas
- matéria luminosa e partículas
- recortes circulares e radiais
- flor abstrata com leitura tecnológica, se mantiver sofisticação
- retratos de mulher com atmosfera editorial

### Elementos Visuais Proibidos
- homem em qualquer imagem com pessoa
- ícones emoji
- excesso de dourado brilhante
- mandalas genéricas
- cristais, asas, borboletas ou símbolos esotéricos óbvios
- visual de coaching barato
- mockups com aparência de template comum

### Paleta
A implementação deve respeitar os tokens do design system, com base em:
- preto profundo / grafite escuro
- off-white quente
- dourado envelhecido / champagne
- cobre suave
- cinza mineral
- possível ameixa profundo como apoio, sem dominar

### Tipografia
- Heading com serif elegante ou pairing premium definido no design system
- Body com sans legível e limpa
- Hierarquia nítida entre título, subtítulo, seção, body e CTA
- Espaçamento generoso
- Evitar cara de editorial ilegível

### Componentes Visuais Esperados
- botão primário com contraste forte e sofisticação
- cards escuros com borda sutil ou glow discreto
- separadores com linhas suaves
- painéis translúcidos apenas se não prejudicarem legibilidade
- listas e bullets com tratamento refinado

## Considerações Técnicas

- A lógica do design system já existente segue um padrão MASTER + page overrides. A implementação deve respeitar essa arquitetura.
- Deve existir uma versão de referência da landing page em HTML para orientar composição visual.
- A estrutura final no Anti-Gravity deve permitir edição por seção.
- O uso de imagens deve prever substituição futura por assets finais.
- Efeitos devem ser preferencialmente CSS nativo ou recursos leves.
- Evitar dependência de bibliotecas pesadas apenas para ornamentação.
- Caso o Anti-Gravity imponha restrições, preservar primeiro:
  1. hierarquia
  2. clareza do CTA
  3. contraste
  4. atmosfera visual
  5. ornamentação

## Dependências

- Copy final base
- Design system MASTER
- Override da landing page
- Mockup HTML de referência
- Ambiente Anti-Gravity
- Link de checkout ou ação final de CTA
- Assets visuais finais ou prompts aprovados para geração

## Estrutura Recomendada da Página

1. Hero
2. Lead de identificação
3. Revelação do mecanismo
4. O que diferencia isso do que ela já viu
5. Bloco dos 33 contratos por fases
6. O que acontece dentro
7. Ferramentas do protocolo
8. Para quem é
9. Para quem não é
10. Investimento
11. Objeções
12. Visão de futuro
13. CTA final
14. P.S., P.P.S. e P.P.P.S.

## Métricas de Sucesso

- A página é publicada no Anti-Gravity com fidelidade estrutural ao PRD.
- O hero comunica produto, tese e CTA em menos de 5 segundos.
- O visitante consegue entender o mecanismo sem depender de leitura integral.
- O bloco de preço é encontrado sem esforço.
- A experiência mobile permanece clara e desejável.
- O time consegue iterar títulos, imagens e seções sem quebrar a estrutura.
- O design mantém percepção premium mesmo com copy longa.
- Taxa de clique nos CTAs pode ser acompanhada como principal indicador de interesse.
- Taxa de conversão final pode ser usada como indicador de efetividade comercial após publicação.

## Critérios de Pronto

O projeto será considerado pronto quando:

- a landing page estiver implementada no Anti-Gravity
- a estrutura seguir este PRD
- a copy principal estiver aplicada com hierarquia correta
- o design system estiver respeitado
- os CTAs estiverem configurados
- a página estiver responsiva
- os critérios mínimos de contraste e foco forem atendidos
- a revisão visual em navegador for concluída

## Riscos

- Excesso de conceito visual pode prejudicar conversão.
- Excesso de texto sem respiro pode cansar a leitura.
- Uso literal demais de símbolos espirituais pode empobrecer a percepção premium.
- Imagens femininas mal dirigidas podem parecer banco de imagem comum.
- Glow e efeitos em excesso podem deixar a página amadora.
- Adaptação literal da copy para web sem edição de ritmo pode reduzir retenção.

## Mitigações

- Priorizar hierarquia e escaneabilidade.
- Tratar blocos densos com cards, respiros e alternância visual.
- Usar símbolos como apoio, não como ruído.
- Validar hero, mecanismo e bloco de oferta antes do refinamento ornamental.
- Testar desktop e mobile cedo.
- Preservar a copy, mas adaptar sua cadência para leitura web.

## Questões em Aberto

- Qual será o link final de checkout do CTA?
- Haverá provas sociais reais a serem inseridas depois?
- Haverá vídeo/VSL acima da dobra ou nesta fase a página será apenas estática?
- Os 33 contratos serão exibidos todos abertos, em acordeão, tabs ou cards expansíveis?
- Haverá cronômetro, bônus ou elementos de urgência em uma fase futura?
- A marca final usará exatamente “A Desinstalação da Escassez” como subtítulo definitivo ou isso ainda pode mudar?

## Referências Obrigatórias para a Implementação

### Copy
- `pagina-de-vendas-protocolo33(1).md`

### Design System
- `design-system/protocolo-33/MASTER.md`
- `design-system/protocolo-33/pages/landing-page.md`

### Referência Visual / Estrutural
- `protocolo33_landing_mockup.html`

### Arquivos de Lógica / Base
- `design_system(1).py`
- `core(2).py`
- `search(1).py`

## Instrução Final para Anti-Gravity

Gerar uma landing page de alta conversão para o **Protocolo 33** com base obrigatória na copy existente e no design system do projeto. A implementação deve respeitar a atmosfera premium escura, a feminilidade sofisticada, a linguagem visual de percepção/campo/dinheiro e a estrutura comercial detalhada neste PRD. O resultado final deve parecer uma página autoral, densa e refinada, não um template genérico de infoproduto.
