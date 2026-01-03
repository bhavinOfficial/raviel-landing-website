import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Works even with smooth scroll libraries
    document.documentElement.scrollTo({
      top: 0,
      behavior: "instant", // change to "smooth" if you want
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
