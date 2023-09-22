import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const basementGrotesque = localFont({
  src: "../fonts/BasementGrotesque-Black.woff2",
  display: "swap",
  variable: "--font-basement-grotesque",
});

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${roboto.className} ${basementGrotesque.variable} scroll-smooth bg-black`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
