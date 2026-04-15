"use client"

import ProfileComponent from "@/features/profile/components/ProfileComponent"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export default function Profile() {
    const router = useRouter()

    return (
        <div className="w-full min-h-screen">
            <header className="w-full px-3 py-3 border-b border-[#ccc]">
                <div className="flex">
                    <button onClick={() => router.back()}>
                        <X size={20} className="text-red-600"/>
                    </button>
                   <h1 className="text-2xl text-red-600">Perfil</h1>
                </div>
            </header>

            <main className="px-3 py-3">
                <ProfileComponent />
            </main>
        </div>
    )
}