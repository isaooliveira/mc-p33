import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .lead-content {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Chapter marker */
  .lead-chapter {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 3.5rem;
  }

  .lead-chapter-num {
    font-family: var(--font-display);
    font-size: 5.5rem;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(214, 186, 122, 0.28);
    font-weight: 400;
    flex-shrink: 0;
  }

  .lead-chapter-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(214,186,122,0.25), transparent);
  }

  /* Drop-cap on first paragraph */
  .lead-dropcap p:first-of-type::first-letter {
    font-family: var(--font-display);
    font-size: 4.25rem;
    line-height: 0.82;
    float: left;
    margin: 0.06em 0.12em 0 0;
    color: var(--gold-soft);
  }

  .lead-content p {
    color: var(--text-soft);
    line-height: 1.86;
    margin-bottom: 2rem;
  }

  /* Separator */
  .lead-sep {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 3rem 0;
  }

  .lead-sep-line {
    height: 1px;
    width: 28px;
    background: var(--line-gold);
    opacity: 0.45;
  }

  .lead-sep-diamond {
    width: 5px;
    height: 5px;
    background: var(--gold-deep);
    transform: rotate(45deg);
    opacity: 0.6;
  }

  /* Pull quote */
  .lead-pullquote {
    padding: 0 0 0 2rem;
    border-left: 1px solid var(--line-gold);
    margin: 3rem 0 2.5rem;
  }

  .lead-pullquote p {
    font-family: var(--font-serif);
    font-size: clamp(1.375rem, 2.8vw, 1.75rem);
    color: var(--text-main);
    line-height: 1.42;
    font-style: italic;
    margin: 0;
  }

  .lead-revelation {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--gold-soft);
    font-style: italic;
    line-height: 1.35;
    margin-top: 0.75rem;
  }
`;

export const LeadIdentification = () => {
  const ref = useScrollReveal();

  return (
    <Section id="lead">
      <style>{STYLES}</style>

      <div className="lead-content" ref={ref}>

        <div className="lead-chapter reveal">
          <span className="lead-chapter-num">I</span>
          <div className="lead-chapter-line" />
        </div>

        <div className="lead-dropcap reveal">
          <p>Deixa eu te perguntar uma coisa.</p>
          <p>
            Cai o seu pagamento no aplicativo do banco e você começa a distribuir e o 
            trabalho de todo o mês foi embora em 10 minutos.
          </p>
          <p>
            Você sabe que poderia fazer muito mais com o que ganha, ou fazer algo além 
            para expandir o que ganha.
          </p>
          <p>
            E aí você fecha o aplicativo rápido. Ou você rola devagar para baixo
            e confirma o que você já sabia. E suspira daquele jeito.
          </p>
          <p>Aquele jeito você conhece.</p>
        </div>

        <div className="lead-sep reveal reveal-delay-1" aria-hidden="true">
          <div className="lead-sep-line" />
          <div className="lead-sep-diamond" />
          <div className="lead-sep-line" />
        </div>

        <div className="reveal reveal-delay-1">
          <p>
            Agora olha para a sua prateleira mental de recursos. Terapia, você
            já fez ou faz. Energia, você entende. Lei da Atração, você já
            estudou o suficiente para ensinar. Consciência, bloqueios, crenças,
            merecimento… você tem esse vocabulário todo na ponta da língua.
          </p>
          <p>
            Então me explica como uma pessoa que sabe de tudo isso ainda fecha o
            aplicativo do banco suspirando daquele jeito.
          </p>
          <p>Eu te explico.</p>
        </div>

        <div className="lead-pullquote reveal reveal-delay-2">
          <p>
            Porque tudo o que você aprendeu até agora te ensinou a{' '}
            <em>entender.</em>
          </p>
        </div>

        <p className="lead-revelation reveal reveal-delay-3">
          Mas ninguém te ensinou a mudar.
        </p>

      </div>
    </Section>
  );
};
