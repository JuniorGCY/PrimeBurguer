import { auth } from "@/libs/FirebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { LoginFormData, schema} from "../types/LoginFormData"

export const loginService = async (data: LoginFormData) => {
    const result = schema.safeParse(data)

    if (!result.success) {
        return {sucess: false, error: "dados inválidos"}
    }

    try {
        await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
        
        return {sucess: true}
    } catch (error: any) {
        return {sucess: false, error: error.message}
    }
        

}