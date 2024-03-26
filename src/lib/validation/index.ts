import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, {message: 'Please enter a valid name.'}),
  username: z.string().min(2, { message: 'Username must be between 3 and 20 characters long.' }),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be at least 8 characters long.'}),
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be at least 8 characters long.'}),
})

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
})