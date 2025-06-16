
"use server";

import { z } from "zod";
import { services } from '@/lib/data';

const serviceIds = services.map(service => service.id);

const globalCtaFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }).optional().or(z.literal('')),
  emailAddress: z.string().email({ message: "Invalid email address." }),
  serviceRequired: z.enum([serviceIds[0], ...serviceIds.slice(1)], { errorMap: () => ({ message: "Please select a service."}) }),
  projectDetails: z.string().min(10, { message: "Project details must be at least 10 characters." }),
});

export type GlobalCtaFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitGlobalCtaForm(
  prevState: GlobalCtaFormState,
  data: FormData
): Promise<GlobalCtaFormState> {
  const formData = Object.fromEntries(data);
  const parsed = globalCtaFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    });
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For example, using a service like SendGrid or saving to Firestore.
  console.log("Global CTA Form submitted successfully:", parsed.data);

  // Example:
  // await sendEmail({
  //   to: "srilakshmiinteriors1@gmail.com",
  //   subject: `New Project Inquiry: ${parsed.data.serviceRequired}`,
  //   html: `
  //     <p>Name: ${parsed.data.fullName}</p>
  //     <p>Email: ${parsed.data.emailAddress}</p>
  //     <p>Phone: ${parsed.data.phoneNumber || 'N/A'}</p>
  //     <p>Service Required: ${services.find(s => s.id === parsed.data.serviceRequired)?.title || parsed.data.serviceRequired}</p>
  //     <p>Project Details: ${parsed.data.projectDetails}</p>
  //   `
  // });

  return {
    message: "Thank you for your inquiry! We will get back to you soon to discuss your project.",
    success: true,
  };
}
