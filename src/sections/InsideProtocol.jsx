import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .inside-hd {
    text-align: center;
    margin-bottom: 5rem;
  }

  .inside-hd .eyebrow {
    justify-content: center;
  }

  .inside-hd .tagline {
    font-family: var(--font-serif);
    font-size: clamp(1.125rem, 2.2vw, 1.4rem);
    color: var(--gold-soft);
    font-style: italic;
    margin-top: 0.5rem;
  }

  .inside-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 100%;
    margin: 0 auto;
    align-items: stretch;
  }

  .schedule-card {
    text-align: center;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .schedule-card h3 {
    color: var(--gold-soft);
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    margin-bottom: 0.75rem;
    font-family: var(--font-serif);
    font-weight: 400;
  }

  .schedule-card p {
    color: var(--text-soft);
    font-size: 1.125rem;
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .inside-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

export const InsideProtocol = () => {
  const ref = useScrollReveal();

  return (
    <Section id="inside" dark>
      <style>{STYLES}</style>

      <div ref={ref}>
        <div className="inside-hd reveal">
          <span className="eyebrow">A Metodologia</span>
          <h2>O que acontece por dentro</h2>
          <p className="tagline">33 protocolos. Diretas. Sem rodeio.</p>
        </div>

        <div className="inside-grid">
          <div className="reveal reveal-delay-1">
            <Card className="schedule-card">
              <h3>Aulas nas Terças</h3>
              <p>às 19:00 pelo Zoom</p>
            </Card>
          </div>
          
          <div className="reveal reveal-delay-2">
            <Card className="schedule-card" highlight>
              <h3>Aulas nas Quartas</h3>
              <p>às 19:00 pelo Zoom</p>
            </Card>
          </div>
          
          <div className="reveal reveal-delay-3">
            <Card className="schedule-card">
              <h3>Aulas nas Quintas</h3>
              <p>às 19:00 pelo Zoom</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
