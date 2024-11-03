import { motion } from "framer-motion";
import React from "react";

export const AnimatedListItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.li
      //   initial={{ opacity: 0, scale: 1.2 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, scale: 1.2, fontWeight: 700 },
        visible: { opacity: 1, scale: 1, fontWeight: 700 },
      }}
    >
      {children}
    </motion.li>
  );
};
