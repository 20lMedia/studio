
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react"; // Added useRef
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null); // 1. Define the ref
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to submit form.",
          variant: "destructive",
          duration: 5000,
        });
        // Populate form fields with previous values if available and there was an error
        if (state.fields) {
          form.setValue("name", state.fields.name || "");
          form.setValue("email", state.fields.email || "");
          form.setValue("phone", state.fields.phone || "");
          form.setValue("subject", state.fields.subject || "");
          form.setValue("message", state.fields.message || "");
        }
        // RHF handles displaying field-specific errors based on schema.
        // state.issues can be used for more general form messages if needed beyond state.message.
      }
    }
  }, [state, toast, form]);

  // 2. Define the onValid handler for RHF's handleSubmit
  const onValidSubmit = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formAction(formData); // Manually call the action with FormData
    }
  };

  return (
    // 3. Use the ref and call handleSubmit with your handler
    //    action prop is removed as formAction is called manually.
    <form
      ref={formRef} // Assign the ref
      onSubmit={form.handleSubmit(onValidSubmit)} // RHF validates, then calls onValidSubmit
      className="space-y-6"
    >
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...form.register("name")} placeholder="Your Name" />
        {form.formState.errors.name && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...form.register("email")} placeholder="your@email.com" />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" type="tel" {...form.register("phone")} placeholder="(123) 456-7890" />
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" {...form.register("subject")} placeholder="Inquiry about..." />
        {form.formState.errors.subject && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...form.register("message")} placeholder="Your detailed message..." rows={5} />
        {form.formState.errors.message && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
