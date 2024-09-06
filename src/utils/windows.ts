import { BasketType } from "../lib/types"

export const refreshPage = () => window.location.reload()

export const setLocalStorage = (key: string, value: BasketType) => { 
    localStorage.setItem(key, JSON.stringify(value))
}