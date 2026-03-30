import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";
import Providers from "../../providers";

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
          <div className="text-black dark:text-white">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
