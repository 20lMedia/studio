
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
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
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base rounded-md">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
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
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to submit form.",
          variant: "destructive",
          duration: 5000,
        });
        if (state.fields) {
          form.setValue("name", state.fields.name || "");
          form.setValue("email", state.fields.email || "");
          form.setValue("phone", state.fields.phone || "");
          form.setValue("subject", state.fields.subject || "");
          form.setValue("message", state.fields.message || "");
        }
      }
    }
  }, [state, toast, form]);

  const onValidSubmit = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formAction(formData);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={form.handleSubmit(onValidSubmit)}
      className="space-y-6 md:space-y-7"
    >
      <div>
        <Label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/90">Full Name</Label>
        <Input id="name" {...form.register("name")} placeholder="Your Name" className="py-3 px-4" />
        {form.formState.errors.name && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/90">Email Address</Label>
        <Input id="email" type="email" {...form.register("email")} placeholder="your@email.com" className="py-3 px-4" />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground/90">Phone Number (Optional)</Label>
        <Input id="phone" type="tel" {...form.register("phone")} placeholder="(123) 456-7890" className="py-3 px-4" />
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground/90">Subject</Label>
        <Input id="subject" {...form.register("subject")} placeholder="Inquiry about..." className="py-3 px-4" />
        {form.formState.errors.subject && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/90">Message</Label>
        <Textarea id="message" {...form.register("message")} placeholder="Your detailed message..." rows={5} className="py-3 px-4" />
        {form.formState.errors.message && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.message.message}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
