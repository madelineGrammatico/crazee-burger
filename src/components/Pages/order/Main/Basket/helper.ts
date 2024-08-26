import { BasketType, ProductsType } from "../../../../../lib/types"
import { findProductById } from "../../../../../utils/array"

export const calculateTotal = (basket: BasketType, menu: ProductsType) => {
    return basket.reduce((total, basketProduct)=> {
      const menuProduct = findProductById(menu, basketProduct.id)
      const menuProductPrice = menuProduct? menuProduct.price : 0
      const currentValue = menuProductPrice * basketProduct.quantity
      return currentValue? total + currentValue : total
    }, 0)
  }