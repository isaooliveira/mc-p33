import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .audience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 100%;
    margin: 0 auto;
    align-items: start;
  }

  .audience-card h3 {
    font-size: clamp(1.5rem, 2.8vw, 2rem);
    color: var(--text-main);
    margin-bottom: 2rem;
  }

  .audience-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .audience-list li {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    color: var(--text-soft);
    line-height: 1.6;
  }

  .audience-list li strong {
    color: var(--gold-soft);
  }

  /* Yes icon */
  .aud-icon-yes {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--gold-soft);
  }

  /* No icon */
  .aud-icon-no {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--danger-soft);
    opacity: 0.8;
  }

  /* "No" card override */
  .audience-no-card {
    border-color: rgba(196, 114, 114, 0.22) !important;
    background: linear-gradient(140deg, rgba(26, 15, 15, 0.5) 0%, rgba(255,255,255,0.02) 100%) !important;
  }

  .no-summary {
    margin-top: 2.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid var(--line);
    color: var(--gold-soft);
    font-style: italic;
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 3vw, 1.75rem); /* approx 28px */
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 768px) {
    .audience-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const CheckIcon = () => (
  <svg className="aud-icon-yes" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 9.5L7 13.5L15 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg className="aud-icon-no" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const yesItems = [
  'Para quem já fez mil cursos e nada mudou.',
  'Para quem sente um véu, um peso, um teto entre ela e a riqueza que sente que é dela.',
  'Para quem entende de energia, de terapia, de processos, mas não consegue romper o teto financeiro.',
  'Para quem tem pavor de ser e parecer "grandiosa" e ser chamada de metida, de gananciosa.',
  'Para quem sabe, lá no fundo, que o problema está muito além do que qualquer estratégia financeira alcançou.',
  'Para quem decidiu que pode fazer muito mais dinheiro do que já faz hoje.',
  'Para quem já fez terapia, mentoria, curso de mindset, processo de cura, e quer agora algo que expanda capacidade, não apenas revise feridas.',
];

const noItems = [
  'Se você quer que alguém passe a mão na sua cabeça e diga que o mundo é injusto com você.',
  'Se você veio buscar validação para a sua luta e seu sacrifício.',
  'Se você não está disposta a questionar tudo que acredita sobre dinheiro, merecimento e quem você decidiu ser.',
  'Se você quer receitas prontas sem a disposição de eliminar o que não funciona.',
];

export const TargetAudience = () => {
  const ref = useScrollReveal();

  return (
    <Section id="audience">
      <style>{STYLES}</style>

      <div className="audience-grid" ref={ref}>

        <div className="reveal">
          <Card>
            <h3 className="audience-card">Para quem é isso</h3>
            <ul className="audience-list">
              {yesItems.map((item, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
              <li>
                <CheckIcon />
                <span>
                  <strong>
                    Para quem está disposta a operar 33 dias dentro de uma
                    prática estruturada, sem pular etapa.
                  </strong>
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="reveal reveal-delay-1">
          <Card className="audience-no-card">
            <h3 className="audience-card">Para quem não é</h3>
            <ul className="audience-list">
              {noItems.map((item, i) => (
                <li key={i}>
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="no-summary">
              Esse protocolo é para quem está disposta a ser a ovelha colorida rica
              da família. Mesmo que todo mundo chame isso de loucura.
            </p>
          </Card>
        </div>

      </div>
    </Section>
  );
};
