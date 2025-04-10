import { z } from 'zod';

export const signupSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters")
        .max(30, "Username must be less than 30 characters")
        .trim(),
    email: z.string()
        .email("Invalid email address")
        .toLowerCase()
        .trim(),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, 
            "Password must contain at least one letter and one number")
});

export const loginSchema = z.object({
    email: z.string()
        .email("Invalid email address")
        .toLowerCase()
        .trim(),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
});