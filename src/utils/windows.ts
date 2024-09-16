import { BasketType } from "../lib/types"

export const refreshPage = () => window.location.reload()

export const setLocalStorage = (key: string, value: BasketType) => { 
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage= (key: string) : BasketType =>{ 
    const value = localStorage.getItem(key)
    return value? JSON.parse(value) : null
}