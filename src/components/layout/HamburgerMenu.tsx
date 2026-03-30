"use client";
import NavLinks from "./NavLinks";
import React, { useEffect, useRef, useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="w-full flex flex-col items-center lg:hidden mt-6">
      <button
        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 border border-slate-300 dark:border-slate-700 px-3 py-2 rounded hover:text-black dark:hover:text-white transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <CrossSvg /> : <HamburgerSvg />}
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="mt-6 w-full border-t border-slate-200 dark:border-slate-800 pt-6">
          <NavLinks onLinkClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

const HamburgerSvg = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CrossSvg = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
