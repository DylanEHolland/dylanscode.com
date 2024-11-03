import { motion } from "framer-motion";
import React from "react";

export const AnimatedList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // Stagger the animation for each item
          },
        },
      }}
      className="list-disc list-inside"
    >
      {children}
    </motion.ul>
  );
};
