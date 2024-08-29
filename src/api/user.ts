import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId: string) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()){ 
        const userReceived = docSnapshot.data()
        return userReceived
    }
}

export const createUser = async (username: string) => {
    const docRef = doc(db, "users", username)
    const newUser = {
        username: username,
        menu: fakeMenu.SMALL
    }
    await setDoc(docRef, newUser)
}

export const authenticateUser = async (userId: string) => {
    const existingUser = await getUser(userId)
    if (!existingUser) await createUser(userId)
}