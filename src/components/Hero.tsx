export const Hero = () => {
    return (
        <section className="flex flex-col gap-5 mt-20 px-3">
            <div className="flex flex-col items-center">
                <h1 className="text-black font-bold text-center text-2xl sm:text-3xl">Os melhores</h1>
                <span className="text-red-600 font-bold text-center text-2xl sm:text-3xl">Lanches Artesanais</span>
                <h1 className="text-black font-bold text-center text-2xl sm:text-3xl">da região</h1>
            </div>

            <div>
                <p className="text-gray-800">Pão brioche, 100g de carne na chapa e molho Barbecue</p>
                <p className="text-gray-800">Sem enrolação, só sabor</p>
            </div>

            <div className="flex flex-row gap-4">
                <button
                   className="w-full px-3 py-3 bg-red-600 text-white font-bold rounded-2xl">
                    Faça seu pedido
                </button>

                <button
                   className="w-full px-3 py-3 bg-black text-white font-bold rounded-2xl opacity-90">
                    Ver Cardápio
                </button>
            </div>
        </section>
    )
}