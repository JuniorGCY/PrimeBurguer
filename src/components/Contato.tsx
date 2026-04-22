import { PhoneCall, MapPin, Clock, } from "lucide-react"

const cards = [
    {icon: MapPin, title: "Cidade", description: "Itacajá-TO"},
    {icon: Clock, title: "Funcionamento", description: "Quin à Ter · 18h às 23h"},
    {icon: PhoneCall, title: "Instagram", description: "@primeburguer"}
    
]

export const Contato = () => {
    return (
        <footer id="footer" className="mt-10 bg-amber-600">

            <div className="text-center mt-3">
                <h1 className="text-white font-bold text-lg">Bateu a fome? Chama a gente!</h1>
                <h2 className="text-white font-bold text-lg">Entre em contato com a gente</h2>
            </div>

            <div className="grid gap-4">
                {cards.map((item) => (
                    <div key={item.title} className="flex flex-row bg-amber-200 px-3 py-3 mt-3 gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-600 flex items-center justify-center mt-3">
                            <item.icon />
                        </div>

                        <div className="flex- flex-col items-center justify-center mt-3">
                            <h2 className="text-gray-400 font-bold">{item.title}</h2>
                            <h2 className="text-white font-bold">{item.description}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </footer>
    )
}