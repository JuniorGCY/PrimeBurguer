"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { CartComponent } from "@/features/cart/components/CartComponent"
import { useCartStore } from "@/features/cart/store/useCartStore"

//Checkout
import { handleCheckOut } from "@/features/cart/service/CheckOutService"

export default function Cart() {
    const router = useRouter()
    const { totalPrice } = useCartStore()

    return (
        <div className="w-full min-h-screen">
            <nav className="w-full flex px-3 py-3 border-b border-[#ccc] items-center justify-items-start">
                <div className="flex flex-row gap-4">
                    <button onClick={() => router.back()}>
                        <X size={28} className="text-red-600"/>
                    </button>
                    
                    <h1 className="text-black text-lg ">Seu pedido</h1>
                </div>
            </nav>

            <main className="px-3 py-3 pb-40">
                <CartComponent />
            </main>

            <footer className="fixed bottom-0 left-0 right-0">
                <div className=" bg-white border px-3 py-3">
                    <div className="flex flex-row sm:flex-col justify-between text-xl font-bold">
                        <span className="text-black">Total: </span>
                        <span className="text-green-700">R$ {totalPrice().toFixed(2)}</span>
                    </div>

                    <button 
                       className="
                          w-full sm:w-2xs bg-red-600 text-white py-4 rounded-xl mt-6 font-bold text-lg
                           hover:bg-red-700 transition-all"
                        onClick={handleCheckOut}>
                        Finalizar Pedido
                    </button>
                </div>
            </footer>
            
        </div>
    )
}