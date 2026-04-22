import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .mentor-wrap {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .mentor-image-container {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  /* Decorative elements behind image */
  .mentor-image-container::before {
    content: '';
    position: absolute;
    inset: -10px;
    background: radial-gradient(circle at center, rgba(214, 186, 122, 0.15) 0%, transparent 70%);
    z-index: 0;
  }

  .mentor-image-wrapper {
    position: relative;
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
  }

  .mentor-image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: luminosity;
    filter: contrast(1.1) brightness(0.9);
    transition: all 0.5s ease;
  }

  .mentor-image-wrapper:hover img {
    mix-blend-mode: normal;
    filter: contrast(1) brightness(1);
  }

  .mentor-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mentor-title {
    margin-bottom: 2rem;
    color: var(--text-main);
  }

  .mentor-highlight {
    color: var(--gold-soft);
    font-size: clamp(1.125rem, 2.2vw, 1.4rem);
    font-family: var(--font-serif);
    font-style: italic;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .mentor-p {
    line-height: 1.8;
    color: var(--text-soft);
  }

  @media (max-width: 900px) {
    .mentor-wrap {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
  }
`;

export const Mentor = () => {
  const ref = useScrollReveal();

  return (
    <Section id="mentor" dark>
      <style>{STYLES}</style>
      <div className="mentor-wrap" ref={ref}>
        <div className="mentor-image-container reveal">
          <div className="mentor-image-wrapper">
            <img src="/images/foto-quem-sou-final.webp" alt="Sua Mentora" loading="lazy" />
          </div>
        </div>
        
        <div className="mentor-content reveal reveal-delay-1">
          <h2 className="mentor-title">Quem é sua Mentora</h2>
          <div className="mentor-highlight">
            Fundadora da Escola Missão Consciência® e especialista em Mentalidade de Alta Permissão.
          </div>
          <p className="mentor-p">
            Com mais de 10 anos de experiência terapêutica, já soma mais de 150 mil mulheres impactadas 
            pelo seu trabalho, ela não entrega apenas "teoria", mas as chaves práticas para você 
            assumir o controle do seu sistema nervoso.
          </p>
        </div>
      </div>
    </Section>
  );
};
