import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, removeProductinById, findProductById } from "../utils/array"
import { BasketType, ProductBasketType} from "../lib/types"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
   
    const handleAddTobasket = async(newProductId: string) => {
        const basketCopy = deepClone(basket)
        const productInBasket = findProductById(basketCopy, newProductId)
        if (productInBasket) {
            incrementQuantityProduct(productInBasket, basketCopy)
            return
        }
        createBasketProduct(newProductId, basketCopy)
    }
    function createBasketProduct(idToAdd: string, basketCopy: BasketType) {
        const productToAdd = {id: idToAdd, quantity: 1}
        const basketUpdated = [productToAdd, ...basketCopy]
        setBasket(basketUpdated)
    }

    function incrementQuantityProduct(productInBasket: ProductBasketType, basketCopy: BasketType) {
        productInBasket.quantity += 1
        const basketUpdated = [...basketCopy]
        setBasket(basketUpdated)
    }
    const handleDeleteInBasket =(productId: string) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = removeProductinById(basketCopy, productId)
        setBasket(basketUpdated)
    }
    return { basket, handleAddTobasket, handleDeleteInBasket }
}