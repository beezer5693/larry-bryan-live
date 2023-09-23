"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        return (
          <Toast
            className={cn("border-green-800", {
              "border-red-600": variant === "error",
            })}
            key={id}
            {...props}
          >
            <div className="grid gap-2">
              <div className="flex gap-3">
                {variant === "error" ? (
                  <AlertCircle className="-mt-2.5 h-10 w-10 text-red-600" />
                ) : (
                  <CheckCircle2 className="-mt-[3px] h-6 w-6 text-green-600" />
                )}
                <div className="space-y-2">
                  {title && (
                    <ToastTitle className="font-basement">{title}</ToastTitle>
                  )}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
