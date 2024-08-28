import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId: string) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()){ 
        const userReceived = docSnapshot.data()
        console.log("userReceived: ", userReceived)
        return userReceived
    }
}

export const createUser =(username: string) => {
    const docRef = doc(db, "users", username)
    const newUser = {
        username: username,
        menu: fakeMenu.LARGE
    }
    setDoc(docRef, newUser)
}