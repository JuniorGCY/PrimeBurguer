"use client"

//React Hook Form
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

//Service e Hooks
import { UpdateService } from "../service/UpdateService"
import { useProfileHook} from "../hooks/useProfileHook"

//tipagem
import { ProfileUpdate,schema} from "../types/ProfileUpdate"

export default function ProfileComponent() {
    const {register, handleSubmit, reset, formState: { errors } } = useForm<ProfileUpdate>({
        resolver: zodResolver(schema)
    })

    const {isLoading} = useProfileHook(reset)

    const onSubmit = async (data: ProfileUpdate) => {
        const result = await UpdateService(data)

        if (result?.success) {
            alert("Sucesso!")
        } else {
            alert("Sucesso!")
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
                   className="w-full px-4 py-3 border border-gray-400 rounded-md bg-gray-200 text-gray-600 cursor-not-allowed outline-none"
                   placeholder="(Apenas números)"
                   type="text"
                   inputMode="numeric"
                   readOnly
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