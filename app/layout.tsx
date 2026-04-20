import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INGASA - Soluciones en Instalaciones Técnicas | Ecuador",
  description: "INGASA es una empresa ecuatoriana especializada en instalaciones técnicas de GLP, agua y calefacción con productos certificados y experiencia de 20+ años.",
  keywords: "instalaciones técnicas, GLP, agua caliente, calefacción, Ecuador, Cuenca",
  openGraph: {
    title: "INGASA - Soluciones en Instalaciones Técnicas",
    description: "Instalaciones de GLP, agua y calefacción con productos certificados",
    url: "https://ingasa-ec.vercel.app",
    siteName: "INGASA",
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
