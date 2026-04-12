import { auth,db } from "@/libs/FirebaseConnection"
import { updateDoc, doc,} from "firebase/firestore"
import { ProfileUpdate } from "../types/ProfileUpdate"

export const UpdateService = async (data: ProfileUpdate) => {
    const user = auth.currentUser

    if (!user) throw new Error("Usuário não autenticado");

    const userRef = doc(db, "users", user.uid)

    await updateDoc(userRef, {
        name: data.name,
        email: data.email,
        address: data.address,
        referenceAddress: data.referenceAddress,
        phoneNumber: data.phoneNumber,
        cpf: data.cpf
    })
}