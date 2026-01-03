import { Box } from "@mui/material";
import React, { useRef } from "react";
import Heartabout from "../../assets/images/About/Embrace of Pastel Shapes 1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const HeartAbout = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    /* -------------------------
       Text Animation 1 (heading)
    --------------------------*/
    const el = textRef.current;
    const words = el.innerText.split(" ");
    el.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    /* -----------------------------
       Text Animation 2 (paragraph)
    ------------------------------*/
    const el2 = textRef2.current;
    const words2 = el2.innerText.split(" ");
    el2.innerHTML = words2
      .map((word) => `<span class="word2">${word}</span>`)
      .join(" ");

    // Initial states
    gsap.set(".word", { opacity: 0, y: 20 });
    gsap.set(".word2", { opacity: 0, y: 20 });

    // Animate heading words
    gsap.to(".word", {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      ease: "power2.out",
      duration: 1.5,

    });

    // Animate paragraph words
    gsap.to(".word2", {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      ease: "power2.out",
      duration: 1,

    });

    /* -------------------------
       Image Animation
    --------------------------*/
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power2.out",

      }
    );
  }, []);

  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      {/* main */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "flex-start", md: "space-between" },
          alignItems: "center",
          padding: {
            xs: "20px 16px",
            sm: "30px 24px",
            md: "40px 50px",
            lg: "50px 80px",
          },
        }}
      >
        {/* left */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
            ref={textRef}
            sx={{
              fontSize: {
                xs: "7vw",
                sm: "5vw",
                md: "3.5vw",
              },
              fontFamily: "beardeys",
              padding: "20px 0",
              lineHeight: {
                xs: "40px",
                sm: "55px",
                md: "60px",
                lg: "70px",
              },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Crafting unseen digital pathways that elevate every seller’s silent
            victories.
          </Box>

          <Box
            ref={textRef2}
            sx={{
              fontSize: {
                xs: "3.5vw",
                sm: "2.5vw",
                md: "1.5vw",
                lg: "1.2vw",
              },
              textAlign: { xs: "center", md: "start" },
              mt: 2,
              fontFamily:"stack"
            }}
          >
            We develop intelligent digital solutions that operate seamlessly in
            the background—automating processes, refining accuracy, and
            elevating overall performance. Our system simplifies the most
            complicated parts of e-commerce, ensuring your business runs faster,
            smoother, and with fewer errors. From order management to data
            insights, every feature is crafted to support your growth and give
            you complete clarity without the stress of manual work. With our
            systems handling the heavy lifting, you gain more time, more
            control, and more opportunities to focus on selling and expanding
            your online presence.
          </Box>
        </Box>

        {/* right image */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
          <Box
            ref={imgRef}
            sx={{
              width: {
                xs: "100%",
                sm: "90%",
                md: "500px",
                lg: "700px",
              },
              margin: "0 auto",
            }}
          >
            <img
              src={Heartabout}
              alt=""
              style={{
                width: "100%",
                display: "block",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeartAbout;
