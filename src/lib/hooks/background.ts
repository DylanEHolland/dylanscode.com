import { useState } from "react";
import { createContext } from "vm";

const backgroundImages: { [key: string]: string } = {
  outside: "/me-cartoon.png",
  working: "/me-cartoon-2.png",
};

export const useBackground = () => {
  const [background, setBackground] = useState<string>(
    backgroundImages.outside
  );

  return {
    background,
    updateBackground: (newBackground: string) => {
      setBackground(backgroundImages[newBackground]);
    },
  };
};

export const BackgroundContext = createContext({});
