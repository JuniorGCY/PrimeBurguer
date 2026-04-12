"use client"

import { useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import { LogoutService } from "@/features/auth/services/LogoutService"
import { useCartStore } from "@/features/cart/store/useCartStore"

//icons
import { ShoppingCart, User, LogOut, CircleUser} from "lucide-react"

//Card para mostrar os hamburgueres
import CardSnack from "@/features/home/Components/CardSnack"

export default function Home() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false);
    const total = useCartStore((state) => state.totalItems())

    useEffect(() => {
       setIsClient(true);
    }, []);

    if (!isClient) return null;

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
                    <button onClick={() => router.push('/profile')}>
                        <CircleUser size={24} className="text-red-600"/>
                    </button>

                    <button className=" hover:bg-gray-100 rounded-full transition-colors group" onClick={() => router.push("/cart")}>
                        <ShoppingCart size={24} className="text-red-600"/>
                        {total > 0 && (
                            <span className=" bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                               {total}
                            </span>
                        )}
                    </button>
                        
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