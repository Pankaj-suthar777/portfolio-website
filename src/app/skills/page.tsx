import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import React from "react";

const SkillsScreen = () => {
  return (
    <PageContainer>
      <PageTitle title="Skills" />
      <div className="grid grid-cols-2 gap-4 text-black">
        <div>
          <h3 className="text-lg font-semibold">Languages: </h3>
          JavaScript, TypeScript, Python, GDScrpt
        </div>
        <div>
          <h3 className="text-lg font-semibold">Frontend Frameworks: </h3>
          <p>React.js, Next.js, Redux, Tailwind CSS</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Backend: </h3>
          <p>Node.js, Express, GraphQL, MongoDB, PostgreSQL</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Tools: </h3>
          <p>Git & GitHub, Docker, AWS, Linux</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Game Development: </h3>
          <p>Godot Engine</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default SkillsScreen;
