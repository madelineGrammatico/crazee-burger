import { useState } from "react"
import { deepClone } from "../utils/array"
import { ProductsType, ProductType } from "../lib/types"
import { syncBothMenus } from "../api/products"

export const useMenu = (menuSelected: ProductsType) => { 
    const [menu, setMenu] = useState(menuSelected)

    const resetMenu = () => {
        setMenu(menuSelected)
    }
    const handleAdd = (newProduct: ProductType, username: string) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = [ newProduct,...menuCopy]
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
    }
    const handleEdit = (productBeingUdated: ProductType) => { 
        const menuCopy = deepClone(menu)
        const indexOfPoductToEdit = menu.findIndex((product) => product.id === productBeingUdated.id)
        const menuUpdated = [...menuCopy]
        menuUpdated[indexOfPoductToEdit] = productBeingUdated
        setMenu(menuUpdated)
    }

    const handleDelete =(productId: string) => {
        const menuCopy = deepClone(menu)
        setMenu(menuCopy.filter((product: ProductType) => product.id !== productId))
    }

    return {menu, resetMenu, handleAdd, handleDelete, handleEdit}
}

