import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:my-24 my-0 p-8 relative">{children}</div>;
};

export default PageContainer;
