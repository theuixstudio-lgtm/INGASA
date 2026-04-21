import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

/* Display font — condensed, industrial authority */
const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

/* Body font — clean, readable */
const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "INGASA – Instalaciones Técnicas Certificadas | Ecuador",
  description: "Empresa ecuatoriana especializada en instalaciones de GLP centralizado, agua, calefacción y redes contra incendios. Más de 20 años de experiencia. Cuenca, Ecuador.",
  keywords: "instalaciones GLP Ecuador, instalaciones técnicas Cuenca, gas centralizado, termotanques Ecuador, redes contra incendios, INGASA",
  openGraph: {
    title: "INGASA – Instalaciones Técnicas Certificadas",
    description: "Soluciones integrales en GLP, agua, calefacción y seguridad. 20+ años de experiencia en Ecuador.",
    url: "https://ingasa-ec.vercel.app",
    siteName: "INGASA",
    type: "website",
    locale: "es_EC",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
