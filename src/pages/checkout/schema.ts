import { z } from 'zod'

export const schema = z.object({
  zip: z.number(),
  address: z.string().min(1),
  number: z.number(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  complement: z.string().optional(),
  payment: z.string().min(1),
  cartItems: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tags: z.array(z.string()),
        image: z.string(),
        amount: z.number(),
      }),
    )
    .min(1),
})

export type CheckoutData = z.infer<typeof schema>
