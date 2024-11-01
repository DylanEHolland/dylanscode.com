import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dylan E. Holland",
  description: "Systems Architect. Full Stack Engineer. Builder.",
};

export default function RootLayout({
  children,
}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased items-center justify-center w-full`}
      >
        <div
          style={{
            background: 'url("/me-cartoon.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
          }}
        >
          <AnimatePresence mode="wait">
            <>{children}</>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
