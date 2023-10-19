import z from 'zod'

const ipSchema = z.object({
    ip: z.string().ip(),
})

export const validateSchema = (data) => {
    return ipSchema.safeParse(data)
}