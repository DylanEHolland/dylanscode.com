import React from "react";
import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";
import { CALENDLY_LINK } from "../constants/links";

export const Landing: React.FC<{
  setScreen: (screen: "landing" | "projects") => void;
}> = ({ setScreen }) => {
  return (
    <motion.div className="w-2/3 ml-auto mr-auto">
      <motion.div className="relative p-8 pb-2 opacity-90 border-2 bg-[#1e1e1e] border-[#323232] flex flex-col items-start justify-start overflow-hidden rounded-xl shadow-md">
        <span className="text-2xl font-semibold text-white mb-4">
          Hi, I{"'"}m Dylan
        </span>
        <motion.div>
          I’m a software engineer with hands-on experience building digital
          products since I was a teenager. My early work led me to tech roles at
          an e-commerce company that later sold and then into a YC-backed
          startup, where I thrived in fast-paced, impact-driven environments.
          <br />
          <br />
          Over time, I’ve built and led cross-functional teams to deliver
          scalable, value-focused products, moving from LAMP stacks and Linux
          servers to cloud deployments and diverse technologies from MongoDB and
          Redis to Python, TypeScript, and Go (and many, many, more.) My
          approach prioritizes practical, scalable solutions over complexity,
          allowing teams to focus on delivering real value efficiently and adapt
          to evolving challenges.
        </motion.div>
        {/* <Image
          src="/me-irl.png"
          alt="me-irl"
          width={200}
          height={200}
          className="rounded-full mr-auto ml-auto"
        /> */}
        <motion.div className="flex items-center gap-4 ml-auto mr-0 mt-8">
          <SocialLinks />
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center justify-center mt-4 z-100">
        <button
          className="bg-black/60 border-2 border-black/10 text-white p-2 rounded-md mr-4"
          onClick={() => {
            setScreen("projects");
          }}
        >
          Resume
        </button>
        <a href={CALENDLY_LINK} target="_blank">
          <button className="bg-black/60 border-2 border-black/10 text-white p-2 rounded-md">
            Book a call
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
};
