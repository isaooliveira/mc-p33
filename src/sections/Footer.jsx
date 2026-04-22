import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FileX, Smartphone, Gem, Sparkles } from 'lucide-react';

const VISION_STYLES = `
  .vision-wrap {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .vision-header {
    max-width: 680px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .vision-header h2 {
    line-height: 1.15;
    margin-bottom: 0;
  }

  .vision-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .vision-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 2rem 1.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    transition: all 0.3s ease;
  }

  .vision-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--gold-soft);
    transform: translateY(-5px);
  }

  .vision-card-icon {
    color: var(--gold-soft);
    margin-bottom: 1.5rem;
  }

  .vision-card p {
    font-size: 1rem !important;
    line-height: 1.6 !important;
    color: var(--text-soft);
    margin: 0 !important;
  }

  .vision-conclusion {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
  }

  .vision-conclusion p {
    color: var(--text-soft);
    margin-bottom: 1.5rem;
    line-height: 1.82;
  }

  .vision-hl {
    color: var(--gold-soft) !important;
    font-style: italic;
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 3.2vw, 1.875rem) !important; /* ~30px on desktop */
  }

  @media (max-width: 992px) {
    .vision-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .vision-cards {
      grid-template-columns: 1fr;
    }
  }

`;

const FOOTER_STYLES = `
  .footer-area {
    background-color: var(--bg-soft);
    border-top: 1px solid var(--line);
    padding: 5rem var(--container-px) 2.5rem;
  }



  .footer-bottom {
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.2);
    font-size: 0.8125rem;
    letter-spacing: 0.06em;
  }

  .footer-logo-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }

  .footer-logo-wrap img {
    width: 150px;
    height: auto;
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    .footer-area { padding: 4rem 18px 2rem; }
  }
`;



export const Footer = () => {
  const visionRef = useScrollReveal();
  const footerRef = useScrollReveal();

  return (
    <>
      <Section id="vision">
        <style>{VISION_STYLES}</style>

        <div className="vision-wrap" ref={visionRef}>
          <div className="vision-header reveal">
            <h2>
              Daqui a 33 dias você não vai ter "aprendido mais uma coisa."
            </h2>
          </div>

          <div className="vision-cards reveal reveal-delay-1">
            <div className="vision-card">
              <FileX className="vision-card-icon" size={32} strokeWidth={1.5} />
              <p>Você vai ter revogado os contratos que decidiam, sem te pedir licença, quanto de dinheiro era permitido para alguém como você.</p>
            </div>
            <div className="vision-card">
              <Smartphone className="vision-card-icon" size={32} strokeWidth={1.5} />
              <p>Você vai olhar para o aplicativo do banco sem aquele aperto no estômago.</p>
            </div>
            <div className="vision-card">
              <Gem className="vision-card-icon" size={32} strokeWidth={1.5} />
              <p>Você vai cobrar pelo que vale sem dar descontos que ninguém pediu.</p>
            </div>
            <div className="vision-card">
              <Sparkles className="vision-card-icon" size={32} strokeWidth={1.5} />
              <p>Você vai receber sem minimizar. Vai gastar com alegria sem culpa. Vai ser a pessoa que chegou.</p>
            </div>
          </div>

          <div className="vision-conclusion reveal reveal-delay-2">
            <p>E quando a sua família te chamar de "mudou com o dinheiro", você vai sorrir.</p>
            <p className="vision-hl">Porque significa que funcionou.</p>
          </div>
        </div>
      </Section>

      <footer className="footer-area" ref={footerRef}>
        <style>{FOOTER_STYLES}</style>



        <div className="footer-logo-wrap">
          <img src="/images/miscon-logo.webp" alt="Missão Consciência" loading="lazy" />
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Protocolo 33 · Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};
