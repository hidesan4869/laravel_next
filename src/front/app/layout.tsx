import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import './globals.css';

const NotoSans = Noto_Sans_JP({ subsets: ["latin"], display: "swap", weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']});

export const metadata: Metadata = {
  title: "WDR｜プランナー探し",
  description: "WDR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSans.className}>
        <Header />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
