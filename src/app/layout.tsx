import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N-Sure OFI Dashboard",
  description: "Consent management dashboard for N-Sure OFI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-brand-bg text-navy`}>
        <div className="flex h-screen flex-col overflow-hidden">
          <Header />
          <div className="flex flex-1 pt-16">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-brand-bg p-4 md:p-8 ml-[70px] transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
