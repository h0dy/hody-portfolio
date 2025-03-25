import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import Providers from "./provider";
// import Navbar from "@/components/navbar/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hody.dev",
  description: "hody's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
