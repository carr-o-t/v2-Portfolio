import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [animate, setAnimate] = useState("initial");

  useEffect(() => {
    requestAnimationFrame(() => setAnimate("in"));
    return () => setAnimate("out");
  }, []);

  return (
    <div className={`page-transition ${animate}`}>
      {children}
    </div>
  );
};

export default PageTransition;
