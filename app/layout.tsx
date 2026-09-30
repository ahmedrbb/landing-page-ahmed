import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ahmed Rbouh | Data Engineer & BI Specialist",
  description: "Portfolio professionnel d'Ahmed Rbouh - Data Engineering, Architecture ETL, PostgreSQL & Power BI.",
  openGraph: {
    title: "Ahmed Rbouh | Data Engineer & BI Specialist",
    description: "Découvrez mes projets en Data Engineering, pipelines ETL et tableaux de bord Power BI.",
    url: "https://portfolio-rbouh-ahmed-eosin.vercel.app/",
    siteName: "Portfolio Ahmed Rbouh",
    images: [
      {
        url: "/og-image.png", // assurez-vous d'avoir placé une image og-image.png dans le dossier public
        width: 1200,
        height: 630,
        alt: "Ahmed Rbouh Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}