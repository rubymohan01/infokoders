"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import '@november-pro/font/style.css'; // Or the correct path to the CSS file

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          {children}
        </main> 
      </body>
    </html>
  );
}
