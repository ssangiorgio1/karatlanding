import type { Metadata } from "next";
import { Montserrat, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX | Electricista matriculado, climatización y obras en Mendoza",
  description: "Electricista matriculado en Mendoza. Instalaciones eléctricas, climatización, tableros, montajes y obras para residencial y empresas. Atención en todo Gran Mendoza. Presupuesto sin cargo.",
  keywords: [
    "electricista mendoza",
    "electricista matriculado mendoza",
    "instalaciones electricas mendoza",
    "obras electricas mendoza",
    "climatizacion mendoza",
    "aire acondicionado mendoza",
    "tableros electricos mendoza",
    "montajes electricos mendoza",
    "mantenimiento electrico mendoza",
    "electricista godoy cruz",
    "electricista las heras mendoza",
    "electricista guaymallen",
    "electricista maipu mendoza",
    "electricista lujan de cuyo",
    "electricista capital mendoza",
    "electricista residencial mendoza",
    "electricista empresas mendoza",
    "APEX electricista",
  ],
  openGraph: {
    title: "APEX | Electricista matriculado, climatización y obras en Mendoza",
    description: "Electricista matriculado en Mendoza. Instalaciones eléctricas, climatización, tableros y obras para residencial y empresas en todo Gran Mendoza.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
