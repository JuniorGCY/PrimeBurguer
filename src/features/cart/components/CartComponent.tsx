"use client"

import { useCartStore } from "../store/useCartStore"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

export const CartComponent = () => {
    const {cart, removeFromCart, addToCart, decreaseToCart, totalPrice} = useCartStore()

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1 className="text-2xl font-bold">Sua sacola está vazia</h1>
                <Link href="/home" className="bg-red-600 text-white px-6 py-2 rounded-md">
                   Ver cardápio
                </Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                    <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                        <Image 
                          src={item.image_url} 
                          alt={item.name}
                          fill
                          className="object-cover" />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-black font-bold text-lg">
                            {item.name}
                        </h2>
                        <p className="text-red-600 font-semibold">
                            R$ {item.price.toFixed(2)}
                        </p>

                        <div className="flex flex-row">
                            <button className="mx-1" onClick={() => decreaseToCart(item)}>
                                <Minus size={20} className="text-red-600"/>
                            </button>

                            <span className="text-sm text-gray-500 mx-1">
                               Qtd: {item.quantity}
                            </span>

                            <button className="mx-1" onClick={() => addToCart(item)}>
                                <Plus size={20} className="text-red-600"/>
                            </button>
                        </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 size={20}/>
                    </button>

                </div>
            ))}
        </div>
    )
}