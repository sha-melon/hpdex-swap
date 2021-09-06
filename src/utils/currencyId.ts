import { Currency, ETHER, Token } from 'hpbswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'HPB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
