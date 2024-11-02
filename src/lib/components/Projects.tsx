import { motion } from "framer-motion";
import { useState } from "react";
import { PolitechAI } from "./ProjectDescriptions";
// import Image from "next/image";

const projects: Record<string, React.FC | React.ReactElement> = {
  ATVsNetWeb: () => <>test</>,
  TrustedFor: () => <>test</>,
  "Souffle Club": () => <>test</>,
  DigiBuild: () => <>test</>,
  "Politech.ai": PolitechAI,
};

export const Projects: React.FC<{
  setScreen?: (screen: "landing" | "projects") => void;
}> = ({}) => {
  const [selectedProject, setSelectedProject] = useState<string>("Politech.ai");
  const ProjectDescription = projects[selectedProject];
  return (
    <motion.div key="projects-internal-container" className="flex w-lg">
      <motion.div className="w-1/3 mr-4">
        {Object.keys(projects)
          .reverse()
          .map((project, idx) => (
            <button
              key={`project-${idx}`}
              className="opacity-90 border-2 bg-[#1e1e1e] border-[#323232] w-full mb-2 hover:opacity-100 transition-opacity duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {project}
            </button>
          ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        key={`project-description-${selectedProject}`}
        className="w-2/3 relative p-8 opacity-90 border-2 bg-[#1e1e1e] border-[#323232] flex flex-col items-start justify-start overflow-hidden rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4">{selectedProject}</h1>
        {/* @ts-expect-error ProjectDescription is a React.FC or React.ReactElement but TS doesn't care and doesn't want to render it */}
        <ProjectDescription />
      </motion.div>
    </motion.div>
  );
};
