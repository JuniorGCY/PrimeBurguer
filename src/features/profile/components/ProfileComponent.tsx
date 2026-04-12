"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { UpdateService } from "../service/UpdateService"

import { useProfileHook } from "../hooks/useProfileHook"

const schema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.email("Email inválido"),
    address: z.string().min(5, "Endereço muito curto"),
    referenceAddress: z.string().min(5, "Complemento muito curto"),
    phoneNumber: z
          .string()
          .min(10, "Telefone muito curto")
          .max(15, "Telefone muito longo")
          .regex(/^[0-9\s]+$/, "Use apenas números e espaços"),
    cpf: z.string().min(10, "CPF inválido!"),
})

type FormData = z.infer<typeof schema>

export default function ProfileComponent() {
    const {register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const {isLoading} = useProfileHook(reset)

    const onSubmit = async (data: FormData) => {
        try {
            await UpdateService(data)
            console.log("Sucesso")
        } catch (error) {
            console.log("vish", error)
        }
    }

    if (isLoading) {
        return <p className="text-center mt-10 text-lg">Carregando sua ficha...</p>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="text-black text-lg">Nome:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="Nome"
                   type="text"
                   {...register("name")}
                />
                {errors.name && <span className="text-red-600">{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="email" className="text-black text-lg">Email:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="Email"
                   type="email"
                   {...register("email")}
                />
                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="address" className="text-black text-lg">Endereço:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="Endereço"
                   type="text"
                   {...register("address")}
                />
                {errors.address && <span className="text-red-600">{errors.address.message}</span>}
            </div>

            <div>
                <label htmlFor="reference" className="text-black text-lg">Referência:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="Referência"
                   type="text"
                   {...register("referenceAddress")}
                />
                {errors.referenceAddress && <span className="text-red-600">{errors.referenceAddress.message}</span>}
            </div>

            <div>
                <label htmlFor="phoneNumber" className="text-black text-lg">Número:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="Número de telefone"
                   type="text"
                   inputMode="numeric"
                   {...register("phoneNumber")}
                />
                {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
            </div>

            <div>
                <label htmlFor="cpf" className="text-black text-lg">CPF:</label>
                <input
                   className="w-full px-4 py-3 border border-black rounded-md placeholder:text-gray-700 text-black caret-gray-700"
                   placeholder="(Apenas números)"
                   type="text"
                   inputMode="numeric"
                   {...register("cpf")}
                />
                {errors.cpf && <span className="text-red-600">{errors.cpf.message}</span>}
            </div>

            <button 
               className="w-full px-4 py-3 bg-red-600 rounded-md  text-white font-bold"
               type="submit"
            >
                Salvar
            </button>
        </form>
    )
}