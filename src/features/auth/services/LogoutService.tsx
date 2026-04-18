"use server"

import { auth } from "@/libs/FirebaseConnection";
import { signOut } from "firebase/auth";

export const LogoutService = async () => {
    try {
        await signOut(auth)
        console.log("Sucesso")
    } catch (error) {
        console.log("vish")
        throw error
    }
}