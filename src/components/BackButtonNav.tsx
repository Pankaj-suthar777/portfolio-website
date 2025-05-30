"use client";
import { useRouter } from "next/navigation";
import { BiChevronLeft } from "react-icons/bi";

const BackButtonNav = () => {
  const router = useRouter();
  return (
    <div
      className="flex justify-between my-8"
      onClick={() => {
        router.back();
      }}
    >
      <div className="cursor-pointer">
        <BiChevronLeft color="black" size={28} />
      </div>
    </div>
  );
};

export default BackButtonNav;
