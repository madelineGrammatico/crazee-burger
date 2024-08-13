import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findProductIn } from "../utils/array"
import { ProductType } from "../lib/types"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
   
    const handleAddTobasket = async(newProduct: ProductType) => {
        const basketCopy = deepClone(basket)
        let basketUpdated 
        const productInBasket = findProductIn(basketCopy, newProduct.id)
        if (productInBasket) {
            productInBasket.quantity +=1
            basketUpdated = [ ...basketCopy]
        } else {
            const productToAdd = deepClone(newProduct) 
            productToAdd.quantity += 1
            basketUpdated = [ productToAdd, ...basketCopy]
        }
        setBasket(basketUpdated)
    }

    const handleDeleteInBasket =(productId: string) => {
        const basketCopy = deepClone(basket)
        setBasket(basketCopy.filter((product: ProductType) => product.id !== productId))
    }
    return { basket, handleAddTobasket, handleDeleteInBasket }
}