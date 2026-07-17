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

const TITLE = "Ying Ying Tan · Thoughts on Money, Family & Living Freely";
const DESCRIPTION =
  "Mother of two. Lived in 6 countries. Currently inside a startup society. Sharing thoughts on money, family, and living freely.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bio.yings.me"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Ying Thinks",
    locale: "en_SG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ying Ying Tan · Ying Thinks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

// Person entity anchored at yings.me so all estate sites reinforce one identity
const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://yings.me/#person",
      name: "Ying Ying",
      alternateName: ["Ying Ying Tan", "Tan Ying Ying"],
      url: "https://yings.me/",
      description: DESCRIPTION,
      sameAs: [
        "https://www.youtube.com/@yingthinks",
        "https://www.linkedin.com/in/tan-yingying/",
        "https://www.instagram.com/yingyingt_",
        "https://github.com/tan-yingying",
        "https://medium.com/@tanyingying",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://bio.yings.me/#website",
      url: "https://bio.yings.me/",
      name: "Ying Thinks",
      description: DESCRIPTION,
      publisher: { "@id": "https://yings.me/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
