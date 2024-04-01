import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "techie",
 description: "Blog app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body className={cn("min-h-screen antialiased flex flex-col", font.className)}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <Header />
     <div className="flex-1 flex">
      <LeftSidebar />
      <div className="contain">{children}</div>
     </div>
    </ThemeProvider>
   </body>
  </html>
 );
}
