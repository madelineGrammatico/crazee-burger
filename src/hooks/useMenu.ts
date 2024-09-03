import { useState } from "react"
import { deepClone } from "../utils/array"
import { ProductsType, ProductType } from "../lib/types"
import { syncBothMenus } from "../api/products"

export const useMenu = (menuSelected: ProductsType) => { 
    const [menu, setMenu] = useState<ProductsType>([])

    const resetMenu = (username: string) => {
        setMenu(menuSelected)
        const menuUpdated = menu
        syncBothMenus(username, menuUpdated)
    }
    const handleAdd = async (newProduct: ProductType, username: string | undefined) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = [ newProduct,...menuCopy]
        setMenu(menuUpdated)
        if(!username) return
        syncBothMenus(username, menuUpdated)
    }
    const handleEdit = (productBeingUdated: ProductType) => { 
        const menuCopy = deepClone(menu)
        const indexOfPoductToEdit = menu.findIndex((product) => product.id === productBeingUdated.id)
        const menuUpdated = [...menuCopy]
        menuUpdated[indexOfPoductToEdit] = productBeingUdated
        setMenu(menuUpdated)
    }

    const handleDelete =(productId: string, username: string | undefined) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = menuCopy.filter((product: ProductType) => product.id !== productId)
        setMenu( menuUpdated )
        if(!username) return
        syncBothMenus(username, menuUpdated)
    }

    return {menu, setMenu, resetMenu, handleAdd, handleDelete, handleEdit}
}

