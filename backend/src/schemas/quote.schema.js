import { z } from 'zod';


export const quoteSchema = z.object({
    content: z.string().min(10).max(500),
    author: z.string().min(2).max(50),
    // tags: z.array(z.string().max(20)).max(5),
    // background: z.string().url().optional(),
    // textColor: z.string().regex(/^#[0-9A-F]{6}$/i).default('#FFFFFF'),
    // userId: z.string(),
    isPublic: z.boolean().default(true)
});