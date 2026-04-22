import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Divider } from '../components/Divider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  /* ======================================================
     MECHANISM SECTION
  ====================================================== */

  /* ---- Galaxy background for the Revelation block ---- */

  /*
   * The Section wrapper (.section-wrapper.s-dark) has position: relative.
   * We use a custom class on the outer wrapper to inject the galaxy
   * as a CSS ::before layer behind all content.
   * mix-blend-mode: screen makes the galaxy's dark areas transparent —
   * only the gold/blue luminous swirls show through.
   */

  .mech-section-inner {
    position: relative;
    overflow: hidden;
  }

  /* Galaxy atmospheric layer */
  .mech-galaxy {
    position: absolute;
    top: -10%;
    left: -5%;
    width: 110%;
    height: 110%;
    background-image: url('/images/contracts_galaxy_1775945231845.png');
    background-size: cover;
    background-position: center 30%;
    mix-blend-mode: screen;
    opacity: 0.13;
    pointer-events: none;
    z-index: 0;
  }

  /* Gradient veil: ensures the galaxy fades into the bg at top/bottom
     so it doesn't clash with adjacent sections */
  .mech-galaxy-veil {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg,
        var(--bg-soft)    0%,
        transparent      15%,
        transparent      75%,
        var(--bg-soft)  100%
      ),
      linear-gradient(90deg,
        transparent      40%,
        rgba(10,12,18, 0.6) 100%
      );
    pointer-events: none;
    z-index: 1;
  }

  /* Content sits above both galaxy layers */
  .mech-content-layer {
    position: relative;
    z-index: 2;
  }

  /* ---- Layout ---- */

  .mech-narrow {
    max-width: 100%;
    margin: 0 auto;
  }

  .mech-block h2 {
    margin-bottom: 2.5rem;
  }

  .mech-body p {
    line-height: 1.84;
  }

  /* Gold blockquote */
  .mech-quote {
    font-family: var(--font-serif);
    font-size: 1.0625rem;
    color: var(--text-main);
    font-style: italic;
    border-left: 1px solid var(--line-gold);
    padding: 0.5rem 0 0.5rem 2rem;
    margin: 2.75rem 0;
    line-height: 1.6;
  }

  .mech-contract-card {
    margin-top: 3rem;
    text-align: center;
  }

  .mech-contract-card h3 {
    color: var(--gold-soft);
    margin-bottom: 1.25rem;
  }

  .mech-contract-card .emphasis {
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-soft);
    margin-top: 1.25rem;
  }

  /* ======================================================
     A DIFERENÇA — editorial two-column with eye image
  ====================================================== */

  .mech-diff-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 4rem;
    align-items: start;
    /* Break out wider than mech-narrow */
    max-width: 100%;
    margin: 0 auto;
  }

  /* Left: text + comparison */
  .mech-diff-text {
    min-width: 0;
  }

  .mech-diff-text h2 {
    margin-bottom: 2.5rem;
  }

  /* Before/After comparison */
  .mech-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .mech-col {
    line-height: 1.8;
  }

  .mech-col-dark {
    background: rgba(0, 0, 0, 0.28);
    padding: 2rem;
    border-radius: 3px;
    border-left: 1px solid rgba(196, 114, 114, 0.35);
  }

  .mech-col-dark .mech-verdict {
    color: var(--gold-soft);
    font-weight: 500;
    margin-top: 0.5rem;
  }

  /* Right: editorial eye panel */
  .mech-eye-panel {
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    /* Sticky so it stays alongside the text as you read */
    position: sticky;
    top: 120px;
  }

  .mech-eye-panel img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center 18%;
    mix-blend-mode: luminosity;
    opacity: 0.72;
    filter: contrast(1.08) brightness(0.95);
    transition: opacity 0.6s ease, filter 0.6s ease;
  }

  .mech-eye-panel:hover img {
    opacity: 0.88;
    filter: contrast(1.12) brightness(1.0);
  }

  /* Top gradient — fades into section bg */
  .mech-eye-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg,
        rgba(10, 12, 18, 0.55)  0%,
        transparent              30%,
        transparent              70%,
        rgba(10, 12, 18, 0.65)  100%
      );
    z-index: 1;
    pointer-events: none;
  }

  /* Gold border frame */
  .mech-eye-panel::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(214, 186, 122, 0.2);
    border-radius: 3px;
    z-index: 2;
    pointer-events: none;
  }

  /* Scanning line overlay — subtle editorial tech feel */
  .mech-eye-scanline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.06) 2px,
      rgba(0, 0, 0, 0.06) 4px
    );
    pointer-events: none;
    z-index: 3;
  }

  /* Caption label on the eye */
  .mech-eye-label {
    position: absolute;
    bottom: 18px;
    left: 18px;
    right: 18px;
    font-family: var(--font-sans);
    font-size: 0.5625rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(214, 186, 122, 0.55);
    z-index: 4;
  }

  /* ---- Responsive ---- */

  @media (max-width: 900px) {
    .mech-diff-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .mech-eye-panel {
      position: relative;
      top: auto;
      max-width: 380px;
      margin: 0 auto;
    }

    .mech-eye-panel img {
      aspect-ratio: 16 / 9;
      object-position: center 12%;
    }
  }

  @media (max-width: 600px) {
    .mech-compare { grid-template-columns: 1fr; }
    .mech-col-dark { padding: 1.5rem; }
    .mech-eye-panel { display: none; }
  }
