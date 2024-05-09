import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowSize = () => {
  const [size, setSize] = useState(getWindowDimensions());

  useEffect(() => {
    const onChangeWindowSize = () => {
      setSize(getWindowDimensions());
    };

    window.addEventListener("resize", onChangeWindowSize);
    return () => window.removeEventListener("resize", onChangeWindowSize);
  }, []);

  return size;
};
