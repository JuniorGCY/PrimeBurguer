import { useEffect, useState } from "react"
import { auth, db } from "@/libs/FirebaseConnection"
import { doc, getDoc } from "firebase/firestore"

export const useProfileHook = (reset: any) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser
            if (!user) return

            const userRef = doc(db, "users", user.uid)
            const userSnap = await getDoc(userRef)

            if (userSnap.exists()) {
                const data = userSnap.data()
                
                reset({
                    name: data.name || "",
                    email: data.email || user.email || "",
                    address: data.address || "",
                    referenceAddress: data.referenceAddress || "",
                    phoneNumber: data.phoneNumber || "",
                    cpf: data.cpf || ""
                })
            }
            setIsLoading(false)
        }
        fetchUserData()
    }, [reset])

    return { isLoading }
}