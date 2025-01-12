import { geistRubik } from "@/app/layout";
import React from "react";
import TypewriterEffect from "./TextEffect";
import navigation from "@/constants/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex text-black max-w-[1400px]">
      <div className="w-[35%] flex justify-end">
        <div className="p-8 py-12 flex flex-col items-end">
          <h1 className={`text-4xl ${geistRubik.className} font-medium`}>
            Pankaj Suthar
          </h1>
          <div className="w-[120px] mt-8 mb-8">
            <TypewriterEffect />
          </div>
          <div dir="rtl">
            <ul className="list-disc list-inside ml-auto">
              {navigation.map((item, i) => (
                <li key={i} className="mb-4">
                  <a
                    href={item.href}
                    className="text-lg underline underline-offset-4"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1.5px] bg-black my-8"></div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
