import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-2xl font-medium text-black dark:text-white mb-8">
      {title}
    </h1>
  );
};

export default PageTitle;
