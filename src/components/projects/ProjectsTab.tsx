import { ProjectType } from "@/constants/projects";

interface Props {
  selectedTab: ProjectType;
  setSelectedTab: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const ProjectsTab = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="border border-slate-400 rounded-lg flex lg:max-w-[400px] w-full">
        <div
          className={`w-1/3 border-r border-slate-400 p-2 text-xs lg:text-sm text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "web" ? "bg-slate-200 dark:text-black" : ""
          } ${
            selectedTab === "web"
              ? ""
              : "hover:bg-slate-100 hover:dark:text-black"
          }`}
          onClick={() => setSelectedTab("web")}
        >
          <span>Web Apps</span>
        </div>
        <div
          className={`w-1/3 border-r border-slate-400 p-2 text-xs lg:text-sm text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "mobile" ? "bg-slate-200 dark:text-black" : ""
          } ${
            selectedTab === "mobile"
              ? ""
              : "hover:bg-slate-100 hover:dark:text-black"
          }`}
          onClick={() => setSelectedTab("mobile")}
        >
          <span>Mobile Apps</span>
        </div>
        <div
          className={`w-1/3 p-2 text-xs lg:text-sm text-center cursor-pointer items-center flex justify-center ${
            selectedTab === "game" ? "bg-slate-200 dark:text-black" : ""
          } ${
            selectedTab === "game"
              ? ""
              : "hover:bg-slate-100 hover:dark:text-black"
          }`}
          onClick={() => setSelectedTab("game")}
        >
          <span>Games</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
