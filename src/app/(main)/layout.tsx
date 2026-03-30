import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import MainLayout from "@/components/layout/MainLayout";
import Providers from "../providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pankaj Suthar",
  description:
    "Pankaj Suthar — full-stack developer specializing in system design, backend engineering, and building web & mobile apps.",
  openGraph: {
    title: "Pankaj Suthar",
    description:
      "Full-stack developer specializing in system design, backend engineering, and building web & mobile apps.",
    url: "https://pankajsuthar.dev",
    siteName: "Pankaj Suthar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pankaj Suthar",
    description:
      "Full-stack developer specializing in system design, backend engineering, and building web & mobile apps.",
    creator: "@Inyourdream0007",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-black`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
