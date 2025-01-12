import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import React from "react";

const Home = () => {
  return (
    <PageContainer>
      <PageTitle title="About me" />
      <p className="text-black">
        Hi! I{"'"}m Pankaj Suthar interested in system design, backend
        application and web development.
      </p>
      <p className="text-black mt-12">
        I am a motivated and versatile individual, always eager to take on new
        challenges. With a passion for learning I am dedicated to delivering
        high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.
      </p>
    </PageContainer>
  );
};

export default Home;
