import { BasketType, ProductsType} from "../lib/types"

export const deepClone = (array: object) => JSON.parse(JSON.stringify(array))

export const findProductById = (array: ProductsType, id: string) => array.find(item => item.id === id)

export const removeProductinById = (array: ProductsType | BasketType, productId: string) => array.filter(item => item.id !== productId)

export const findProductIndexById = (array: ProductsType, id: string) => array.findIndex(item => item.id === id)

export const isEmptyArray = (array: ProductsType | BasketType) => array.length === 0
