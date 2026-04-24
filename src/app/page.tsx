//Componentes
import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { Cardapio } from "@/components/Cardapio"
import { Motivos } from "@/components/Motivos"
import { Contato } from "@/components/Contato"
import { FooterComponent } from "@/components/FooterComponent"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#121212] font-sans antialiased">

      <header className="bg-[#1e1e1e] py-3">
        <NavBar />
        <Hero />
      </header>

      <main>
        <Cardapio />
        <Motivos />
      </main>

      <footer>
        <Contato />
        <FooterComponent />
      </footer>
    </div>
  )
}
