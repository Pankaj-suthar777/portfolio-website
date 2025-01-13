"use client";
import navigation from "@/constants/navigation";
import Link from "next/link";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="lg:hidden flex py-2 px-4 gap-4 border border-slate-600 w-fit cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <CrossSvg /> : <HamburgerSvg />}
        Menu
      </div>
      {/* Menu items*/}
      {open ? (
        <div className="mt-8 w-full">
          {navigation.map((nav, i) => {
            if (i === navigation.length - 1) {
              return (
                <div className="border-t border-b border-slate-600 p-4" key={i}>
                  <Link href={nav.href}>{nav.name}</Link>
                </div>
              );
            } else {
              return (
                <div className="border-t border-slate-600 p-4" key={i}>
                  <Link href={nav.href}>{nav.name}</Link>
                </div>
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;

const HamburgerSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const CrossSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L4.99998 19M5.00001 5L19 19"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
