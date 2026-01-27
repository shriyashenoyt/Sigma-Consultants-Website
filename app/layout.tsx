import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition"; // Import the transition wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sigma Consultants | Professional Civil Solutions",
  description: "Leading civil engineering showcase and infrastructure development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-engineering-black text-white`}>
        <Navbar />
        {/* Wrapping children ensures every page uses the same entrance animation */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}