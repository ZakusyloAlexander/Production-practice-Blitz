import CartItem from '../CartItem/CartItem'
import Summary from '../Summary/Summary'
import { formatNumber } from '../../utils/formatNumber'
import './Cart.css'

export default function Cart({ items, onRemove, onClear }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)
  const isEmpty = items.length === 0

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Shopping Cart</h2>
        {!isEmpty && (
          <button
            type="button"
            className="cart__clear"
            onClick={onClear}
            aria-label="Clear all items from cart"
          >
            Clear cart
          </button>
        )}
      </div>

      {isEmpty ? (
        <p className="cart__empty">
          No modules added yet. Select coverage and add modules to the cart.
        </p>
      ) : (
        <>
          <ul className="cart__list" aria-label="Cart items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </ul>

          <Summary items={items} />

          <div className="cart__total">
            <span className="cart__total-label">Total price</span>
            <span className="cart__total-value">{formatNumber(totalPrice)}</span>
          </div>
        </>
      )}
    </div>
  )
}
