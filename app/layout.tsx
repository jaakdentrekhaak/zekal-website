import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zekal - Platform Solutions for Industrial Parks",
  description:
    "Innovative software solutions for acceptance and inspection processes in industrial parks. Featuring AcceptOr and InspectOr platforms.",
  keywords:
    "industrial parks, acceptance platform, inspection platform, AcceptOr, InspectOr, Zekal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
