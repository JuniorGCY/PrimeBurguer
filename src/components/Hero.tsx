import Link from "next/link"

export const Hero = () => {
    return (
        <section className="flex flex-col gap-5 mt-20 px-3 tracking-wider">
            <div className="flex flex-col items-center">
                <h1 className="text-white font-bold text-center text-2xl sm:text-3xl">Os melhores</h1>
                <h1 className="text-red-600 font-bold text-center text-2xl sm:text-3xl">Lanches Artesanais</h1>
                <h1 className="text-white font-bold text-center text-2xl sm:text-3xl">da região</h1>
            </div>

            <div className="flex flex-col sm:items-center">
                <p className="text-gray-100 text-sm">Pão brioche, 100g de carne na chapa e molho Barbecue.</p>
                <p className="text-gray-100 text-sm">Sem enrolação, só sabor.</p>
            </div>

            <div className="flex flex-row gap-4 items-center justify-center sm:mx-5">
                <Link 
                   href="/register"
                   className="w-full px-3 py-3 bg-red-600 text-white text-center text-sm font-bold rounded-2xl lg:w-100
                    transition-transform duration-300 ease-in-out hover:scale-90">
                   Faça seu pedido
                </Link>

                <Link
                   href="/"
                   className="w-full px-3 py-3 bg-black text-white text-center text-sm font-bold rounded-2xl lg:w-100
                   transition-transform duration-300 ease-in-out hover:scale-90">
                   Ver Cardápio
                </Link>
            </div>
        </section>
    )
}