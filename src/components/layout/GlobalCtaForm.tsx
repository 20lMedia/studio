
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitGlobalCtaForm, type GlobalCtaFormState } from "@/app/actions/globalCtaActions";
import { zodServiceEnumValues } from '@/lib/data'; // Import new enum values

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from "lucide-react";

interface GlobalCtaFormProps {
  availableServices: Array<{ id: string; title: string; }>; // Updated type
}

const globalCtaFormSchemaClient = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }).optional().or(z.literal('')),
  emailAddress: z.string().email({ message: "Invalid email address." }),
  serviceRequired: z.enum(zodServiceEnumValues, { errorMap: () => ({ message: "Please select a service."}) }), // Use imported enum values
  projectDetails: z.string().min(10, { message: "Project details must be at least 10 characters." }),
});

type GlobalCtaFormData = z.infer<typeof globalCtaFormSchemaClient>;

const initialState: GlobalCtaFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-foreground hover:bg-foreground/80 text-background py-3 text-base rounded-md shadow-md"
      size="lg"
    >
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Send Message"}
      {!pending && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
}

export function GlobalCtaForm({ availableServices }: GlobalCtaFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitGlobalCtaForm, initialState);
  const { toast } = useToast();

  const form = useForm<GlobalCtaFormData>({
    resolver: zodResolver(globalCtaFormSchemaClient),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      serviceRequired: undefined,
      projectDetails: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to submit form. Please check the fields.",
          variant: "destructive",
          duration: 6000,
        });
        if (state.fields) {
          form.setValue("fullName", state.fields.fullName || "");
          form.setValue("phoneNumber", state.fields.phoneNumber || "");
          form.setValue("emailAddress", state.fields.emailAddress || "");
          form.setValue("serviceRequired", state.fields.serviceRequired as any || undefined);
          form.setValue("projectDetails", state.fields.projectDetails || "");
        }
         // Set errors for react-hook-form to display
         if (state.issues) {
          const fieldErrors = globalCtaFormSchemaClient.safeParse(state.fields || {});
          if (!fieldErrors.success) {
            fieldErrors.error.issues.forEach(issue => {
              form.setError(issue.path[0] as keyof GlobalCtaFormData, { type: 'manual', message: issue.message });
            });
          }
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
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="mb-2 block text-sm font-medium text-foreground/90">Full Name</Label>
          <Input id="fullName" {...form.register("fullName")} placeholder="Enter your name" className="py-3 px-4" />
          {form.formState.errors.fullName && (
            <p className="text-sm text-destructive mt-1.5">{form.formState.errors.fullName.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-foreground/90">Phone Number</Label>
          <Input id="phoneNumber" type="tel" {...form.register("phoneNumber")} placeholder="Enter your phone" className="py-3 px-4" />
          {form.formState.errors.phoneNumber && (
            <p className="text-sm text-destructive mt-1.5">{form.formState.errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="emailAddress" className="mb-2 block text-sm font-medium text-foreground/90">Email Address</Label>
        <Input id="emailAddress" type="email" {...form.register("emailAddress")} placeholder="Enter your email" className="py-3 px-4" />
        {form.formState.errors.emailAddress && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.emailAddress.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="serviceRequired" className="mb-2 block text-sm font-medium text-foreground/90">Service Required</Label>
        <Select name="serviceRequired" onValueChange={(value) => form.setValue("serviceRequired", value as any, { shouldValidate: true })} value={form.watch("serviceRequired")}>
          <SelectTrigger className="py-3 px-4 w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {availableServices.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.serviceRequired && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.serviceRequired.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-foreground/90">Project Details</Label>
        <Textarea id="projectDetails" {...form.register("projectDetails")} placeholder="Tell us about your project requirements, budget, timeline..." rows={5} className="py-3 px-4" />
        {form.formState.errors.projectDetails && (
          <p className="text-sm text-destructive mt-1.5">{form.formState.errors.projectDetails.message}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}

// Removed: import { services } from '@/lib/data';
