export function useCurrencify(amount) {
  let positiveNegativeSymbol = ''
  if (amount > 0) {
    positiveNegativeSymbol = '+'
  } else if (amount < 0) {
    positiveNegativeSymbol = '-'
  }

  const currencySymbol = '$',
    amountPositive = Math.abs(amount),
    amountFormatted = amountPositive.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  return `${positiveNegativeSymbol} ${currencySymbol} ${amountFormatted}`
}
