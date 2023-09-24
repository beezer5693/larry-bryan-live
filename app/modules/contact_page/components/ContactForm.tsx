"use client";

import { useState } from "react";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDate from "@/utils/formatters/formatDate";
import * as z from "zod";
import { contactFormSchema } from "@/lib/validators/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import formatCurrency from "@/utils/formatters/formatCurrency";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

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

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const contactFormValues = {
      ...values,
      phoneNumber: formatPhoneNumber(values.phoneNumber),
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
                <Input
                  disabled={isSubmitting}
                  {...field}
                  placeholder="$0.00"
                  value={field.value ? `$${field.value}` : ""}
                  onChange={(e) =>
                    field.onChange(formatCurrency(e.target.value))
                  }
                />
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
