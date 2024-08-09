import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"
import { ProductType } from "../lib/types"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
   
    const handleAddTobasket = async(newProduct: ProductType) => {
        const basketCopy = deepClone(basket)
        let basketUpdated 
        const hasProductInBasket = basket.map(product=> product.id).includes(newProduct.id)
        if ( !hasProductInBasket) {
            const  productToAdd = deepClone(newProduct)
            productToAdd.quantity += 1
            basketUpdated = [ productToAdd, ...basketCopy]
            
        } else {
            basketCopy.map((product: ProductType) => 
                product.id === newProduct.id ? 
                product.quantity += 1 : null
            )
            basketUpdated = [ ...basketCopy]
        }
        setBasket(basketUpdated)
    }

    const handleDeleteInBasket =(productId: string) => {
        const basketCopy = deepClone(basket)
        setBasket(basketCopy.filter((product: ProductType) => product.id !== productId))
    }
    return { basket, handleAddTobasket, handleDeleteInBasket }
}