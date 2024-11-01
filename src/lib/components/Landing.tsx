import React from "react";
import { motion } from "framer-motion";
import { Calendar, Github, Linkedin, Twitter } from "lucide-react";
import styled from "styled-components";

const StyledTwitterIcon = styled(Twitter)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1); /* Slightly increases the size */
    color: #1da1f2; /* Example color change on hover */
  }
`;

const StyledLinkedinIcon = styled(Linkedin)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #005582;
  }
`;

const StyledCalendarIcon = styled(Calendar)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #0057cc;
  }
`;

const StyledGithubIcon = styled(Github)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #000000;
  }
`;

export const Landing: React.FC = () => {
  return (
    <>
      <motion.div className="relative p-8 pb-2 opacity-90 border-2 bg-[#1e1e1e] border-[#323232] flex flex-col items-start justify-start overflow-hidden rounded-xl shadow-md">
        <span className="text-2xl font-semibold text-white mb-4">
          Hi, I{"'"}m Dylan
        </span>
        <motion.div>
          I’m a self-taught developer with hands-on experience building digital
          products since I was a teenager. My early work led me to tech roles at
          an e-commerce company that later sold and then into a YC-backed
          startup, where I thrived in fast-paced, impact-driven environments.
          <br />
          <br />
          Over time, I’ve built and led cross-functional teams to deliver
          scalable, value-focused products, moving from LAMP stacks and Linux
          servers to cloud deployments and diverse technologies like MongoDB,
          Redis, Python, TypeScript, and Go. My approach prioritizes practical,
          scalable solutions over complexity, allowing teams to focus on
          delivering real value efficiently and adapt to evolving challenges.
        </motion.div>
        <motion.div className="flex items-center gap-4 ml-auto mr-0 mt-8">
          <StyledTwitterIcon className="cursor-pointer" />
          <StyledLinkedinIcon className="cursor-pointer" />
          <StyledGithubIcon className="cursor-pointer" />
          <StyledCalendarIcon className="cursor-pointer" />
        </motion.div>
      </motion.div>
      {/* <Button>Resume</Button>
      <Button>Book a call</Button> */}
    </>
  );
};
