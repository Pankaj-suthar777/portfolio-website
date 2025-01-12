import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-3xl underline underline-offset-8 text-center mb-12">
      {title}
    </p>
  );
};

export default PageTitle;
