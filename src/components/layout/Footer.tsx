import Link from "next/link";
import React from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Pankaj-suthar777" },
  { label: "Twitter", href: "https://x.com/Inyourdream0007" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pankaj-suthar-550b0a2a6/" },
];

const Footer = () => {
  return (
    <div className="text-xs text-gray-500 dark:text-gray-500 lg:text-right text-center">
      <div className="flex gap-3 flex-wrap lg:justify-end justify-center mb-1">
        {socialLinks.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {s.label}
          </Link>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Pankaj Suthar</p>
    </div>
  );
};

export default Footer;
