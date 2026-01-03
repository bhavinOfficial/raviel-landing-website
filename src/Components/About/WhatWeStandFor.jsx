// src/components/Journey.jsx
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // 🎯 TITLE ANIMATION
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });

    // 🎯 CARD ANIMATIONS
    itemRefs.current.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });
  }, []);

  const items = [
    { number: "1", title: "Innovation", align: "left" },
    { number: "2", title: "Accuracy", align: "right" },
    { number: "3", title: "Reliability", align: "left" },
    { number: "4", title: "Support", align: "right" },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        "--bg": "#EFE9E2",
        "--accent": "#A699F9",
        "--accent-dark": "#6E5BF5",
        "--muted": "#FFD8D8",
        "--orange": "#EEAA1E",

        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundColor: "var(--bg)",
        fontFamily: "stack",
      }}
    >
      {/* TITLE */}
      <Typography
        ref={titleRef}
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.6rem" },
          fontWeight: 800,
          color: "#000",
          mb: 8,
        }}
      >
        WHAT WE STAND FOR
      </Typography>

      {/* TIMELINE WRAPPER */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          position: "relative",

          "& .center-line": {
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            background:
              "linear-gradient(180deg, var(--accent), rgba(166,153,249,0.15))",
            borderRadius: "10px",
            opacity: 0.9,
            boxShadow: "0 0 10px rgba(166,153,249,0.4)",
          },
        }}
      >
        <Box className="center-line" />

        {/* TIMELINE ITEMS */}
        {items.map((item, index) => (
          <JourneyItem
            key={index}
            index={index}
            number={item.number}
            align={item.align}
            title={item.title}
            itemRefs={itemRefs}
          />
        ))}
      </Box>
    </Box>
  );
};

/* ---------------------------------------------------
      TIMELINE ITEM WITH GSAP ANIMATION
--------------------------------------------------- */
const JourneyItem = ({ number, align, title, index, itemRefs }) => {
  const isLeft = align === "left";

  return (
    <Box
      ref={(el) => (itemRefs.current[index] = el)}
      sx={{
        width: { xs: "100%", md: "50%" },
        position: "relative",
        left: isLeft ? { md: 0 } : { md: "50%" },
        mb: 7,
        px: { xs: 0, md: 3 },
      }}
    >
      {/* CIRCLE */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -20, md: "50%" },
          transform: { xs: "translateY(0)", md: "translateY(-50%)" },
          left: isLeft ? { xs: -20, md: "auto" } : { xs: -20, md: -35 },
          right: isLeft ? { md: -35 } : "auto",

          width: 65,
          height: 65,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent), var(--accent-dark))",
          color: "#fff",
          fontSize: "1.3rem",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 25px rgba(166,153,249,0.5)",
          zIndex: 3,
        }}
      >
        {number}
      </Box>

      {/* CARD */}
      <Box
        sx={{
          background: "rgba(255,255,255,0.55)",
          borderRadius: "20px",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,216,216,0.5)",
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 5 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md: "1.5rem" },
            fontWeight: 700,
            color: "#000",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Journey;
