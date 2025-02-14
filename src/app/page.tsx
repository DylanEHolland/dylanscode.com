"use client";
import { Landing } from "@/lib/components/Landing";
import { Projects } from "@/lib/components/Projects";
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";

const backgroundImages: { [key: string]: string } = {
  landing: "/me-cartoon.png",
  projects: "/me-cartoon-2.png",
};

const Home: NextPage = () => {
  const [screen, setScreen] = useState<"landing" | "projects">("landing");

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}

          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-screen h-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImages[screen]}")`,
            zIndex: -1,
          }}
        ></motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div className="w-screen h-screen flex items-start">
          <motion.div
            key={`${screen}-container`}
            className={`w-full ${
              screen === "projects" ? "max-w-4xl" : "max-w-3xl"
            } mx-auto pt-24 sm:pt-48 px-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 100 }}
          >
            {screen === "landing" && <Landing setScreen={setScreen} />}
            {screen === "projects" && <Projects setScreen={setScreen} />}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
  // return (
  //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
};

export default Home;
