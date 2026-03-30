import { ProjectType } from "@/constants/projects";

const tabs: { label: string; value: ProjectType }[] = [
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Games", value: "game" },
];

interface Props {
  selectedTab: ProjectType;
  setSelectedTab: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const ProjectsTab = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <div className="flex gap-1 mb-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setSelectedTab(tab.value)}
          className={`px-4 py-1.5 text-sm rounded transition-colors ${
            selectedTab === tab.value
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectsTab;
