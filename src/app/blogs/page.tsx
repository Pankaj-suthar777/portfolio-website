import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import React from "react";

const BlogsPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Blogs" />
      <div className="flex justify-center items-center py-8">No blogs yet.</div>
    </PageContainer>
  );
};

export default BlogsPage;
