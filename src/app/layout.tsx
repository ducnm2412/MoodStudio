import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatFloat from "@/components/ChatFloat";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"] });
const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "MOOD Studio ✿ chụp ảnh concept cute tại Sài Gòn", template: "%s | MOOD Studio" },
  description: "Studio chụp ảnh concept cá nhân, nghệ thuật, cổ trang và chân dung tại TP.HCM. Trang phục, makeup và bối cảnh có sẵn cho từng concept.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatFloat />
      </body>
    </html>
  );
}
