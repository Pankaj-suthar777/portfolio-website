"use client";
import React, { useState } from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 15px",
    gap: "15px",
    backgroundColor: isHovered ? "transparent" : "#181717",
    outline: "3px #181717 solid",
    outlineOffset: "-3px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "400ms",
    width: "100%",
  };

  const textStyles = {
    color: isHovered ? "#181717" : "white",
    fontWeight: "700",
    fontSize: "1em",
    transition: "400ms",
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={textStyles}>{children}</p>
    </button>
  );
};

export default Button;
