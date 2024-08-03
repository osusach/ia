import type { Metadata } from "next";
import { Instrument_Sans as Font } from "next/font/google";
import "./globals.css";
import { AI } from "./actions";
import { cn } from "@/lib/utils";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-stone-50 text-stone-900")}>
        <AI>{children}</AI>
      </body>
    </html>
  );
}
