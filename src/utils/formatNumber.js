export function formatNumber(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '0'
  }

  if (Number.isInteger(value)) {
    return value.toLocaleString('en-US')
  }

  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function formatPercent(risk) {
  return `${Math.round(risk * 100)}%`
}
