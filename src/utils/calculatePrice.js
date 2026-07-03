export function calculatePrice(coverage, risk) {
  const price = coverage * risk
  return Number.isInteger(price) ? price : Math.round(price * 100) / 100
}
