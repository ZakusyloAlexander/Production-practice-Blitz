import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">Insurance Calculator</h1>
        <p className="header__subtitle">
          Configure insurance modules and calculate the total tariff price.
        </p>
      </div>
    </header>
  )
}
