import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Covalia — Departamentos en Temozón Norte, Mérida | Desarrolladora Calume",
  description:
    "Covalia: 56 nuevos departamentos de 1 y 2 recámaras en Temozón Norte, Mérida. Áreas verdes, alberca, salón social y más. Entrega marzo 2028. Un desarrollo de Desarrolladora Calume.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
