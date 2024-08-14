import { ProductsType} from "../lib/types"

export const deepClone = (array: object) => JSON.parse(JSON.stringify(array))

export const findProductIn = (array: ProductsType, id: string) => array.find(item => item.id === id)
export const filterProduct  = (array: ProductsType, productId: string) => array.filter(item => item.id !== productId)