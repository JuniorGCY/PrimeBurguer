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
                <h1 className="text-black font-bold text-2xl">Cardápio</h1>
                <h2 className="text-black font-bold text-2xl">Nossos lanches mais</h2>
                <span className="text-red-600 font-bold text-2xl ">vendidos</span>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3'>
                {lanches.map((item) => (
                    <div key={item.id} className='rounded-2xl overflow-hidden border border-black'>
                        <div className="relative aspect-square overflow-hidden bg-muted">
                            <Image 
                            src={item.img}
                            alt={item.name}
                            width={120}
                            height={120}
                            loading='lazy'
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className='flex flex-col text-start px-3 py-3'>
                            <h2 className='text-black font-bold text-lg'>{item.name}</h2>
                            <p className='text-gray-800 font-bold text-lg'>{item.description}</p>
                            <p className='text-red-600 font-bold text-lg mt-3'>{item.price}</p>
                        </div>
                    </div>
                    
                ))}
            </div>


        </section>
    )
}