import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle, id, align = 'start' }) => (
  <header
    className={`section-header${align === 'center' ? ' section-header--center' : ''}`}
  >
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="section-title" id={id}>
      {title}
    </h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeader;
