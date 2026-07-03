import { formatNumber, formatPercent } from '../../utils/formatNumber'
import './CartItem.css'

export default function CartItem({ item, onRemove }) {
  return (
    <li className="cart-item">
      <div className="cart-item__info">
        <h3 className="cart-item__name">{item.name}</h3>
        <dl className="cart-item__details">
          <div className="cart-item__detail">
            <dt>Coverage</dt>
            <dd>{formatNumber(item.coverage)}</dd>
          </div>
          <div className="cart-item__detail">
            <dt>Risk</dt>
            <dd>{formatPercent(item.risk)}</dd>
          </div>
          <div className="cart-item__detail">
            <dt>Price</dt>
            <dd className="cart-item__price">{formatNumber(item.price)}</dd>
          </div>
        </dl>
      </div>
      <button
        type="button"
        className="cart-item__remove"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </li>
  )
}
