import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "TechE",
 description: "Blog app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={cn("min-h-screen antialiased", font.className)}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     {children}
    </ThemeProvider>
   </body>
  </html>
 );
}
