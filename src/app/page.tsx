"use client";
import { motion } from "framer-motion";
import { Calendar, Linkedin, Twitter } from "lucide-react";
import { NextPage } from "next";
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

const Home: NextPage = () => {
  return (
    <motion.div
      className="w-full max-w-3xl ml-auto mr-auto pt-[20%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="relative p-8 pb-2 opacity-90 border-2 bg-[#1e1e1e] border-[#323232] flex flex-col items-start justify-start overflow-hidden rounded-xl shadow-md">
        <span className="text-2xl font-semibold text-white mb-4">
          Hi, I{"'"}m Dylan
        </span>
        <motion.div>
          I’m a self-taught developer with hands-on experience building digital
          products since I was a teenager. My early work led me to tech roles at
          an e-commerce company that later sold and then into a YC-backed
          startup, where I thrived in fast-paced, impact-driven environments.
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
          <StyledCalendarIcon className="cursor-pointer" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //         <li className="mb-2">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
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
