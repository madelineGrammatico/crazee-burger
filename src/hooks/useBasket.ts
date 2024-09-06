import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, removeProductinById, findProductById } from "../utils/array"
import { BasketType, ProductBasketType} from "../lib/types"
import { setLocalStorage } from "../utils/windows"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
   
    const handleAddTobasket = async(newProductId: string, username: string | undefined) => {
        const basketCopy = deepClone(basket)
        const productInBasket = findProductById(basketCopy, newProductId)
        if(!username) return
        if (productInBasket) {
            incrementQuantityProduct(productInBasket, basketCopy, username)
            return
        }
        createBasketProduct(newProductId, basketCopy, username)
    }
    function createBasketProduct(idToAdd: string, basketCopy: BasketType, username: string) {
        const productToAdd = {id: idToAdd, quantity: 1}
        const basketUpdated = [productToAdd, ...basketCopy]
        setBasket(basketUpdated)
        setLocalStorage(username, basketUpdated)
    }

    function incrementQuantityProduct(productInBasket: ProductBasketType, basketCopy: BasketType, username: string) {
        productInBasket.quantity += 1
        const basketUpdated = [...basketCopy]
        setBasket(basketUpdated)
        setLocalStorage(username, basketCopy)
    }
    const handleDeleteInBasket =(productId: string) => {
        const basketUpdated = removeProductinById(basket, productId)
        setBasket(basketUpdated)
    }
    return { basket, handleAddTobasket, handleDeleteInBasket }
}