import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BigCommerce Example Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <main
          className={
            `min-h-screen px-24 py-8 flex flex-wrap 
            items-start content-start justify-center gap-4 text-neutral-950`
          }
        >
          {children}
        </main>
      </body>
    </html>
  );
}
