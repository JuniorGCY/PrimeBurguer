import Link from "next/link"
import Image from "next/image"

import lancheimg from '@/assets/exemplo.jpeg'

export default function Home() {
  return (
    <div className="min-h-screen w-full">

      <header className="flex flex-row px-3 py-3 items-center justify-center border-b border-[#ccc]">
        <h1 className="text-black text-2xl">Prime <span className="text-red-600">Burguer</span></h1>
      </header>

      <main className="flex flex-col gap-5 items-center justify-center mt-4 px-3">
        <h2 className="text-black text-center  sm:text-2xl">Os <a href="#motivos">Melhores</a> lanches artesenais <br></br>da região fica aqui!</h2>

        <h2 className="text-black sm:text-2xl">Nossos lanches mais vendidos</h2>

        <section id="cardapio" className="w-full max-w-full mt-4">
          <div className="flex flex-row gap-4 overflow-x-auto pb-4 hide-scrollbar w-full px-4 sm:items-center sm:justify-center">
              <div className="relative w-40 h-40 shrink-0">
                <Image 
                  src={lancheimg}
                  alt="lanches exemplos"
                  fill
                  className="object-cover rounded-2xl shadow-md"
                />
              </div>

              <div className="relative w-40 h-40 shrink-0">
                <Image 
                  src={lancheimg}
                  alt="lanches exemplos"
                  fill
                  className="object-cover rounded-2xl shadow-md"
                />
              </div>

              <div className="relative w-40 h-40 shrink-0">
                <Image 
                  src={lancheimg}
                  alt="lanches exemplos"
                  fill
                  className="object-cover rounded-2xl shadow-md"
                />
              </div>
              
              <div className="relative w-40 h-40 shrink-0">
                <Image 
                  src={lancheimg}
                  alt="lanches exemplos"
                  fill
                  className="object-cover rounded-2xl shadow-md"
                />
              </div>
          </div>
        </section>

        <section id="motivos" className="mt-10">
            <div className="flex flex-col gap-2 mt-3">

              <div>
                <h2 className="text-black sm:text-2xl">Por que a Prime Burguer?</h2>

                <ul>
                  <li className="text-black">Pão Brioche</li>
                  <li className="text-black">100g generosos de carne</li>
                  <li className="text-black">Molho Barbecue</li>
                  <li className="text-black">Sem salsicha, calabresa ou sal exagerado</li>
                  <li className="text-black">Sucos e Vitaminas</li>
                  <li className="text-black">Delivery</li>
                  </ul>
              </div>

            </div>
        </section>

        
      </main>

      <footer className="w-full h-32 relative mt-20">
        <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-black text-lg">Prime <span className="text-red-600">Burguer</span></h3>
        </div>
      </footer>
    </div>
  )
}
