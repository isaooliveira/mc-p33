import { Section } from '../components/Section';
import { Button } from '../components/Button';

const STYLES = `
  /* ---- Hero wrapper ---- */
  .hero-wrap {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: var(--bg-main);
    overflow: hidden;
  }

  .hero-bg-image {
    position: absolute;
    inset: 0;
    background-image: url('/images/header-bg.webp');
    background-size: cover;
    background-position: center center;
    opacity: 0.70;
    pointer-events: none;
    z-index: 1;
  }

  .hero-center-light {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(37, 26, 31, 1) 0%, transparent 65%);
    pointer-events: none;
    z-index: 2;
    mix-blend-mode: screen;
  }

  .hero-bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 12, 18, 0.4) 0%,
      rgba(10, 12, 18, 0.7) 60%,
      var(--bg-main) 100%
    );
    pointer-events: none;
    z-index: 3;
  }

  /* Section — sits above neural layers */
  .hero-sec {
    position: relative;
    z-index: 4;
    text-align: center;
    width: 100%;
    background: transparent !important;
  }

  .hero-content {
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 0 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Brand label */
  .hero-brand {
    font-family: var(--font-sans);
    font-size: 0.625rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--gold-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 2rem;
    opacity: 0.85;
  }

  .hero-brand span {
    display: block;
    width: 22px;
    height: 1px;
    background: var(--gold-soft);
    opacity: 0.55;
  }

  /* Decorative rule */
  .hero-rule {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 1.75rem;
  }

  .hero-rule-arm {
    height: 1px;
    width: 56px;
    background: linear-gradient(90deg, transparent, rgba(214, 186, 122, 0.55));
  }

  .hero-rule-arm.r {
    background: linear-gradient(90deg, rgba(214, 186, 122, 0.55), transparent);
  }

  .hero-rule-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--gold-soft);
    box-shadow: 0 0 8px rgba(214, 186, 122, 0.7);
  }

  /* Main title image */
  .hero-title-img {
    width: clamp(200px, 60vw, 340px);
    max-width: 100%;
    height: auto;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .hero-subtitle {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 5.5vw, 3.75rem); /* Max ~60px */
    letter-spacing: -0.01em;
    color: var(--text-main);
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.15;
  }

  .hero-subtitle em {
    color: var(--gold-soft);
    font-style: italic;
  }


  /* Sub-headlines */
  .hero-lines {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 2.25rem;
    text-align: center;
  }

  .hero-line {
    font-family: var(--font-sans);
    font-weight: 300;
    color: var(--text-soft);
    font-size: clamp(1rem, 2.2vw, 1.25rem);
    line-height: 1.5;
    font-style: normal;
    text-align: center;
  }

  /* Lead text */
  .hero-lead {
    max-width: 540px;
    margin: 0 auto;
    font-family: var(--font-serif);
    font-size: clamp(1.1875rem, 2.5vw, 1.375rem);
    color: var(--text-soft);
    font-style: italic;
    line-height: 1.35;
    text-align: center;
  }

  .hero-lead strong {
    color: var(--text-main);
    font-style: italic;
  }

  /* Scroll indicator */
  .hero-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 3rem;
  }

  .hero-scroll-line {
    width: 1px;
    height: 36px;
    background: linear-gradient(180deg, rgba(214, 186, 122, 0.7) 0%, transparent 100%);
    animation: scrollPulse 2.2s ease-in-out infinite;
  }

  .hero-scroll-label {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .hero-wrap { min-height: 92vh; }
    .hero-content { padding: 30px 0 40px; }
  }
`;

export const Hero = () => (
  <div className="hero-wrap">
    <style>{STYLES}</style>

    <div className="hero-bg-image" aria-hidden="true" />
    <div className="hero-center-light" aria-hidden="true" />
    <div className="hero-bg-overlay" aria-hidden="true" />

    {/* Content */}
    <Section className="hero-sec">
      <div className="hero-content">

        <img src="/images/logo-protocolo2.webp" alt="Protocolo 33" className="hero-title-img animate-fade-rise delay-100" />
        
        <div className="hero-rule animate-fade-rise delay-200" aria-hidden="true">
          <div className="hero-rule-arm" />
          <div className="hero-rule-dot" />
          <div className="hero-rule-arm r" />
        </div>

        <h2 className="hero-subtitle animate-fade-rise delay-200">
          Tudo o que você <em>nunca</em> ouviu sobre<br />Dinheiro &amp; Permissão
        </h2>

        <div className="hero-lines animate-fade-rise delay-200">
          <p className="hero-line">
            Você entende de energia. Sabe sobre consciência. Fez cursos, terapia, sessões.<br />
            Então por que a sua conta bancária ainda não sabe disso?
          </p>
        </div>

        <div className="animate-fade-rise delay-300" style={{ marginBottom: '2.25rem' }}>
          <Button href="#offer">Começar os 33 protocolos</Button>
        </div>

        <div className="hero-lead animate-fade-rise delay-400">
          <strong>
            33 dias para revogar os contratos que a sua linhagem assinou por
            você antes de você nascer.
          </strong>
        </div>

        <div className="hero-scroll animate-fade-rise delay-400" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Continuar</span>
        </div>

      </div>
    </Section>
  </div>
);
