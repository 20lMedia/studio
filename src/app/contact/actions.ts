
"use server";

import { z } from "zod";
import { companyInfo } from "@/lib/data";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For example:
  // await sendEmail({
  //   to: companyInfo.email,
  //   subject: `New Inquiry: ${parsed.data.subject}`,
  //   html: `
  //     <p>Name: ${parsed.data.name}</p>
  //     <p>Email: ${parsed.data.email}</p>
  //     <p>Phone: ${parsed.data.phone || 'N/A'}</p>
  //     <p>Message: ${parsed.data.message}</p>
  //   `
  // });

  console.log("Form submitted successfully:", parsed.data);

  return {
    message: "Thank you for your inquiry! We will get back to you soon.",
    success: true,
  };
}
