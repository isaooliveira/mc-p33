const STYLES = `
  .section-wrapper {
    --section-padding: 120px;
    position: relative;
  }

  .section-wrapper.s-dark {
    background-color: var(--bg-soft);
  }

  .section-wrapper.s-plum {
    background-color: var(--bg-plum);
  }

  .section-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-px);
    width: 100%;
  }

  @media (max-width: 768px) {
    .section-wrapper { --section-padding: 80px; }
  }

  @media (max-width: 480px) {
    .section-wrapper { --section-padding: 64px; }
  }
`;

export const Section = ({
  children,
  className = '',
  id,
  dark = false,
  plum = false,
}) => {
  const variant = dark ? 's-dark' : plum ? 's-plum' : '';

  return (
    <>
      <style>{STYLES}</style>
      <section
        id={id}
        className={`section-wrapper ${variant} ${className}`}
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="section-container">{children}</div>
      </section>
    </>
  );
};
