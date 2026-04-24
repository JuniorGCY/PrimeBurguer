import lancheImg from '@/assets/burger-1.jpg'
import Image from 'next/image'

const lanches = [
    {id: 1, img: lancheImg, name: "X-Burguer", description: "O mais barato da Casa!", price: "R$ 12,00"},
    {id: 2, img: lancheImg, name: "X-Bacon", description: "Prove o Bacon mais gostoso", price: "R$ 18,00"},
    {id: 3, img: lancheImg, name: "X-Cheddar", description: "Saboroso cheddar para derreter na boca", price: "R$ 22,00"},
]

export const Cardapio = () =>  {
    return (
        <section id="cardapio" className="mt-10">
            <div className="text-center">
                <h2 className="text-white font-bold text-2xl">Nossos lanches mais</h2>
                <h2 className="text-red-600 font-bold text-2xl">vendidos</h2>
            </div>

            <div className='grid grid-cols-1 gap-6 px-3 mt-5 mx-5 sm:grid-cols-3 lg:grid-cols-4'>
                {lanches.map((item) => (
                    <div key={item.id} className='bg-[#1e1e1e] rounded-2xl overflow-hidden border-spacing-0.5'>

                        <div className="relative w-full h-56 overflow-hidden bg-zinc-900">
                            <Image 
                            src={item.img}
                            alt={item.name}
                            fill
                            loading='lazy'
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className='flex flex-col text-start px-3 py-3'>
                            <h2 className='text-white font-bold text-lg'>{item.name}</h2>
                            <p className='text-gray-300  text-sm'>{item.description}</p>
                            <p className='text-red-600 font-bold text-lg mt-3'>{item.price}</p>
                        </div>

                    </div>
                    
                ))}
            </div>


        </section>
    )
}