import type { Metadata } from "next";
import localFont from "next/font/local";
import "tailwindcss/tailwind.css";
import "./globals.css";

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
        <>{children}</>
      </body>
    </html>
  );
}
