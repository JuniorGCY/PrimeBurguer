"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../services/registerService";
import { RegisterFormData, schema } from "../types/RegisterFormData";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const {register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(schema)
    })
    
    const router = useRouter()

    const onSubmit = async (data: RegisterFormData) => {
        const result = await registerUser(data)

        if (result.success) {
            alert("sucesso")
            router.push("/login")
        } else {
            alert("Algo deu errado")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 my-3">
                <label 
                   className="text-white text-lg"
                   htmlFor="name"
                >
                    Nome
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                   {...register("name")}
                   placeholder="Digite seu Nome"
                   required
                   type="text"
                   autoComplete="name"
                />
                {errors.name && <span className="text-red-600">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="email"
                >
                    E-mail
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("email")}
                   placeholder="seu@email.com"
                   required
                   type="email"
                   autoComplete="email"
                />
                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="password"
                >
                    Senha
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("password")}
                   placeholder="Uma senha memorável"
                   required
                   type="password"
                />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="address"
                >
                    Endereço
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("address")}
                   placeholder="Digite seu endereço completo"
                   required
                   type="text"
                   autoComplete="street-address"
                />
                {errors.address && <span className="text-red-600">{errors.address.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="reference"
                >
                    Referência
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("referenceAddress")}
                   placeholder="Um ponto de referência"
                   required
                   type="text"
                />
                {errors.referenceAddress && <span className="text-red-600">{errors.referenceAddress.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="phoneNumber"
                >
                    Número de telefone
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("phoneNumber")}
                   placeholder="Ex: 63 999999999"
                   required
                   type="text"
                   inputMode="numeric"
                />
                {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
            </div>

            <div className="flex flex-col gap-2 my-3">
                <label
                   className="text-white text-lg"
                   htmlFor="cpf"
                >
                    CPF
                </label>
                <input 
                   className="
                    w-full px-4 py-3 border border-white rounded-md placeholder:text-gray-100 text-white caret-gray-700"
                    {...register("cpf")}
                   placeholder="Ex: 123.456.789-00 ou 12345678900"
                   required
                   type="text"
                   inputMode="numeric"
                />
                {errors.cpf && <span className="text-red-600">{errors.cpf.message}</span>}
            </div>

            <div className="mt-6">
                <button
                   className="w-full px-4 py-3 bg-red-600 rounded-md  text-white font-bold"
                   type="submit"
                >
                    Cadastrar
                </button>
            </div>

            <div className="flex flex-row mt-6">
                <h1 className="text-white text-sm">Já tem uma conta?</h1>
                <h1 className="text-red-600 mx-2 text-sm font-bold"><Link href="/login">Clique aqui</Link></h1>
            </div>
        </form>
    )
}