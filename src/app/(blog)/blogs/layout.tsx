import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";
import Providers from "../../providers";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
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
      <body className={`${poppins.className} bg-white dark:bg-black`}>
        <Providers>
          <div className="min-h-screen text-black dark:text-white flex flex-col">
            <div className="flex-1">{children}</div>
            <div className="px-4 pb-12 flex justify-center">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
