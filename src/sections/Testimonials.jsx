import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STYLES = `
  .testimonials-wrap {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .testimonials-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .testimonials-header h2 {
    margin-bottom: 1rem;
    color: var(--text-main);
  }

  .testimonials-header p {
    color: var(--text-soft);
    max-width: 600px;
    margin: 0 auto;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    align-items: start;
  }

  .testimonials-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .testimonial-img-wrapper {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .testimonial-img-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--gold-soft);
  }

  .testimonial-img-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: luminosity;
    filter: contrast(1.1) brightness(0.85);
    transition: all 0.5s ease;
  }

  .testimonial-img-wrapper:hover img {
    mix-blend-mode: normal;
    filter: contrast(1) brightness(1);
  }

  @media (max-width: 992px) {
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
`;

// Distribution logic to slice 11 testimonials into columns (masonry imitation)
const images = Array.from({ length: 11 }, (_, i) => `/images/depoimento${i}.webp`);
const chunk = Math.ceil(images.length / 4);
const columns = [
  images.slice(0, chunk),
  images.slice(chunk, chunk * 2),
  images.slice(chunk * 2, chunk * 3),
  images.slice(chunk * 3, images.length)
];

export const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <Section id="depoimentos" dark>
      <style>{STYLES}</style>
      <div className="testimonials-wrap" ref={ref}>
        <div className="testimonials-header reveal">
          <h2>O que elas dizem</h2>
          <p>
            Milhares de mulheres já vivenciaram a transformação dessa nova consciência.
            Veja o que acontece quando você decide rasgar os contratos da escassez.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="testimonials-column">
              {col.map((src, idx) => (
                <div 
                  key={idx} 
                  className={`testimonial-img-wrapper reveal reveal-delay-${((idx + colIdx) % 3) + 1}`}
                >
                  <img src={src} alt={`Depoimento ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
