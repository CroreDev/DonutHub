import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DonutHub — Legal, Policies & Trust Centre",
  description: "Official legal documentation, escrow conditions, consumer protections, and privacy declarations for DonutHub, an independent Minecraft community marketplace.",
  keywords: ["DonutHub", "Minecraft Marketplace", "Legal", "Terms of Service", "Refund Policy", "Privacy Policy", "Escrow", "DonutSMP"],
  icons: {
    icon: "/donuthub-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#090a0f] text-gray-200 antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
