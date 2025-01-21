import React from "react";
type ButtonType = "button" | "submit" | "reset";

const Button = ({
  children,
  onClick,
  type,
  loading,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  loading?: boolean;
}) => {
  return (
    <button
      disabled={loading}
      type={type}
      className={`flex justify-center items-center px-4 py-2 gap-4 bg-[#181717] outline outline-3 outline-[#181717]  rounded-md border-none cursor-pointer transition-all duration-400 w-full ${
        loading
          ? "opacity-50 cursor-not-allowed hover:text-white"
          : "hover:bg-transparent"
      } hover:text-[#181717] text-white dark:text-white`}
      onClick={onClick}
    >
      <p className="font-bold text-base transition-all duration-400">
        {children}
      </p>
    </button>
  );
};

export default Button;
