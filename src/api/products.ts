import { doc, getDoc, setDoc } from "firebase/firestore"
import { ProductsType } from "../lib/types"
import { db } from "./firebase-config"

export const getMenu = async(userId: string): Promise<ProductsType | undefined>=> {
    const docRef = doc(db, "users", userId )
    const docSnapshot = await getDoc(docRef)
    if(docSnapshot.exists())  {
        const { menu } = docSnapshot.data()
        return menu
    }
 }

export const syncBothMenus = async(userId: string,  menuUpdated : ProductsType )=> {
    const path = doc(db, "users", userId )
    const userData = {
        username: userId,
        menu: menuUpdated 
    }
    await setDoc(path, userData)
}