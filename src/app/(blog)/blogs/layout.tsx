import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";

const geistMono = Poppins({
  subsets: ["latin"],
  weight: ["100", "400"],
});

export const metadata: Metadata = {
  title: "Pankaj Suthar",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} bg-white dark:bg-black`}>
        <div className="max-w-[800px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
