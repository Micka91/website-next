import { useEffect } from "react";
import { useState } from "react";

const useWindowMatches = () => {
  const [isNotMobile, setIsNotMobile] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(min-width: 420px)")
      .addEventListener("change", (e) => setIsNotMobile(e.matches));
  }, []);

  return { isNotMobile };
};

export default useWindowMatches;
