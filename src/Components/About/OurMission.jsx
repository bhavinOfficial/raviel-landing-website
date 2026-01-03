import { Box } from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  // 🔥 UNIQUE REFS
  const missionContainerRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionTextRef = useRef(null);

  useGSAP(() => {
    // 🌟 MAIN CARD ANIMATION
    gsap.from(missionContainerRef.current, {
      opacity: 0,
      y: 80,
      scale: 0.9,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionContainerRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });

    // 🌟 SOFT GLOW PULSE
    gsap.to(missionContainerRef.current, {
      boxShadow: "0px 0px 40px rgba(184,169,240,0.7)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: missionContainerRef.current,
        start: "top 70%",
        end: "bottom 40%",
      },
    });

    // 🌟 HEADING ANIMATION
    gsap.from(missionHeadingRef.current, {
      opacity: 0,
      y: 30,
      letterSpacing: "-4px",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: missionHeadingRef.current,
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      },
    });

    // 🌟 SPLIT TEXT WORD BY WORD
    const words = missionTextRef.current.innerText.split(" ");
    missionTextRef.current.innerHTML = words
      .map(
        (w, i) =>
          `<span class="missionWord${i}" style="opacity:0; display:inline-block; transform: translateY(20px); margin-right:6px;">${w}</span>`
      )
      .join(" ");

    // Animate each word separately with unique selectors
    words.forEach((_, i) => {
      gsap.to(`.missionWord${i}`, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        delay: i * 0.05,
        scrollTrigger: {
          trigger: missionTextRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });
    });
  });

  return (
    <Box sx={{ padding: "20px", fontFamily: "stack" }}>
      <Box
        ref={missionContainerRef}
        sx={{
          bgcolor: "#B8A9F0",
          width: "100%",
          padding: "40px",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        {/* HEADING */}
        <Box
          ref={missionHeadingRef}
          sx={{
            fontFamily: "beardeys",
            fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
            paddingBottom: "20px",
          }}
        >
          OUR MISSION
        </Box>

        {/* TEXT */}
        <Box
          ref={missionTextRef}
          sx={{
            fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
          }}
        >
          To power the world’s most important workflows.
        </Box>
      </Box>
    </Box>
  );
};

export default OurMission;
