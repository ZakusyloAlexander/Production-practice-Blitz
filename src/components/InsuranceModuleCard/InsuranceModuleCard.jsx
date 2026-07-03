import { calculatePrice } from '../../utils/calculatePrice'
import { formatNumber, formatPercent } from '../../utils/formatNumber'
import CoverageControl from '../CoverageControl/CoverageControl'
import './InsuranceModuleCard.css'

function isCoverageValid(value, module) {
  const numericValue = Number(value)
  return (
    !Number.isNaN(numericValue) &&
    numericValue >= module.minCoverage &&
    numericValue <= module.maxCoverage
  )
}

export default function InsuranceModuleCard({
  module,
  coverage,
  isInCart,
  onCoverageChange,
  onAddToCart,
}) {
  const price = calculatePrice(coverage, module.risk)
  const isValid = isCoverageValid(coverage, module)

  const cardClassName = [
    'module-card',
    isInCart ? 'module-card--in-cart' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={cardClassName} aria-labelledby={`module-title-${module.id}`}>
      <div className="module-card__header">
        <h2 className="module-card__title" id={`module-title-${module.id}`}>
          {module.name}
        </h2>
        {isInCart && (
          <span className="module-card__badge" aria-label="Module is in cart">
            In cart
          </span>
        )}
      </div>

      <dl className="module-card__meta">
        <div className="module-card__meta-item">
          <dt>Coverage range</dt>
          <dd>
            {formatNumber(module.minCoverage)} – {formatNumber(module.maxCoverage)}
          </dd>
        </div>
        <div className="module-card__meta-item">
          <dt>Risk</dt>
          <dd>{formatPercent(module.risk)}</dd>
        </div>
      </dl>

      <CoverageControl
        moduleId={module.id}
        moduleName={module.name}
        value={coverage}
        min={module.minCoverage}
        max={module.maxCoverage}
        step={module.step}
        onChange={(value) => onCoverageChange(module.id, value)}
      />

      <div className="module-card__price-row">
        <div className="module-card__price">
          <span className="module-card__price-label">Calculated price</span>
          <span className="module-card__price-value">{formatNumber(price)}</span>
        </div>
      </div>

      <button
        type="button"
        className={`module-card__button ${isInCart ? 'module-card__button--update' : ''}`}
        onClick={() => onAddToCart(module.id)}
        disabled={!isValid}
        aria-label={
          isInCart
            ? `Update ${module.name} in cart`
            : `Add ${module.name} to cart`
        }
      >
        {isInCart ? 'Update cart' : 'Add to cart'}
      </button>
    </article>
  )
}
