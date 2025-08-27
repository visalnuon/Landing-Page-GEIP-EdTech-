import "./globals.css";
import { Inter } from "next/font/google";
import { Noto_Serif_Khmer } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterPage from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const khmer = Noto_Serif_Khmer({
  subsets: ["khmer"],
  variable: "--font-khmer",
});

export const metadata = {
  icons: "/logo/logo.svg",
  title: "កម្មវិធីទូរស័ព្ទដៃស្វ័យសិក្សា GEIP EdTech "   ,
  description: "Next.js with Khmer & English fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${khmer.variable}`}>
      <body>
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
