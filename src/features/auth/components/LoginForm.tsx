"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { loginService } from "../services/loginService"
import { useRouter } from "next/navigation"
import Link from "next/link"

const schema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "senha muito curta!")
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
    const {register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter()

    const onSubmit = async (data: FormData) => {
        try {
            await loginService(data)
            router.push("/home")
        } catch (error) {
            console.log("Erro: ", error)
            alert("E-mail ou senha incorretos. Tente novamente!")
            throw error
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
                <label 
                className="text-black text-lg"
                htmlFor="email"
                >
                    E-mail:
                </label>
                <input
                className="
                    w-full px-4 py-2 rounded-md border border-black placeholder:text-gray-700 text-black caret-gray-700"
                {...register("email")}
                placeholder="seu@email.com"
                required
                type="email"
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            </div>

            <div className="my-4">
                <label
                className="text-black text-lg"
                htmlFor="password"
                >
                    Senha:
                </label>
                <input 
                className="
                    w-full px-4 py-2 rounded-md border border-black placeholder:text-gray-700 text-black caret-gray-700"
                {...register("password")}
                placeholder="Sua senha criada no Cadastro"
                required
                type="password"
                />
                {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
            </div>

            <div>
                <button
                    className="w-full bg-red-600 border px-4 py-3  rounded-md mt-5  text-white font-bold"
                    type="submit"
                >
                    Entrar
                </button>
            </div>

            <div className="flex flex-row mt-4">
                <h1 className="text-black">Não tem uma conta?</h1>
                <h1 className="text-red-600 mx-2"><Link href="/register">Crie uma agora</Link></h1>
            </div>
        </form>
    )
}