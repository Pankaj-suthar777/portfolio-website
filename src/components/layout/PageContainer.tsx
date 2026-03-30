import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 lg:py-16 animate-fade-in">
      {children}
    </div>
  );
};

export default PageContainer;
