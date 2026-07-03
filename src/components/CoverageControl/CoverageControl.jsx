import { useCallback } from 'react'
import { formatNumber } from '../../utils/formatNumber'
import './CoverageControl.css'

function clampValue(value, min, max) {
  const numericValue = Number(value)
  if (Number.isNaN(numericValue)) return min
  return Math.min(max, Math.max(min, numericValue))
}

export default function CoverageControl({
  moduleId,
  moduleName,
  value,
  min,
  max,
  step,
  onChange,
}) {
  const inputId = `coverage-input-${moduleId}`
  const sliderId = `coverage-slider-${moduleId}`

  const handleInputChange = useCallback(
    (event) => {
      onChange(event.target.value)
    },
    [onChange],
  )

  const handleInputBlur = useCallback(
    (event) => {
      onChange(clampValue(event.target.value, min, max))
    },
    [min, max, onChange],
  )

  const handleSliderChange = useCallback(
    (event) => {
      onChange(Number(event.target.value))
    },
    [onChange],
  )

  return (
    <div className="coverage-control">
      <label className="coverage-control__label" htmlFor={inputId}>
        Coverage for {moduleName}
      </label>

      <div className="coverage-control__input-row">
        <input
          id={inputId}
          className="coverage-control__input"
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          aria-describedby={`coverage-range-${moduleId}`}
        />
      </div>

      <div className="coverage-control__slider-wrap">
        <label className="coverage-control__slider-label visually-hidden" htmlFor={sliderId}>
          Coverage slider for {moduleName}
        </label>
        <input
          id={sliderId}
          className="coverage-control__slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={`Coverage slider for ${moduleName}`}
        />
      </div>

      <div className="coverage-control__range" id={`coverage-range-${moduleId}`}>
        <span>Min: {formatNumber(min)}</span>
        <span>Max: {formatNumber(max)}</span>
      </div>
    </div>
  )
}
