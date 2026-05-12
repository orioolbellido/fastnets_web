import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: "FastNets — Instal·lació Professional de Telecomunicacions",
    template: "%s | FastNets",
  },
  description:
    "FastNets ofereix serveis professionals d'instal·lació de telecomunicacions: ICT, fibra òptica, xarxes de dades, CCTV i consultoria tècnica per a empreses.",
  keywords: ["telecomunicacions", "ICT", "fibra òptica", "xarxes", "CCTV", "Catalunya"],
  authors: [{ name: "FastNets" }],
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "FastNets",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
