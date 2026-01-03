import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FancyCursor = () => {
  const cursor = useRef(null);
  const cursorFollower = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });

      gsap.to(cursorFollower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Magnetic Hover Effect
  useEffect(() => {
    const targets = document.querySelectorAll(".magnetic");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor.current, { scale: 2.5, duration: 0.2 });
        gsap.to(cursorFollower.current, { scale: 3.5, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor.current, { scale: 1, duration: 0.2 });
        gsap.to(cursorFollower.current, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <>
      {/* Small dot cursor */}
      <div
        ref={cursor}
        style={{
          position: "fixed",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#fff",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          mixBlendMode: "difference",
          zIndex: 99999,
        }}
      />

      {/* Big trailing circle */}
      <div
        ref={cursorFollower}
        style={{
          position: "fixed",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          mixBlendMode: "difference",
          zIndex: 99998,

          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)", // camelCase
          border: "1px solid rgba(255, 255, 255, 1)",
        }}
      />
    </>
  );
};

export default FancyCursor;
