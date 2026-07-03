import { formatNumber } from '../../utils/formatNumber'
import './Summary.css'

export default function Summary({ items }) {
  const moduleCount = items.length
  const totalCoverage = items.reduce((sum, item) => sum + item.coverage, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="summary" aria-label="Cart summary">
      <h3 className="summary__title">Summary</h3>
      <dl className="summary__list">
        <div className="summary__item">
          <dt>Selected modules</dt>
          <dd>{moduleCount}</dd>
        </div>
        <div className="summary__item">
          <dt>Total coverage</dt>
          <dd>{formatNumber(totalCoverage)}</dd>
        </div>
        <div className="summary__item">
          <dt>Total price</dt>
          <dd className="summary__price">{formatNumber(totalPrice)}</dd>
        </div>
      </dl>
    </div>
  )
}
