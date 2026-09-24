import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import SmoothScroll from "@/components/smothScroll";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shoriful Islam | Full Stack Developer",
  description:
    "Portfolio of Shoriful Islam, a Full Stack Web Developer building modern and scalable web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, inter.className)}
    >
      <body className="min-h-svh bg-[#f7f7fa] overflow-x-clip dark:bg-[#08080a]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <SidebarProvider>
              <Navbar />

              <main className="w-full min-w-0">
                {children}
              </main>
            </SidebarProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}