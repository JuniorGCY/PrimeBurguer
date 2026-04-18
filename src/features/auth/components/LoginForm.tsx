"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormData, schema } from "../types/LoginFormData"
import { loginService } from "../services/loginService"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginForm() {
    const {register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter()

    const onSubmit = async (data: LoginFormData) => {
        const result = await loginService(data)

        if (result.sucess) {
            alert("sucesso")
            router.replace("/home")
        } else {
            alert("Algo deu errado")
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