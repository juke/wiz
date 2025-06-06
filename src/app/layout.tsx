import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abcWhyte = localFont({
  src: [
    {
      path: "../../public/static/ABCWhyteVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-abc-whyte",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wiz - Your Personal Guide to the Blockchain",
  description: "Meet Wiz, your AI-powered coding and blockchain assistant. Join the waitlist for early access to the future of blockchain interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcWhyte.variable} ${abcWhyte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
