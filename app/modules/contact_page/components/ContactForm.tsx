"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/lib/validators/contact-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      eventDate: "",
      eventLocation: "",
      speakerBudget: "",
      eventDescription: "",
    },
  });

  const { toast } = useToast();

  function showToast() {
    toast({
      variant: "error",
      title: "Uh oh! Something went wrong.",
      description:
        "There was a problem sending your message. Please try again.",
    });
  }

  function formatDate(date: Date) {
    const eventDate = new Date(date);
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const [{ value: month }, , { value: day }, , { value: year }] =
      dateFormatter.formatToParts(eventDate);
    return `${month} ${+day + 1}, ${year}`;
  }

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const contactFormValues = {
      ...values,
      eventDate: values.eventDate ? formatDate(new Date(values.eventDate)) : "",
    };

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormValues),
      });
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "I'll be in touch soon!",
      });
      setIsSubmitting(false);
    } catch (error) {
      toast({
        variant: "error",
        title: "Uh oh! Something went wrong.",
        description:
          "There was a problem sending your message. Please try again.",
      });
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col items-center justify-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full text-left text-white">
                <FormLabel className="ml-1 text-sm font-light">
                  First Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full text-left text-white">
                <FormLabel className="ml-1 text-sm font-light">
                  Last Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage className="ml-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Phone Number<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage className="ml-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Company Name
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Event Date
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventLocation"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Event Location
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="speakerBudget"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                Estimated Speaker Budget
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage className="ml-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDescription"
          render={({ field }) => (
            <FormItem className="w-full text-left text-white">
              <FormLabel className="ml-1 text-sm font-light">
                {"Tell me about your event and audience"}
              </FormLabel>
              <FormControl>
                <Textarea disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full pt-3">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="h-12 w-full gap-4 uppercase"
          >
            <Loader2
              className={cn("animate-spin", {
                hidden: !isSubmitting,
              })}
            />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
