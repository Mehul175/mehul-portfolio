import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mehul Andani - React Native Developer",
  description: "Experienced React Native Developer with 3.5+ years of expertise in building high-quality mobile apps for iOS and Android.",
  keywords: ["React Native", "Mobile Development", "iOS", "Android", "JavaScript", "Developer"],
  authors: [{ name: "Mehul Andani" }],
  openGraph: {
    title: "Mehul Andani - React Native Developer",
    description: "Experienced React Native Developer with 3.5+ years of expertise in building high-quality mobile apps for iOS and Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
