"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, Home, Receipt } from "lucide-react"
import { useCartStore } from "@/features/cart/store/useCartStore"

export default function OrderSuccess() {
    const router = useRouter()
    const { clearCart } = useCartStore()

    useEffect(() => {
        if (clearCart) {
            clearCart()
        }
    }, [clearCart])

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

            <div className="bg-green-100 p-4 rounded-full mb-6 animate-bounce">
                <CheckCircle2 size={64} className="text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Pagamento Aprovado!
            </h1>
            <p className="text-gray-600 text-center mb-8 max-w-md">
                O seu PIX já caiu na nossa conta e o chapeiro já está preparando o seu lanche.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-md shadow-sm mb-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                    <Receipt className="text-gray-400" />
                    <div>
                        <p className="text-sm text-gray-500">Status do Pedido</p>
                        <p className="font-semibold text-orange-600">Na Cozinha 🍔</p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Tempo estimado:</span>
                    <span className="font-medium text-gray-900">10 - 20 min</span>
                </div>
            </div>

            <button 
                onClick={() => router.replace('/home')}
                className="w-full max-w-md bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
            >
                <Home size={20} />
                Voltar para o Início
            </button>

        </div>
    )
}