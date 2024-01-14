import { z } from 'zod'

const UserJobSchema = z.object({
    company: z.string(),
    title: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    responsibilities: z.string(),
})

const UpdateJobSchema = UserJobSchema.extend({
    id: z.number(),
})

const UpdateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    profession: z.string().optional(),
    location: z.string().optional(),
    phoneNumber: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
    languages: z.array(z.string()).optional(),
    libraries: z.array(z.string()).optional(),
    frameworks: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
})

const AuthSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export { UserJobSchema, UpdateJobSchema, UpdateUserSchema, AuthSchema }
