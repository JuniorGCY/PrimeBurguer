"use client"

import { useRouter } from "next/navigation"
import { LogoutService } from "@/features/auth/services/LogoutService"

//icons
import { ShoppingCart, User, LogOut } from "lucide-react"

//Card para mostrar os hamburgueres
import CardSnack from "@/features/home/Components/CardSnack"

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
        <div className="flex flex-col items-center min-h-screen">
            <nav className="w-full flex flex-row px-3 py-3 border-b border-[#ccc] items-center justify-between">
                <div>
                    <h1 className="text-black text-lg">Prime <span className="text-red-600">Burguer</span></h1>
                </div>

                <div className="flex flex-row gap-6">
                    <ShoppingCart size={24} className="text-red-600"/>
                    <button className=" hover:bg-gray-100 rounded-full transition-colors group" onClick={handleSignOut}>
                        <LogOut size={24} className="text-red-600"/>
                    </button>
                </div>
            </nav>

            <div className="m-2">
                <CardSnack />
            </div>
        </div>
    )
}