import { z } from 'zod'

const envSchemma = z.object({
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    USER_ROOT: z.string()
})

export const env = envSchemma.parse(process.env)