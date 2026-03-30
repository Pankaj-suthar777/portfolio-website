"use client";
import navigation from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({
  dir,
  onLinkClick,
}: {
  dir?: "rtl" | "ltr";
  onLinkClick?: () => void;
}) => {
  const pathname = usePathname();
  return (
    <ul dir={dir} className="flex flex-col gap-3">
      {navigation.map((item, i) => {
        const isActive = pathname === item.href;
        return (
          <li key={i}>
            <Link
              href={item.href}
              onClick={onLinkClick}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-black dark:text-white font-medium"
                  : "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
