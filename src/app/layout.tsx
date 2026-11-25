import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#171717",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Amboru Koushik | Software Engineer, AI Builder, Product Systems",
  description:
    "Portfolio of Amboru Koushik: production Flutter apps, AI/ML research, GenAI systems, data workflows, and product engineering case studies.",
  keywords: [
    "Amboru Koushik",
    "Software Engineer",
    "AI Engineer",
    "Flutter",
    "Next.js",
    "Data Analyst",
    "IEEE Published Author",
    "GenAI",
    "Portfolio",
  ],
  authors: [{ name: "Amboru Koushik" }],
  openGraph: {
    title: "Amboru Koushik | Software Engineer, AI Builder, Product Systems",
    description:
      "Production apps, IEEE AI/ML research, patent-filed innovation, and product engineering case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${urbanist.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
