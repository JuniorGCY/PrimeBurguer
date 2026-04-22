import Link from "next/link"
import Image from "next/image"

import lancheimg from '@/assets/exemplo.jpeg'

//Componentes
import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { Cardapio } from "@/components/Cardapio"
import { Motivos } from "@/components/Motivos"
import { Contato } from "@/components/Contato"
import { FooterComponent } from "@/components/FooterComponent"

export default function Home() {
  return (
    <div className="min-h-screen w-full">

      <NavBar />
      <Hero />
      <Cardapio />
      <Motivos />
      <Contato />
      <FooterComponent />
    </div>
  )
}
