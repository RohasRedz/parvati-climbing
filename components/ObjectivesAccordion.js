import React from 'react';

export default function ObjectivesAccordion() {
  const items = [
    {
      id: 'education',
      title: 'Advance Education',
      summary: 'Support schools, vocational training and community learning.',
      details:
        'We back local schools and training centres, and run workshops on sustainable development and environmental care — prioritising access to quality learning for underrepresented communities.'
    },
    {
      id: 'sports',
      title: 'Outdoor Skills for Awareness',
      summary: 'Use outdoor sport to engage and educate responsibly.',
      details:
        'Through events and workshops, we promote safe, responsible outdoor participation that also educates locals and visitors on conservation and sustainable tourism, strengthening the local economy.'
    },
    {
      id: 'livelihoods',
      title: 'Livelihoods & Poverty Relief',
      summary: 'Improve incomes via training, support and opportunity.',
      details:
        'We provide financial assistance and vocational pathways that open dignified work — emphasising sustainable, locally led opportunities tied to responsible outdoor tourism.'
    },
    {
      id: 'healthcare',
      title: 'Community Health Access',
      summary: 'Support clinics, awareness and essential supplies.',
      details:
        'We help resource local clinics, assist with health awareness campaigns and enable distribution of essential supplies so underserved communities can access basic care.'
    },
    {
      id: 'environment',
      title: 'Environmental Stewardship',
      summary: 'Protect ecosystems and restore natural spaces.',
      details:
        'We support conservation, reforestation and clean‑up efforts while raising awareness about climate and biodiversity — safeguarding natural resources for future generations.'
    }
  ];

  return (
    <div className="objectives-accordion" role="list">
      {items.map((item) => (
        <details key={item.id} className="accordion-item" role="listitem">
          <summary className="accordion-summary">
            <div className="accordion-title">
              <h3>{item.title}</h3>
              <p className="accordion-subtitle">{item.summary}</p>
            </div>
            <span className="accordion-icon" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-content">
            <p>{item.details}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

