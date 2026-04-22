const STYLES = `
  .p33-card {
    background: linear-gradient(
      140deg,
      rgba(255, 255, 255, 0.042) 0%,
      rgba(255, 255, 255, 0.022) 100%
    );
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 36px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    transition:
      border-color 0.4s ease,
      background 0.4s ease,
      box-shadow 0.4s ease;
  }

  /* Subtle top-edge gold sheen */
  .p33-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(214, 186, 122, 0.18),
      transparent
    );
    pointer-events: none;
  }

  .p33-card:hover {
    border-color: rgba(214, 186, 122, 0.22);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  }

  .p33-card.highlight {
    border-color: rgba(214, 186, 122, 0.38);
    background: linear-gradient(
      140deg,
      rgba(214, 186, 122, 0.07) 0%,
      rgba(214, 186, 122, 0.025) 100%
    );
    box-shadow:
      0 0 60px rgba(214, 186, 122, 0.055) inset,
      0 1px 0 rgba(214, 186, 122, 0.3) inset;
  }

  /* Gold top line on highlighted card */
  .p33-card.highlight::before {
    left: 20%;
    right: 20%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(214, 186, 122, 0.5),
      transparent
    );
  }

  @media (max-width: 768px) {
    .p33-card { padding: 24px; }
  }
`;

export const Card = ({ children, className = '', highlight = false }) => (
  <>
    <style>{STYLES}</style>
    <div className={`p33-card${highlight ? ' highlight' : ''} ${className}`}>
      {children}
    </div>
  </>
);
