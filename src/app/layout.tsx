import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const geistMono = Poppins({
  subsets: ["latin"],
  weight: ["100", "400"],
});

export const metadata: Metadata = {
  title: "Pankaj Suthar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistMono.className} bg-white`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
