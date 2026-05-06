import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Astrit Arévalo · Psicóloga Psicooncóloga | Azogues, Ecuador",
  description:
    "Psicóloga con maestría en Oncología. Acompañamiento emocional especializado para pacientes con cáncer y sus familias en Azogues, Ecuador. Atención presencial y online.",
  keywords: [
    "psicooncología",
    "psicóloga oncológica",
    "psicología y cáncer",
    "apoyo emocional cáncer Ecuador",
    "Azogues psicóloga",
    "Astrit Arévalo",
  ],
  openGraph: {
    title: "Astrit Arévalo · Psicóloga Psicooncóloga",
    description:
      "Acompañamiento psicológico especializado en oncología para pacientes y familias.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
