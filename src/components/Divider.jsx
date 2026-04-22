const STYLES = `
  .p33-divider {
    margin: 64px 0;
    position: relative;
    overflow: visible;
  }

  /* ——— plain line ——— */
  .p33-divider.d-line {
    height: 1px;
    background: var(--line);
  }

  /* ——— orbital (center dot) ——— */
  .p33-divider.d-orbital {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(214, 186, 122, 0.32) 50%,
      transparent 100%
    );
  }

  .p33-divider.d-orbital::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    background: var(--gold-soft);
    border-radius: 50%;
    box-shadow: 0 0 14px rgba(214, 186, 122, 0.75);
  }

  /* ——— ornament (diamond centre, fading lines) ——— */
  .p33-divider.d-ornament {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .p33-divider.d-ornament::before,
  .p33-divider.d-ornament::after {
    content: '';
    flex: 1;
    height: 1px;
  }

  .p33-divider.d-ornament::before {
    background: linear-gradient(90deg, transparent, rgba(214, 186, 122, 0.38));
  }

  .p33-divider.d-ornament::after {
    background: linear-gradient(90deg, rgba(214, 186, 122, 0.38), transparent);
  }

  .divider-diamond {
    width: 7px;
    height: 7px;
    background: var(--gold-soft);
    transform: rotate(45deg);
    flex-shrink: 0;
    box-shadow: 0 0 10px rgba(214, 186, 122, 0.6);
  }

  /* ——— roman (text centre) ——— */
  .p33-divider.d-roman {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .p33-divider.d-roman::before,
  .p33-divider.d-roman::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--line);
  }

  .divider-roman-label {
    font-family: var(--font-serif);
    font-size: 0.8125rem;
    letter-spacing: 0.35em;
    color: var(--gold-soft);
    opacity: 0.55;
    white-space: nowrap;
    font-style: italic;
  }
`;

export const Divider = ({ type = 'line', label }) => (
  <>
    <style>{STYLES}</style>

    {type === 'ornament' && (
      <div className="p33-divider d-ornament" aria-hidden="true">
        <div className="divider-diamond" />
      </div>
    )}

    {type === 'orbital' && (
      <div className="p33-divider d-orbital" aria-hidden="true" />
    )}

    {type === 'roman' && (
      <div className="p33-divider d-roman" aria-hidden="true">
        <span className="divider-roman-label">{label || 'XXXIII'}</span>
      </div>
    )}

    {type === 'line' && (
      <div className="p33-divider d-line" aria-hidden="true" />
    )}
  </>
);
