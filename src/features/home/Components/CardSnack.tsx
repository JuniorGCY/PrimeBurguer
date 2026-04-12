"use client"

import { useState, useEffect} from "react";
import Image from "next/image";

//Service para buscar os hamburgueres
import { getBurguers } from "../services/burguerService";

//Interface Typescript para tipagem
import { BurguerData } from "../types/BurguerData";

import { useCartStore } from "@/features/cart/store/useCartStore";

export default function CardSnack() {
    const [burguers, setBurguers] = useState<BurguerData[]>([])
    const [loading, setLoading] = useState(true)
    const addToCart = useCartStore((state) => state.addToCart)

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBurguers()
                setBurguers(data)
            } catch (error) {
                console.log("Erro: ", error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    if (loading) return <p>Carregando cardápio...</p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-4">

            {burguers.map((burguer) => (
        <div key={burguer.id} className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="relative w-full sm:w-48 lg:w-64 aspect-video sm:aspect-square shrink-0 overflow-hidden rounded-2xl shadow-md">
            {burguer.image_url && (
                <Image 
                src={burguer.image_url}
                alt={burguer.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 256px"
                />
            )}
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4">
                <div>
                    <h2 className="text-black text-xl font-bold">{burguer.name}</h2>
                    <p className="text-gray-600 text-sm line-clamp-2">{burguer.description}</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <p className="text-red-600 font-bold text-lg">R$: {burguer.price.toFixed(2)}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${burguer.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {burguer.available ? "Disponível" : "Esgotado"}
                        </span>
                    </div>

                    <button 
                        className={`w-full py-2.5 rounded-xl font-semibold transition-all ${
                            burguer.available 
                            ? "bg-red-600 text-white hover:bg-red-700 active:scale-95" 
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!burguer.available}
                        onClick={() => addToCart(burguer)}
                    >
                        {burguer.available ? "Adicionar ao carrinho" : "Indisponível"}
                    </button>
                </div>
            </div>
        </div>
        ))}
        </div>
    )
}