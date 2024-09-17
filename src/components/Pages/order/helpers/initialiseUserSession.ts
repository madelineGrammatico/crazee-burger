import { getMenu } from "../../../../api/products"
import { BasketType, ProductsType } from "../../../../lib/types"
import { getLocalStorage } from "../../../../utils/windows"

const initialiseMenu = async (
        username: string, 
        setMenu: React.Dispatch<React.SetStateAction<ProductsType>>,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    setIsLoading(true)
    const menuReceived = await getMenu(username)
    console.log("menuReceived : ", menuReceived)
    if (menuReceived) setMenu(menuReceived)
    setIsLoading(false)
}

const initialiseBasket = (
        username: string,
        setBasket: React.Dispatch<React.SetStateAction<BasketType>>,
    ) => {
    const BasketReceived = getLocalStorage(username)
    console.log("BasketReceived : ", BasketReceived)
    if (BasketReceived) setBasket(BasketReceived)
}

export const initialiseUserSession = async (
    username: string, 
    setMenu: React.Dispatch<React.SetStateAction<ProductsType>>, 
    setBasket: React.Dispatch<React.SetStateAction<BasketType>>, 
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    
    await initialiseMenu(username, setMenu, setIsLoading)
    initialiseBasket(username, setBasket)
}