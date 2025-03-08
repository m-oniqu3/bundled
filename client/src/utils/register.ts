import { z } from "zod";

export const registerFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, "Name should be at least 3 characters"),

  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ message: "Password is required" })
    .min(6, "Password should be at least 6 characters"),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
