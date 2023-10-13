import { z } from 'zod'

export const coffeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  image: z.string(),
  amount: z.number(),
})

export type Coffee = z.infer<typeof coffeeSchema>
