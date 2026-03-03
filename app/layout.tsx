import type { Metadata } from "next";
import { DM_Serif_Text, Poppins } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ying Ying Tan — Thoughts on Money, Family & Living Freely",
  description:
    "Mother of two. Lived in 6 countries. Currently inside a startup society. Sharing thoughts on money, family, and living freely.",
  openGraph: {
    title: "Ying Ying Tan — Thoughts on Money, Family & Living Freely",
    description:
      "Mother of two. Lived in 6 countries. Currently inside a startup society. Sharing thoughts on money, family, and living freely.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
