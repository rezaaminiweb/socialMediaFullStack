import {z} from "zod"
const requiredStrings = z.string().trim().min(1,'Required')
export const signUpSchema = z.object({
    email:requiredStrings.email('Invalid email address'),
    username:requiredStrings.regex(/^[a-zA-Z0-9_-]+$/,"Only Letters , Numbers , - and _ allows"),
    password:requiredStrings.min(8,"Must be at least 8 characters")
})
export const loginSchema = z.object({
    username:requiredStrings,
    password:requiredStrings,
})
export type SignUpValues = z.infer<typeof loginSchema>