import { z } from 'zod';


export const quoteSchema = z.object({
    content: z.string().min(1).max(500),
    author: z.string().min(2).max(50),
    userId: z.any(),
    savedBy: z.array(z.any()).optional().default([]),
    isPublic: z.boolean().default(true)
});