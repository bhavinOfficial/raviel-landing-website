import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import aboutEnergy from "../../assets/images/About/svgviewer-output 1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurVisionAbout = () => {
  const ourvision = useRef(null);
  const ourvision2 = useRef(null);
  const imgBoxRef = useRef(null);

  useGSAP(() => {
    const el = ourvision.current;

    // Split words
    const aboutlast = el.innerText.split(" ");
    el.innerHTML = aboutlast
      .map((w) => `<span class="aboutlast">${w}</span>`)
      .join(" ");

    // Initial state
    gsap.set(".aboutlast", { opacity: 0, y: 20 });

    // Scroll-controlled animation
    gsap.to(".aboutlast", {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ourvision.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        markers: false,
      },
    });

    const el2 = ourvision2.current;

    // Split words correctly
    const aboutlast2 = el2.innerText.split(" ");
    el2.innerHTML = aboutlast2
      .map((w) => `<span class="aboutlast2">${w}</span>`)
      .join(" ");

    // Initial state
    gsap.set(".aboutlast2", { opacity: 0, y: 20 });

    // Scroll-controlled animation
    gsap.to(".aboutlast2", {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ourvision2.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.from(imgBoxRef.current, {
      opacity: 0,
      scale: 0.7,
      rotate: -8,
      y: 40,
      filter: "blur(12px)",
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgBoxRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Floating loop animation (premium effect)
    gsap.to(imgBoxRef.current, {
      y: -10,
      duration: 2.5,
      ease: "ease.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px 16px",
            sm: "30px 24px",
            md: "40px 50px",
            lg: "50px 80px",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, md: 8 },
          width: "100%",
          fontFamily: "stack",
        }}
      >
        {/* IMAGE BOX */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            ref={imgBoxRef}
            sx={{
              height: { xs: "280px", sm: "330px", md: "420px", lg: "450px" },
              width: { xs: "320px", sm: "380px", md: "460px", lg: "500px" },
              bgcolor: "#B8A9F0",
              borderRadius: "40px",
              padding: { xs: "20px", sm: "30px", md: "40px" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* INNER FLEX BOX */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                gap: 2,
              }}
            >
              {/* LEFT TEXT */}
              <Box sx={{ width: "60%" }}>
                <Box
                  sx={{
                    fontFamily: "beardeys",
                    fontSize: { xs: "4vw", sm: "3vw", md: "1.5vw" },
                    paddingBottom: "10px",
                  }}
                >
                  OUR VISION
                </Box>

                <Box
                  sx={{
                    fontSize: { xs: "5.5vw", sm: "4vw", md: "1.8vw" },
                    lineHeight: { xs: "6vw", sm: "4.5vw", md: "2.2vw" },
                    fontWeight: "bold",
                  }}
                >
                  To shape the
                  <br />
                  future of
                  <br />
                  effortless
                  <br />
                  commerce.
                </Box>
              </Box>

              {/* RIGHT IMAGE */}
              <Box
                sx={{
                  width: { xs: "60px", sm: "70px", md: "80px", lg: "90px" },
                  position: "absolute",
                  bottom: "8%",
                  right: "8%",
                }}
              >
                <img
                  src={aboutEnergy}
                  alt=""
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* TEXT BOX */}
        <Box sx={{ borderLeft: "2px solid black" }}>
          <Box
            sx={{
              paddingLeft: "20px",
              fontFamily: "stack",
              maxWidth: "600px", // center properly
              textAlign: "start", // center text
              fontSize: {
                xs: "3.5vw",
                sm: "2.5vw",
                md: "1.3vw",
                lg: "1.1vw",
              },
            }}
          >
            <Box>
              <Typography
                ref={ourvision}
                sx={{
                  fontSize: { xs: "3.5vw", sm: "2.5vw", md: "1vw" },
                  marginBottom: "20px",
                  fontFamily: "stack",
                }}
              >
                Our vision is to redefine the future of e-commerce by creating
                intelligent, effortless, and fully automated digital systems
                that empower every seller—no matter their size—to grow with
                confidence. We aim to build a world where technology silently
                supports success, simplifies complexity, and helps businesses
                achieve more with less effort.
              </Typography>

              <Typography
                ref={ourvision2}
                sx={{
                  fontSize: { xs: "3.5vw", sm: "2.5vw", md: "1vw" },
                  fontFamily: "stack",
                }}
              >
                We envision a marketplace where every seller has access to tools
                that transform operations into seamless experiences, where
                decisions are driven by accurate insights, and where growth is
                not limited by technical challenges. By harnessing the power of
                automation, analytics, and intelligent systems, we strive to
                make online selling accessible, efficient, and rewarding for
                all.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurVisionAbout;
