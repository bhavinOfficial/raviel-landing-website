import { Box } from "@mui/material";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ---- CUSTOM SPLIT TEXT ---- //
const splitWords = (element) => {
  const text = element.innerText.trim();
  const words = text.split(" ");

  element.innerHTML = words
    .map((w) => `<span class="word">${w}</span>`)
    .join(" ");

  return element.querySelectorAll(".word");
};

const OurStory = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Para 1
        const para1 = document.querySelector(".story-para-1");
        const words1 = splitWords(para1);

        gsap.from(words1, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: para1,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        });

        // Para 2
        const para2 = document.querySelector(".story-para-2");
        const words2 = splitWords(para2);

        gsap.from(words2, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: para2,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef} sx={{ padding: "20px" }}>
      {/* Title */}
      <Box
        className="story-title"
        sx={{
          width: { xs: "90%", md: "600px" },
          textAlign: "center",
          fontSize: { xs: "6vw", md: "2vw" },
          padding: "20px",
          fontFamily: "beardeys",
          bgcolor: "#EF6454",
          borderRadius: "50px",
          margin: "20px auto",
        }}
      >
        Our Story
      </Box>

      {/* Content Box */}
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          borderRadius: "50px",
          padding: "20px",
        }}
      >
        {/* Para 1 */}
        <Box
          className="story-para-1"
          sx={{
            fontFamily: "stack",
            fontSize: { xs: "3.5vw", md: "1vw" },
            marginBottom: "20px",
            lineHeight: 1.7,
          }}
        >
          Our journey began with a simple observation: sellers were spending
          more time managing systems than growing their business. We saw
          talented entrepreneurs struggling with complex dashboards, scattered
          data, slow processes, and endless manual work. Instead of letting
          technology empower them, it was slowing them down. So we set out to
          change that.
        </Box>

        {/* Para 2 */}
        <Box
          className="story-para-2"
          sx={{
            fontFamily: "stack",
            fontSize: { xs: "3.5vw", md: "1vw" },
            lineHeight: 1.7,
          }}
        >
          What started as a small idea soon grew into a mission — to build
          intelligent, invisible digital systems that quietly handle the heavy
          lifting. We wanted to create a space where sellers could focus on what
          truly matters: their products, their customers, and their growth. With
          every solution we developed, our purpose became clearer: make online
          selling effortless. Today, our platform powers smoother operations,
          sharper accuracy,          smarter decisions for sellers across multiple
          marketplaces. And while our technology continues to evolve, one thing
          has never changed — our commitment to helping every seller succeed,
          quietly and confidently, behind the scenes.
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
