"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("request-failed");
      }

      reset();
    } catch {
      setError("root", {
        message:
          "We couldn't send that just now. Please try again, or call us directly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-destructive text-xs">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-destructive text-xs">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject ? (
          <p id="subject-error" className="text-destructive text-xs">
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="text-destructive text-xs">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {errors.root ? (
        <div className="border-destructive/30 bg-destructive/10 text-destructive flex items-start gap-2 rounded-lg border px-3 py-2.5 text-sm">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {errors.root.message}
        </div>
      ) : null}

      {isSubmitSuccessful && !errors.root ? (
        <div
          role="status"
          className="border-primary/30 bg-primary/10 text-primary flex items-start gap-2 rounded-lg border px-3 py-2.5 text-sm"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Thanks — we&apos;ve got your message and will be in touch shortly.
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className={cn("w-full sm:w-fit")}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
