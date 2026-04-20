import * as z from 'zod'

export const schema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "Senha muito curta!"),
    address: z.string().min(5, "Endereço muito curto"),
    referenceAddress: z.string().min(5, "Complemento muito curto"),
    phoneNumber: z
        .string()
        .transform((val) => val.replace(/\D/g, "")) 
        .refine((val) => val.length >= 10 && val.length <= 11, {
            message: "Telefone deve ter 10 ou 11 dígitos numéricos",
        }),
    cpf: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => val.length === 11, {
            message: "O CPF deve ter exatamente 11 dígitos",
        }),
})

export type RegisterFormData = z.infer<typeof schema>