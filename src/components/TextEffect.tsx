"use client";
import React, { useEffect, useState } from "react";
import "./TextEffect.css";

const texts = ["hello i code", "I'm a Developer", "I'm a Freelancer"];

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 100 : 200;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(() => texts[index].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && charIndex === 0) {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return <div className="typewriter-container">{text}</div>;
};

export default TypewriterEffect;
