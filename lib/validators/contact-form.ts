import { ZodType, z } from "zod";

type ContactFormSchema = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  eventDate?: string;
  eventLocation?: string;
  speakerBudget?: string;
  eventDescription?: string;
};

export const contactFormSchema: ZodType<ContactFormSchema> = z.object({
  firstName: z
    .string()
    .nonempty({
      message: "First name is required",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name must contain only letters",
    }),
  lastName: z
    .string()
    .nonempty({
      message: "Last name is required",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name must contain only letters",
    }),
  email: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  phoneNumber: z
    .string()
    .nonempty({
      message: "Phone number is required",
    })
    .regex(/^[0-9]+$/, {
      message: "Phone number must contain only numbers",
    })
    .min(10, {
      message:
        "The phone number you entered is less than 10 digits. Please enter a 10 digit phone number",
    })
    .max(10, {
      message:
        "The phone number you entered is more than 10 digits. Please enter a 10 digit phone number",
    }),
  companyName: z.string().optional(),
  eventDate: z.string().optional(),
  eventLocation: z.string().optional(),
  speakerBudget: z.string().optional(),
  eventDescription: z.string().optional(),
});
