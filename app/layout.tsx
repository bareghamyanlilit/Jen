import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ժենիի և Վլո",
  description: "Ժենիի և Վլո",
  openGraph: {
    title: "Ժենիի և Վլոի հարսանեկան հրավիրատոմս",
    description: "Best invitation website",
    url: "https://jeni-vlo.vercel.app",
    siteName: "Ժենիի և Վլո",
    images: [
      {
        url: "/first.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
