import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "@/components/Header/header";

import Providers from "./providers";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "Data Dashboard",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
          <AppRouterCacheProvider>
      <Providers>
          <Header />   
          {children}
        </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
