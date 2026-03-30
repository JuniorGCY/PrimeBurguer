import { auth } from "@/libs/FirebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { LoginFormData } from "../types/LoginFormData"

export const loginService = async (data: LoginFormData) => {
        await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

}