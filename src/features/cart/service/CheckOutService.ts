import { useCartStore } from "../store/useCartStore"
import { getAuth } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const handleCheckOut = async () => {
    const { cart } = useCartStore.getState()
    const user = getAuth().currentUser
    const db = getFirestore()

    if (!user) return alert("Logue para comprar")

    const userRef = doc(db,"users", user.uid)
    const userSnap = await getDoc(userRef)
    const userData = userSnap.data()

    const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cartItems: cart,
            customer: {
                name: userData?.name || "Sem nome",
                email: user?.email || "sem-email@gmai.com",
                cellphone: userData?.phoneNumber || "11999999999",
                taxId: userData?.cpf || ""
            },
            address: userData?.address,
            reference: userData?.reference
        }),
    })

    console.log("Usuario: ", userData?.name)
    console.log("Email: ", user.email)
    console.log("Cellphone: ", userData?.phoneNumber)
    console.log("taxId: ", userData?.cpf)

    const { url } = await res.json()

    if (url) {
        window.location.href = url
    } 
}