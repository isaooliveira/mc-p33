import { useState } from 'react';

const STYLES = `
  .p33-accordion {
    border-top: 1px solid var(--line);
  }

  .p33-acc-item {
    border-bottom: 1px solid var(--line);
  }

  .p33-acc-trigger {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding: 28px 0;
    cursor: pointer;
    background: transparent;
    border: none;
    color: inherit;
    text-align: left;
    gap: 20px;
    transition: opacity 0.2s ease;
  }

  .p33-acc-trigger:hover .p33-acc-title {
    color: var(--gold-soft);
  }

  .p33-acc-title {
    margin: 0;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--text-main);
    flex: 1;
    letter-spacing: 0.01em;
    line-height: 1.45;
    transition: color 0.25s ease;
  }

  .p33-acc-title.is-open {
    color: var(--gold-soft);
  }

  .p33-acc-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--gold-soft);
    opacity: 0.75;
    margin-top: 2px;
    transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .p33-acc-icon.is-open {
    transform: rotate(45deg);
    opacity: 1;
  }

  .p33-acc-body {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition:
      max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.32s ease;
  }

  .p33-acc-body.is-open {
    max-height: 800px;
    opacity: 1;
  }

  .p33-acc-inner {
    padding-bottom: 28px;
  }
`;

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="p33-acc-item">
    <button
      className="p33-acc-trigger"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className={`p33-acc-title${isOpen ? ' is-open' : ''}`}>
        {title}
      </span>
      <svg
        className={`p33-acc-icon${isOpen ? ' is-open' : ''}`}
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
        <line x1="9" y1="1" x2="9" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="1" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </button>

    <div className={`p33-acc-body${isOpen ? ' is-open' : ''}`}>
      <div className="p33-acc-inner">{children}</div>
    </div>
  </div>
);

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <style>{STYLES}</style>
      <div className="p33-accordion">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </>
  );
};
