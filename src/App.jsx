import { useCallback, useMemo, useState } from 'react'
import { insuranceModules } from './constants/insuranceModules'
import { calculatePrice } from './utils/calculatePrice'
import Header from './components/Header/Header'
import ModuleList from './components/ModuleList/ModuleList'
import Cart from './components/Cart/Cart'
import './App.css'

function createInitialCoverage() {
  return insuranceModules.reduce((acc, module) => {
    acc[module.id] = module.minCoverage
    return acc
  }, {})
}

function clampCoverage(value, module) {
  const numericValue = Number(value)

  if (Number.isNaN(numericValue)) {
    return module.minCoverage
  }

  return Math.min(module.maxCoverage, Math.max(module.minCoverage, numericValue))
}

function isCoverageValid(value, module) {
  const numericValue = Number(value)
  return (
    !Number.isNaN(numericValue) &&
    numericValue >= module.minCoverage &&
    numericValue <= module.maxCoverage
  )
}

export default function App() {
  const [coverageByModule, setCoverageByModule] = useState(createInitialCoverage)
  const [cartItems, setCartItems] = useState([])

  const cartModuleIds = useMemo(
    () => new Set(cartItems.map((item) => item.id)),
    [cartItems],
  )

  const handleCoverageChange = useCallback((moduleId, value) => {
    const module = insuranceModules.find((item) => item.id === moduleId)
    if (!module) return

    setCoverageByModule((prev) => ({
      ...prev,
      [moduleId]: clampCoverage(value, module),
    }))
  }, [])

  const handleAddToCart = useCallback(
    (moduleId) => {
      const module = insuranceModules.find((item) => item.id === moduleId)
      if (!module) return

      const coverage = coverageByModule[moduleId]
      if (!isCoverageValid(coverage, module)) return

      const price = calculatePrice(coverage, module.risk)

      setCartItems((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === moduleId)

        if (existingIndex >= 0) {
          const updated = [...prev]
          updated[existingIndex] = {
            ...updated[existingIndex],
            coverage,
            price,
          }
          return updated
        }

        return [
          ...prev,
          {
            id: module.id,
            name: module.name,
            coverage,
            risk: module.risk,
            price,
          },
        ]
      })
    },
    [coverageByModule],
  )

  const handleRemoveFromCart = useCallback((moduleId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== moduleId))
  }, [])

  const handleClearCart = useCallback(() => {
    setCartItems([])
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__layout">
          <section className="app__modules" aria-label="Insurance modules">
            <ModuleList
              modules={insuranceModules}
              coverageByModule={coverageByModule}
              cartModuleIds={cartModuleIds}
              onCoverageChange={handleCoverageChange}
              onAddToCart={handleAddToCart}
            />
          </section>
          <aside className="app__sidebar" aria-label="Shopping cart">
            <Cart
              items={cartItems}
              onRemove={handleRemoveFromCart}
              onClear={handleClearCart}
            />
          </aside>
        </div>
      </main>
    </div>
  )
}
