import { CheckCircle, ArrowRight } from 'lucide-react'
import bosklasData from '../../content/bosklas.json'

export default function BosklasSection() {
  return (
    <div className="px-m">
      <section id="bosklas" className="section-wrapper">
        <div className="grid-2">
          <div>
            <img
              src={bosklasData.photos[0].src}
              alt={bosklasData.photos[0].caption}
              className="image-card"
            />
          </div>
          <div className="stack">
            <h2 className="section-heading">
              {bosklasData.title}
            </h2>
            <p className="section-description">
              {bosklasData.description}
            </p>
            <ul className="feature-list mb-m">
              {bosklasData.features.map((feature, index) => (
                <li key={index} className="feature-list__item">
                  <CheckCircle size={24} color="oklch(0.48 0.12 150)" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-span-desktop="full">
            <details className="details-expand">
              <summary className="btn">
                <ArrowRight size={20} />
                Meer Over Bosklassen
              </summary>
              <div className="details-expand__content">
                {bosklasData.detailedInfo && bosklasData.detailedInfo.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
