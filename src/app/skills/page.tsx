import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import React from "react";

const SkillsScreen = () => {
  return (
    <PageContainer>
      <PageTitle title="Skills" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 text-black dark:text-white">
        <div>
          <h3 className="text-lg font-semibold">Languages: </h3>
          JavaScript, TypeScript, Python, GDScript
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
          <h3 className="text-lg font-semibold">DevOps: </h3>
          <p>Docker, Kubernetes, AWS</p>
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
