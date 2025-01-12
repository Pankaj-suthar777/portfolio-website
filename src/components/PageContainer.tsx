import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-24 p-8">{children}</div>;
};

export default PageContainer;
