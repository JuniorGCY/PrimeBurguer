import {auth, db} from '../../../libs/FirebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { RegisterFormData } from '../types/RegisterFormData'
import { serverTimestamp } from 'firebase/firestore'

export const registerUser = async (data: RegisterFormData) => {
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
        createdAt: serverTimestamp()
    })
}
