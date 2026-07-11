import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import NewHeader from "@/components/sections/NewHeader";
import Footer from "@/components/sections/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDS — Império Dourado Soluções",
  description: "Serviços que capacitam, conectam e desenvolvem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning className={cn(fraunces.variable, hanken.variable, "font-sans", geist.variable)}>
      <body>
        <ThemeProvider>
          <NewHeader />
          {children}
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}