import {auth, db} from '../../../libs/FirebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { RegisterFormData, schema} from '../types/RegisterFormData'
import { serverTimestamp } from 'firebase/firestore'

export const registerUser = async (data: RegisterFormData) => {
    const result = schema.safeParse(data)

    if (!result.success) {
        return {success: false, error: "Dados inválidos"}
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
        const user = userCredential.user

        await setDoc(doc(db, "users",user.uid), {
            name: data.name,
            address: data.address,
            reference: data.referenceAddress,
            phoneNumber: data.phoneNumber,
            cpf: data.cpf,
            createdAt: serverTimestamp(),
            role: "user"
        })

        return {success: true}
    } catch (error: any) {
        return { success: false, error: error.message}
    }    
}
