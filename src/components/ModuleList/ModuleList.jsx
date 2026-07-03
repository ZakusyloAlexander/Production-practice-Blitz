import InsuranceModuleCard from '../InsuranceModuleCard/InsuranceModuleCard'
import './ModuleList.css'

export default function ModuleList({
  modules,
  coverageByModule,
  cartModuleIds,
  onCoverageChange,
  onAddToCart,
}) {
  return (
    <div className="module-list">
      {modules.map((module) => (
        <InsuranceModuleCard
          key={module.id}
          module={module}
          coverage={coverageByModule[module.id]}
          isInCart={cartModuleIds.has(module.id)}
          onCoverageChange={onCoverageChange}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
