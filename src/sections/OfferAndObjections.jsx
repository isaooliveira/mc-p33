import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Accordion } from '../components/Accordion';
import { Divider } from '../components/Divider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .offer-wrap {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Price block */
  .offer-price-block {
    text-align: center;
  }

  .offer-price-block .eyebrow {
    justify-content: center;
  }

  /* Gold ornament frame around price */
  .price-frame {
    position: relative;
    display: inline-block;
    padding: 2rem 4rem;
    margin: 1rem 0 2.5rem;
  }

  .price-frame::before,
  .price-frame::after {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
  }

  .price-frame::before {
    top: 0; left: 0;
    border-top: 1px solid var(--line-gold);
    border-left: 1px solid var(--line-gold);
  }

  .price-frame::after {
    bottom: 0; right: 0;
    border-bottom: 1px solid var(--line-gold);
    border-right: 1px solid var(--line-gold);
  }

  .price-inner::before,
  .price-inner::after {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
  }

  .price-inner::before {
    top: 0; right: 0;
    border-top: 1px solid var(--line-gold);
    border-right: 1px solid var(--line-gold);
  }

  .price-inner::after {
    bottom: 0; left: 0;
    border-bottom: 1px solid var(--line-gold);
    border-left: 1px solid var(--line-gold);
  }

  .price-inner {
    position: relative;
  }

  .price-display {
    font-family: var(--font-display);
    font-size: clamp(4rem, 10vw, 6.5rem);
    font-weight: 400;
    line-height: 1;
    color: var(--gold-soft);
    text-shadow: 0 0 60px rgba(214, 186, 122, 0.25);
    margin: 0;
    letter-spacing: 0.03em;
    display: block;
  }

  .price-label {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-top: 0.75rem;
    display: block;
  }

  /* Rational text */
  .offer-rational {
    max-width: 580px;
    margin: 0 auto;
    text-align: left;
    color: var(--text-soft);
    line-height: 1.82;
  }

  .offer-rational p {
    margin-bottom: 1.5rem;
  }

  .offer-rational strong {
    color: var(--text-main);
  }

  /* Strong statement */
  .offer-strong-stmt {
    border-left: 1px solid var(--danger-soft);
    padding: 1.25rem 1.5rem;
    background: var(--danger-dim);
    border-radius: 2px;
    color: var(--text-main) !important;
    margin-top: 2rem;
    font-family: var(--font-sans);
    font-size: clamp(1.15rem, 2.5vw, 1.3rem);
    line-height: 1.65;
    font-weight: 400;
  }

  /* CTA block */
  .offer-cta {
    text-align: center;
    margin: 3.5rem 0 4.5rem;
  }

  .offer-cta-sub {
    margin-top: 1.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-soft);
    opacity: 0.8;
  }

  /* Objections */
  .objections-wrap {
    max-width: 700px;
    margin: 0 auto;
  }

  .objections-wrap h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    .price-frame { padding: 1.5rem 2rem; }
  }
`;

const objections = [
  {
    title: '"Mas eu já fiz tantos cursos…"',
    content: (
      <p>
        Exatamente. E nenhum deles foi um protocolo de Destruir e Descriar contratos
        de linhagem. Você aprendeu sobre os padrões. O Protocolo 33 vai para onde os
        contratos estão guardados. Essa é a diferença.
      </p>
    ),
  },
  {
    title: '"Não sei se é o momento certo…"',
    content: (
      <p>
        O momento certo chegará junto com o dinheiro que você ainda não tem? Você
        está esperando condições para criar as condições. Essa é a mecânica da
        escassez funcionando ao vivo, na sua frente.
      </p>
    ),
  },
  {
    title: '"E se eu não conseguir acompanhar os 33 dias?"',
    content: (
      <p>
        As aulas são gravadas. Você acessa no seu ritmo. Mas olha, se você não
        consegue se comprometer com 10 minutos por dia durante 33 dias, o Protocolo
        já está fazendo o trabalho: está mostrando exatamente onde o seu
        não-compromisso com você mesma mora.
      </p>
    ),
  },
  {
    title: '"Isso funciona de verdade?"',
    content: (
      <p>
        Depende de uma coisa: de você. O processo funciona. A pergunta é se você
        vai usar de verdade ou vai mais uma vez assistir passivamente esperando que
        algo mude por osmose. A ferramenta é a ferramenta. A potência é sua.
      </p>
    ),
  },
];

export const OfferAndObjections = () => {
  const ref = useScrollReveal();

  return (
    <Section id="offer" dark>
      <style>{STYLES}</style>

      <div className="offer-wrap" ref={ref}>

        <div className="offer-price-block reveal">
          <span className="eyebrow">O Investimento</span>

          <div className="price-frame">
            <div className="price-inner">
              <span className="price-display">R$ 333</span>
              <span className="price-label">O número da criação. O número da prontidão.</span>
            </div>
          </div>

          <div className="offer-rational">
            <p><strong>Deixa eu ser direta com você.</strong></p>
            <p>
              R$ 333 divididos por 33 dias são <strong>R$ 10,09 por dia</strong>. Menos
              do que um delivery de fim de semana. Menos do que uma sessão de terapia.
              Muito menos do que o custo de mais um ano vivendo exatamente onde você
              está agora.
            </p>
            <p className="offer-strong-stmt">
              Se você não está disposta a colocar R$ 10 por dia na sua própria
              potência, o Protocolo 33 já te deu a primeira lição de graça: Você
              ainda acha que a sua escassez é mais segura do que a sua expansão.
            </p>
          </div>

          <div className="offer-cta">
            <Button 
              href="https://pay.hotmart.com/G105503561S?off=96dhtv1b" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ fontSize: '0.8125rem', padding: '20px 52px' }}
            >
              INICIAR OS 33 PROTOCOLOS
            </Button>
            <p className="offer-cta-sub">33 dias · 33 contratos · Uma nova linhagem</p>
          </div>
        </div>

        <Divider type="ornament" />

        <div className="objections-wrap reveal reveal-delay-1">
          <h3>Ainda na dúvida?</h3>
          <Accordion items={objections} />
        </div>

      </div>
    </Section>
  );
};
