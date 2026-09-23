import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

export const SERVICE_CARD_DATA = [
  {
    label: 'STRATEGY',
    icon: '◆',
    items: ['AI Growth Strategy', 'Brand Positioning', 'Creative Direction', 'Market Discovery', 'Competitive Research'],
  },
  {
    label: 'CREATIVE',
    icon: '✦',
    items: ['Art Direction', 'UX / UI Design', 'Motion & Animation', 'Interactive Design', 'Visual Identity'],
  },
  {
    label: 'TECH',
    icon: '⬡',
    items: ['Next.js & React Apps', 'AI Automation & Agents', 'WebGL / Three.js', 'API Integrations', 'Full-Stack Engineering'],
  },
  {
    label: 'GROWTH',
    icon: '▲',
    items: ['SEO & Content Systems', 'Paid Ads & Funnels', 'Email Automation', 'Analytics & Tracking', 'Conversion Optimisation'],
  },
];

const ServiceCard = forwardRef(({ index }, ref) => {
  const data = SERVICE_CARD_DATA[index];

  return (
    <div className="service-card" id={`service-card-${index + 1}`} ref={ref}>
      <div className="card-float-wrapper">
        <div className="flip-card-inner">
          {/* FRONT: brand mark face */}
          <div className="flip-card-front">
            <img className="flip-card-mark" src="/images/hero-logo.webp" alt="Inloop" />
          </div>

          {/* BACK: white card with service content */}
          <div className="flip-card-back">
            <div className="flip-card-grid" aria-hidden="true"></div>
            <span className="flip-card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className="flip-card-body">
              <div className="flip-card-top">
                <span className="flip-card-icon">{data.icon}</span>
                <span className="flip-card-label">{data.label}</span>
              </div>
              <ul className="flip-card-list">
                {data.items.map((item, i) => (
                  <li key={item}><span className="flip-card-dot" aria-hidden="true"></span>{item}</li>
                ))}
              </ul>
              <Link className="flip-card-cta" to="/#contact">Book a Free Call <span className="arr">↗</span></Link>
              <div className="flip-card-tag">INLOOP MEDIA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
