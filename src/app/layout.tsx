import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Luxe Automotive - Premium Luxury Car Dealership",
  description: "Discover the world's finest luxury automobiles. Bentley, Mercedes-Benz, Audi and more. Experience unparalleled elegance and performance.",
  keywords: "luxury cars, Bentley, Mercedes-Benz, Audi, premium automobiles, car dealership",
  authors: [{ name: "Luxe Automotive" }],
  openGraph: {
    title: "Luxe Automotive - Premium Luxury Car Dealership",
    description: "Discover the world's finest luxury automobiles. Experience unparalleled elegance and performance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
