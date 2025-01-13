import { ProjectType } from "@/constants/projects";

interface Props {
  selectedTab: ProjectType;
  setSelectedTab: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const ProjectsTab = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="border border-slate-400 rounded-lg flex lg:min-w-[400px]">
        <div
          className={`w-1/3 border-r border-slate-400 p-2 text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "web" ? "bg-slate-200" : ""
          } ${selectedTab === "web" ? "" : "hover:bg-slate-100"}`}
          onClick={() => setSelectedTab("web")}
        >
          <span>Web Apps</span>
        </div>
        <div
          className={`w-1/3 border-r border-slate-400 p-2 text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "mobile" ? "bg-slate-200" : ""
          } ${selectedTab === "mobile" ? "" : "hover:bg-slate-100"}`}
          onClick={() => setSelectedTab("mobile")}
        >
          <span>Mobile Apps</span>
        </div>
        <div
          className={`w-1/3 p-2 text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "game" ? "bg-slate-200" : ""
          } ${selectedTab === "game" ? "" : "hover:bg-slate-100"}`}
          onClick={() => setSelectedTab("game")}
        >
          <span>Games</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
