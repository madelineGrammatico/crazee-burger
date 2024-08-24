import { BasketType, ProductsType } from "../lib/types"
import { findProductById } from "./array"

export function formatPrice(priceToFormat: number) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price: number | string): number {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export const calculateTotal = (basket: BasketType, menu: ProductsType) => {
  return basket.reduce((total, basketProduct)=> {
    const menuProduct = findProductById(menu, basketProduct.id)
    const menuProductPrice = menuProduct? menuProduct.price : 0
    const currentValue = menuProductPrice * basketProduct.quantity
    return currentValue? total + currentValue : total
  }, 0)
}