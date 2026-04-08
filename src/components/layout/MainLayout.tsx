import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import ThemeSwitch from "../ThemeSwitch";
import NavLinks from "./NavLinks";
import ScrollToTop from "./ScrollToTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex lg:flex-row flex-col text-black max-w-[1400px] mx-auto dark:text-white dark:bg-black">
      {/* Sidebar */}
      <div className="lg:w-[35%] w-full flex lg:justify-end justify-center items-start lg:sticky lg:top-0 lg:h-screen">
        <div className="p-8 lg:py-16 flex flex-col lg:items-end items-center lg:h-full lg:justify-between">
          <div className="flex flex-col lg:items-end items-center">
            <h1 className="text-3xl font-medium text-center lg:text-right">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Pankaj Suthar
              </Link>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 lg:text-right text-center">
              Full-stack developer
            </p>
            <div className="mt-6 flex gap-3 items-center">
              <ThemeSwitch />
            </div>
            <HamburgerMenu />
            <div className="hidden lg:flex mt-10">
              <NavLinks dir="rtl" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Footer />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-slate-200 dark:bg-slate-800 h-auto"></div>

      {/* Content */}
      <div className="flex-1 min-w-0 lg:h-screen lg:overflow-y-auto">
        <div className="lg:py-16 lg:min-h-full lg:flex lg:flex-col">
          {children}
          <div className="flex justify-center pb-12 lg:hidden">
            <Footer />
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
