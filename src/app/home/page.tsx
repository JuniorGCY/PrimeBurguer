"use client"

import { useRouter } from "next/navigation"
import { LogoutService } from "@/features/auth/services/LogoutService"

export default function Home() {
    const router = useRouter()

    const handleSignOut = async () => {
        try {
            await LogoutService()
            router.push("/login")
        } catch (error) {
            console.log("Vish")
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-lg text-black">Tela home</h1>
            <button
            className="bg-black text-white px-4 py-4"
            onClick={handleSignOut}
            >
                Deslogar
            </button>
        </div>
    )
}