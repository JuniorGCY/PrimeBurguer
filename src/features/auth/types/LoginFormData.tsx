import * as z from 'zod'

export const schema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "senha muito curta!")
})

export type LoginFormData = z.infer<typeof schema>