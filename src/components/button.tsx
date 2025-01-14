import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <p className="custom-button-text">{children}</p>
    </button>
  );
};

export default Button;
