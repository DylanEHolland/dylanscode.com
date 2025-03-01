import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ATVsNetWeb,
  DigiBuild,
  PolitechAI,
  SouffleClub,
  TrustedFor,
} from "./ProjectDescriptions";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Image from "next/image";

const projects: Record<string, React.FC | React.ReactElement> = {
  ATVsNetWeb: ATVsNetWeb,
  TrustedFor: TrustedFor,
  "Souffle Club": SouffleClub,
  DigiBuild: DigiBuild,
  "Politech.ai": PolitechAI,
};

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const Projects: React.FC<{
  setScreen: (screen: "landing" | "projects") => void;
}> = ({ setScreen }) => {
  const [selectedProject, setSelectedProject] = useState<string>("Politech.ai");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const ProjectDescription = projects[selectedProject];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };
  }, []);

  return (
    <>
      <motion.div className="flex mt-4 w-full sm:w-3/4 mx-auto mb-4 px-4 justify-between items-center">
        <div className="sm:hidden">
          <button
            className="bg-black/60 border-2 border-black/10 text-white p-2 rounded-md flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
        <button
          className="bg-black/60 border-2 border-black/10 text-white p-2 rounded-md"
          onClick={() => setScreen("landing")}
        >
          Go Back
        </button>
      </motion.div>

      <motion.div
        key="projects-internal-container"
        className="flex flex-col sm:flex-row w-full sm:w-3/4 mx-auto px-4"
      >
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          className="sm:block overflow-hidden w-full sm:w-1/3 mr-0 sm:mr-4 mt-2 mb-4 sm:mb-0"
        >
          {Object.keys(projects)
            .reverse()
            .map((project, idx) => (
              <button
                key={`project-${idx}`}
                className="opacity-90 border-2 bg-[#1e1e1e] border-[#323232] w-full mb-2 hover:opacity-100 transition-opacity duration-300 rounded-md p-2"
                onClick={() => {
                  setSelectedProject(project);
                  setMenuOpen(false);
                }}
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
          className="w-full sm:w-2/3 relative p-4 sm:p-8 opacity-90 border-2 bg-[#1e1e1e] border-[#323232] flex flex-col items-start justify-start overflow-y-scroll overflow-x-hidden rounded-xl shadow-md"
          style={{ maxHeight: "60vh" }}
        >
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            {selectedProject}
          </h1>
          {/* @ts-expect-error ProjectDescription is a React.FC or React.ReactElement but TS doesn't care and doesn't want to render it */}
          <ProjectDescription />
        </motion.div>
      </motion.div>
    </>
  );
};