`;

export const Mechanism = () => {
  const ref = useScrollReveal();

  return (
    <Section id="mechanism" dark>
      <style>{STYLES}</style>

      <div className="mech-section-inner" ref={ref}>


        <div className="mech-content-layer">

          {/* ——— Block 1: A Revelação ——— */}
          <div className="mech-narrow">
            <div className="mech-block reveal">
              <span className="eyebrow">A Revelação</span>
              <h2>O buraco é mais embaixo.</h2>

              <div className="mech-body">
                <p>
                  Olha, tem um nível desse problema que a maioria dos cursos 
                  não alcançam. E eu sei que você já desconfia disso.
                </p>
                <p>Deixa eu te contar o que está acontecendo de verdade.</p>

                <blockquote className="mech-quote">
                  Antes de você nascer, a sua linhagem já tinha decidido algumas
                  coisas sobre dinheiro.
                </blockquote>

                <p>
                  A sua avó sobreviveu sendo "pobre mas honesta" e em algum momento
                  isso virou uma virtude de família. A sua mãe repetiu que "dinheiro
                  não cresce em árvore" com a mesma frequência com que dizia bom dia.
                  Alguém próximo de você perdeu tudo uma vez, ou quase perdeu, e
                  nunca mais tentou com a mesma força.
                </p>
                <p>
                  Você aprendeu, sem que ninguém te ensinasse com palavras, que
                  crescer demais financeiramente era uma forma de deixar de pertencer.
                </p>

                <Card highlight className="mech-contract-card">
                  <h3>Isso virou um contrato.</h3>
                  <p>
                    Não uma crença. Um contrato. Com termos e condições. Assinado
                    antes de você saber escrever.
                  </p>
                  <p className="emphasis">
                    E o ponto que nenhum curso de mindset te conta é que contrato
                    não se dissolve com afirmação positiva. Nem com mudança de
                    hábito e nem apenas economizando mais.
                  </p>
                  <p className="emphasis" style={{ marginTop: '1rem', color: 'var(--gold-soft)' }}>
                    <strong>Contrato se elimina com Alta Permissão.</strong>
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <Divider type="orbital" />

          {/* ——— Block 2: A Diferença — editorial 2-col ——— */}
          <div className="mech-diff-grid reveal reveal-delay-1">

            {/* Left column: text */}
            <div className="mech-diff-text">
              <span className="eyebrow">A Diferença</span>
              <h2>O que diferencia isso de tudo que você já fez</h2>

              <div className="mech-compare">
                <div className="mech-col">
                  <p>
                    Você já ouviu sobre mudar a relação com o dinheiro. Já ouviu
                    sobre abundância, sobre frequência, sobre vibrações financeiras.
                  </p>
                  <p>
                    Sabe o que esses conteúdos têm em comum?{' '}
                    <strong>Eles trabalham na superfície.</strong>
                  </p>
                  <p>
                    Eles te ensinam a pensar diferente sobre dinheiro. A visualizar
                    mais. A afirmar mais. A "ter mais fé".
                  </p>
                </div>

                <div className="mech-col mech-col-dark">
                  <p>
                    O Protocolo 33 vai para um lugar diferente. Ele vai para onde
                    os contratos estão guardados. Nos significados. Nos padrões de escolha.
                  </p>
                  <p>
                    Sabe quando você tem uma semana boa financeiramente e aí você
                    gasta tudo num fim de semana sem entender por quê? Sabe quando
                    o dinheiro chega e você fica ansiosa em vez de aliviada?
                  </p>
                  <p className="mech-verdict">
                    Isso não é mindset. É o contrato operando.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: editorial eye panel */}
            <div className="mech-eye-panel">
              <img
                src="/images/mechanism_eye_1775945248546.png"
                alt="Visão além da superfície"
                loading="lazy"
              />
              <div className="mech-eye-scanline" aria-hidden="true" />
              <span className="mech-eye-label">
                Visão além da superfície
              </span>
            </div>

          </div>

        </div>
      </div>
    </Section>
  );
};
