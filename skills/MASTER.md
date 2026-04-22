# Protocolo 33 — MASTER Design System

## Brand Core
Protocolo 33 deve parecer um ritual premium de ruptura financeira para mulheres.
A direção visual combina tecnologia ritualística, feminilidade densa e conversão clara.
A página não deve soar “mística genérica”, nem “luxo frio corporativo”.

## Visual Thesis
- Escuro sofisticado com brilho controlado
- Sensação de campo, órbita, mapa, leitura, código, herança, revogação
- Mulher como centro de inteligência e percepção, nunca como ornamento
- Símbolos recorrentes: olho, órbita, linhas radiais, partículas, haloes, nota/dinheiro, campo energético

## Color Tokens
- `--bg-main: #06070A`
- `--bg-soft: #0D1016`
- `--surface: rgba(255,255,255,0.045)`
- `--surface-strong: rgba(255,255,255,0.075)`
- `--line: rgba(255,255,255,0.12)`
- `--text-main: #F5F0E8`
- `--text-soft: #CBBFAF`
- `--text-muted: #9C9286`
- `--gold-soft: #D6BA7A`
- `--gold-deep: #A78646`
- `--rose-smoke: #7F6371`
- `--plum-deep: #2A1623`
- `--glow: rgba(214,186,122,0.28)`
- `--danger-soft: #B96A6A`

## Typography
- Headline serif: `Cormorant Garamond`, fallback Georgia, serif
- Body/UI sans: `Inter`, fallback system-ui, sans-serif
- Headlines com contraste, tracking levemente fechado, peso visual alto
- Corpo com leitura limpa e firme
- Nunca usar fontes excessivamente ornamentadas

## Layout Rules
- Largura máxima de conteúdo: 1200px
- Hero com densidade visual alta, mas CTA acima da dobra
- Alternância entre blocos escuros fechados e áreas com respiro
- Grid base: 12 col desktop, 1 col mobile, 24px gutter
- Padding seções desktop: 96–128px; mobile: 64–80px

## Component Rules
### Buttons
- Fundo dourado suave com texto escuro para CTA primário
- CTA secundário ghost com borda clara translúcida
- Radius 999px
- Hover com leve elevação e brilho externo, sem exagero

### Cards
- Fundo translúcido escuro
- Borda clara fina
- Blur discreto
- Sombra muito suave
- Radius 24px

### Eyebrow / Labels
- Caixa alta
- Letter-spacing alto
- Cor dourado suave ou off-white
- Usar pouco

### Dividers / Motifs
- Linhas orbitais, grades radiais, círculos incompletos, grids finos
- Evitar ornamento sem função

## Imagery Direction
- Sempre mulheres quando houver pessoa
- Close de olho feminino, íris, olhar frontal ou 3/4
- Texturas de partículas, dinheiro, mapa, constelação, linha, scanner, halo
- Pode usar abstrações femininas sem rosto completo
- Nunca usar homem, casal hetero, banco de imagem sorridente, poses corporativas

## Motion
- Entrada por fade + rise curta
- Microparallax sutil em partículas e haloes
- Hover entre 180ms e 260ms
- Respeitar `prefers-reduced-motion`

## Conversion Rules
- CTA primário visível no hero, no mecanismo, no bloco de oferta e no fechamento
- Design deve sustentar leitura da copy longa sem fadiga
- A cada bloco denso, inserir uma quebra visual ou card-respiro
- A estética deve aumentar valor percebido, não dificultar entendimento

## Avoid
- Roxo neon saturado
- Rosé “delicado” demais
- Espiritualidade genérica com mandala óbvia
- Estética coach clean demais
- Excesso de vidro, blur ou efeitos de luxo artificial
- Hero confuso sem proposta clara
