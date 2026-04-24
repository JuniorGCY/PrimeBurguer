import { PhoneCall, MapPin, Clock, } from "lucide-react"

const cards = [
    {icon: MapPin, title: "Cidade", description: "Itacajá-TO"},
    {icon: Clock, title: "Funcionamento", description: "Quin à Ter · 18h às 23h"},
    {icon: PhoneCall, title: "Instagram", description: "@primeburguer"}
    
]

export const Contato = () => {
    return (
        <footer id="footer" className="mt-10 bg-[#1e1e1e] py-3">

            <div className="text-center my-3">
                <h1 className="text-white font-bold text-2xl">Bateu a fome? <br></br>Chama a gente!</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                {cards.map((item) => (
                    <div key={item.title} className="flex flex-row px-3 py-3 mx-3 gap-4  border rounded-2xl">
                        <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center mt-3">
                            <item.icon />
                        </div>

                        <div className="flex- flex-col mt-3">
                            <h2 className="text-gray-400 font-bold">{item.title}</h2>
                            <h2 className="text-white font-bold">{item.description}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </footer>
    )
}