import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <PageContainer>
      <PageTitle title="About me" />
      <p className="text-black dark:text-white">
        Hi! I{"'"}m Pankaj Suthar interested in system design, backend
        application and web development.
      </p>
      <p className="text-black dark:text-white mt-12">
        I am a motivated and versatile individual, always eager to take on new
        challenges. With a passion for learning I am dedicated to delivering
        high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.
      </p>

      <Image
        className="mt-8"
        alt=""
        unoptimized
        width={300}
        height={300}
        src={"/gif/222700.gif"}
      />
    </PageContainer>
  );
};

export default Home;
