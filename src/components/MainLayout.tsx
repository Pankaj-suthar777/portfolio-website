import React from "react";
// import TypewriterEffect from "./TextEffect";
import navigation from "@/constants/navigation";
import Footer from "./Footer";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex lg:flex-row flex-col text-black max-w-[1400px]">
      <div className="lg:w-[35%] w-full flex lg:justify-end justify-center items-start">
        <div className="p-8 lg:py-12 flex flex-col lg:items-end items-center">
          <h1 className="text-4xl font-medium text-center lg:text-right">
            Pankaj Suthar
          </h1>
          {/* <div className="w-[120px] mt-8 mb-8">
            <TypewriterEffect />
          </div> */}
          <div className="mt-8 mb-8 italic text-center lg:text-right">
            hello, i code
          </div>
          <HamburgerMenu />
          <div dir="rtl" className="hidden lg:flex">
            <ul className="list-disc list-inside ml-auto">
              {navigation.map((item, i) => (
                <li key={i} className="mb-4">
                  <Link
                    href={item.href}
                    className="text-lg underline underline-offset-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1.5px] bg-black h-auto"></div>
      <div className="flex-1">
        {children}
        <div className="flex justify-center pb-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
