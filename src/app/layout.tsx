import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import Providers from "./providers";

const geistMono = Poppins({
  subsets: ["latin"],
  weight: ["100", "400"],
});

export const metadata: Metadata = {
  title: "Pankaj Suthar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} bg-white dark:bg-black`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
