import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  /* ============================================================
     CONTRACTS SECTION — money-bg.webp background treatment
  ============================================================ */

  /*
   * The .contracts-section class sits on the <section> element
   * which already has position: relative (from section-wrapper CSS).
   * We use ::before for the money-bg and ::after for the luminosity
   * overlay. .section-container is lifted to z-index 2.
   */

  .contracts-section {
    overflow: hidden;
  }

  /* Layer 1 — banknote texture */
  .contracts-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/money-bg.webp');
    background-size: cover;
    background-position: center center;
    mix-blend-mode: luminosity;
    opacity: 0.065;
    pointer-events: none;
    z-index: 0;
    /* Increase microdetail contrast so the engraving reads through */
    filter: contrast(1.3) brightness(0.75) saturate(0);
  }

  /* Layer 2 — warm illumination + edge fade
     The radial centered on the bill's eye creates a symbolic halo:
     the engraving "lights up" from within.
     Top/bottom linear fades blend into adjacent sections. */
  .contracts-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 65% 52% at 50% 48%,
        rgba(214, 186, 122, 0.07)  0%,
        rgba(214, 186, 122, 0.02) 50%,
        transparent               72%
      ),
      linear-gradient(
        180deg,
        var(--bg-main)  0%,
        transparent    14%,
        transparent    86%,
        var(--bg-main) 100%
      ),
      /* Subtle left/right edge vignette */
      linear-gradient(
        90deg,
        var(--bg-main)  0%,
        transparent    10%,
        transparent    90%,
        var(--bg-main) 100%
      );
    pointer-events: none;
    z-index: 1;
  }

  /* Content floats above both bg layers */
  .contracts-section .section-container {
    position: relative;
    z-index: 2;
  }

  /* ---- Layout ---- */

  .contracts-hd {
    max-width: 100%;
    margin: 0 auto 4.5rem;
    text-align: center;
  }

  .contracts-hd .eyebrow {
    justify-content: center;
  }

  .contracts-hd p {
    color: var(--text-soft);
    line-height: 1.8;
    margin-top: 1rem;
  }

  .contracts-body {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Phase Cards */
  .contracts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1.25fr;
    gap: 1.5rem;
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 900px) {
    .contracts-grid {
      grid-template-columns: 1fr 1fr;
    }
    .col-3 {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    .contracts-grid {
      grid-template-columns: 1fr;
    }
  }

  .col-1, .col-2 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .col-3 {
    display: flex;
  }

  .phase-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(214, 186, 122, 0.15);
    border-radius: 4px;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    transition: transform 0.3s ease, border-color 0.3s ease;
    flex: 1;
  }

  .phase-card:hover {
    transform: translateY(-2px);
    border-color: rgba(214, 186, 122, 0.35);
  }

  .phase-card.highlight {
    background: linear-gradient(160deg, rgba(214, 186, 122, 0.08), rgba(10, 12, 18, 0.6));
    border-color: rgba(214, 186, 122, 0.4);
    box-shadow: 0 10px 40px rgba(214, 186, 122, 0.05);
  }

  .phase-eyebrow {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold-soft);
    margin-bottom: 1.25rem;
    opacity: 0.8;
  }

  .phase-title {
    font-family: var(--font-serif);
    color: var(--text-main);
    line-height: 1.25;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  .phase-card.highlight .phase-title {
    color: var(--gold-soft);
  }

  .phase-card.highlight .phase-eyebrow {
    opacity: 1;
    font-size: 0.75rem;
  }

  .phase-days {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
    border-top: 1px solid rgba(255,255,255,0.05);
    padding-top: 1.25rem;
    margin-top: auto;
    width: 60%;
  }
`;

const fases = [
  { number: 'FASE 01', title: 'A Lealdade à Pobreza', days: 'Dias 1 a 7' },
  { number: 'FASE 02', title: 'O Contrato com a Escassez Alheia', days: 'Dias 8 a 14' },
  { number: 'FASE 03', title: 'Significados, Permissão e o Receber', days: 'Dias 15 a 21' },
  { number: 'FASE 04', title: 'Reconstruindo o "Como" e o "Porquê"', days: 'Dias 22 a 28' },
  { number: 'FASE 05', title: 'A Maestria Financeira', days: 'Dias 29 a 33' },
];

const PhaseCard = ({ data, highlight }) => (
  <div className={`phase-card ${highlight ? 'highlight' : ''}`}>
    <span className="phase-eyebrow">{data.number}</span>
    <h3 className="phase-title">{data.title}</h3>
    <div className="phase-days">{data.days}</div>
  </div>
);

export const Contracts = () => {
  const ref = useScrollReveal();

  return (
    <Section id="contracts" className="contracts-section">
      <style>{STYLES}</style>

      <div ref={ref}>
        <div className="contracts-hd reveal">
          <span className="eyebrow">A Anatomia da Escassez</span>
          <h2>Os 33 Contratos</h2>
          <p>
            Estes são os contratos que vamos eliminar. Cada um deles existe no seu
            sistema como um significado congelado que decide, sem te pedir licença,
            quanto de dinheiro é permitido para alguém como você.
          </p>
        </div>

        <div className="contracts-body reveal reveal-delay-1">
          <div className="contracts-grid">
            <div className="col-1">
              <PhaseCard data={fases[0]} />
              <PhaseCard data={fases[1]} />
            </div>
            <div className="col-2">
              <PhaseCard data={fases[2]} />
              <PhaseCard data={fases[3]} />
            </div>
            <div className="col-3">
              <PhaseCard data={fases[4]} highlight />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
