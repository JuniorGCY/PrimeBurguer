import * as z from 'zod'

export const schema = z.object({
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

export type ProfileUpdate = z.infer<typeof schema>