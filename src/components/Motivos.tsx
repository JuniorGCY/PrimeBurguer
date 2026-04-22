import { Hamburger, Beef, Droplet, GlassWater, Motorbike} from "lucide-react"

const reasons = [
    {icon: Hamburger, title: "PÃO BRIOCHE", description: "Macio, dourado e gostoso"},
    {icon: Beef, title: "100g DE CARNE", description: "Carne suculenta, apenas aqui"},
    {icon: Droplet, title: "MOLHO BARBECUE", description: "Receita da casa"},
    {icon: Hamburger, title: "100% ARTESENAL", description: "Sem salsicha, sem calabresa, sem gosto de sal na boca"},
    {icon: GlassWater, title: "Suco & Vitaminas", description: "Naturais, da fruta direto pro copo"},
    {icon: Motorbike, title: "DELIVERY", description: "Quentinho na sua casa."}
]

export const Motivos = () => {
    return (
        <section id="reasons" className="px-3 py-3 mt-10">
            <h1 className="text-black font-bold text-2xl text-center">Por que a Prime <span className="text-red-600">Burguer</span>?</h1>

            <div className="grid-cols-2 gap-4">
                {reasons.map((item) => (
                    <div key={item.title} className="bg-amber-900 rounded-2xl px-3 py-3 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center mt-3">
                            <item.icon className="w-6 h-6"/>
                        </div>

                        <div className="mt-3">
                            <h2 className="text-white font-bold">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}