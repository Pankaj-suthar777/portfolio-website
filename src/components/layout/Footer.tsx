import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-8 font-normal">
      <Link
        className="underline underline-offset-4"
        href={"https://github.com/Pankaj-suthar777"}
      >
        Github
      </Link>
      <span> | </span>
      <Link
        className="underline underline-offset-4"
        href={"https://x.com/Inyourdream0007"}
      >
        Twitter
      </Link>
      <span> | </span>
      <Link
        className="underline underline-offset-4"
        href={"https://x.com/Inyourdream0007"}
      >
        Instagram
      </Link>
      <span> | </span>
      <Link
        className="underline underline-offset-4"
        href={"https://x.com/Inyourdream0007"}
      >
        Linkdin
      </Link>
    </div>
  );
};

export default Footer;
