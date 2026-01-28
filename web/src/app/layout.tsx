import type { Metadata } from "next";
import { Bricolage_Grotesque, Chivo_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = Chivo_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Choreographer",
  description:
    "A design-forward canvas for curating typography, color, motion, and atmospheres without compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
