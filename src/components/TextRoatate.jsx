import React, { useEffect, useState } from "react";
import { qouteData } from "../constant/hpCardData";

const TextRoatate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((pre) => (pre + 1) % qouteData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font20 italic max-w-3xl mx-auto text-gray-300 transition duration-[0.5s] ease-in-out">
      "{qouteData[index]}"
    </p>
  );
};

export default TextRoatate;
