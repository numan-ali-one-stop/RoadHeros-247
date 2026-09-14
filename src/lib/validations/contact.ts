import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(100, "Name is too long"),
  email: z.string().trim().min(1, "Enter your email").email("Enter a valid email address"),
  subject: z
    .string()
    .trim()
    .min(3, "Give us a short subject")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
