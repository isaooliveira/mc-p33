const STYLES = `
  .btn-p33-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 18px 44px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-sans);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 1.2;
    color: #06040A;
    background: linear-gradient(
      105deg,
      #C5A24A 0%,
      #EDD688 28%,
      #D6BA7A 52%,
      #BFA358 72%,
      #EDD688 100%
    );
    background-size: 280% auto;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow:
      0 2px 24px rgba(214, 186, 122, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.22);
    animation: shimmerGold 4s linear infinite;
    transition:
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.35s ease;
  }

  .btn-p33-primary:hover {
    transform: translateY(-3px);
    box-shadow:
      0 12px 44px rgba(214, 186, 122, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.28);
    color: #06040A;
    outline: none;
  }

  .btn-p33-primary:active {
    transform: translateY(-1px);
    box-shadow:
      0 4px 16px rgba(214, 186, 122, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }

  .btn-p33-primary:focus-visible {
    outline: 2px solid var(--gold-soft);
    outline-offset: 4px;
  }

  /* Sheen sweep on hover */
  .btn-p33-primary::after {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.18) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    transition: left 0.55s ease;
    pointer-events: none;
  }

  .btn-p33-primary:hover::after {
    left: 130%;
  }

  /* ——— Secondary ——— */

  .btn-p33-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 40px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--font-sans);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 1.2;
    color: var(--text-main);
    background: transparent;
    border: 1px solid var(--line-gold);
    cursor: pointer;
    transition:
      background 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease,
      transform 0.3s ease;
  }

  .btn-p33-secondary:hover {
    background: var(--surface-gold);
    border-color: var(--gold-soft);
    color: var(--gold-soft);
    transform: translateY(-2px);
    outline: none;
  }

  .btn-p33-secondary:focus-visible {
    outline: 2px solid var(--gold-soft);
    outline-offset: 4px;
  }
`;

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <>
      <style>{STYLES}</style>
      <Component
        href={href}
        className={`btn-p33-${variant} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </>
  );
};
