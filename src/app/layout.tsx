import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@root/styles/globals.css";
import clsx from "clsx";
import { SessionProvider } from '@root/context/SessionProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Higor Dev",
  description: "Desenvolvedor FullStack",
  icons: "/logo.png",
  abstract: "Desenvolvedor FullStack",
  authors: {
    name: "Higor Santos",
    url: "higordev.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="shortcut icon" href="/h.png" type="image/x-icon" />
      </head>
      <body className={clsx(`bg-slate-950 ${inter.className}`)}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
      <GoogleAnalytics gaId="G-ZX1MK5EK9B" />
    </html>
  );
}
