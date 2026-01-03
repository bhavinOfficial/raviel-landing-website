import { useGSAP } from "@gsap/react";
import { Box, Button } from "@mui/material";
import gsap from "gsap";
import React, { useRef } from "react";
import menhero from "../../assets/images/home/menhero.png";
import leavesvideo from "../../assets/images/home/hello.mp4";
import robot from "../../assets/images/home/Comp.mp4";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import rightArow from "../../assets/images/home/rightarrow.png"

const HeroSection = () => {
  const leftWhiteBox = useRef(null);
  const rightYellowBox = useRef(null);
  const bottomLeftBox = useRef(null);
  const bottomRightBox = useRef(null);
  const heromen = useRef(null);

  useGSAP(() => {
    // 4 Boxes
    const box1 = leftWhiteBox.current;
    const box2 = rightYellowBox.current;
    const box3 = bottomLeftBox.current;
    const box4 = bottomRightBox.current;
    const newheromen = heromen.current;

    const allBoxes = [box1, box2, box3, box4];

    // 🟦 LOAD ANIMATION TIMELINE
    const tl = gsap.timeline({ delay: 0.3, ease: "power3.out" });

    tl.from(allBoxes, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.5,
    });

    tl.from(newheromen, {
      opacity: 0,
      duration: 2.5,
      scale: 0.9,
      ease: "elastic.out(1,0.3)",
    });
    // ------------------------------
    // 🔥 BOX INTERACTIONS
    // ------------------------------

    const onEnter = (target) => {
      gsap.to(target, {
        scale: 1.1,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.35)",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onLeave = (target) => {
      gsap.to(target, {
        scale: 1,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.25)",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onDown = (target) => {
      gsap.to(target, {
        scale: 0.96,
        boxShadow: "0px 12px 30px rgba(0,0,0,0.45)",
        duration: 0.15,
      });
    };

    const onUp = (target) => {
      gsap.to(target, {
        scale: 1.1,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.35)",
        duration: 0.2,
      });
    };

    // Add events to all 4 boxes
    allBoxes.forEach((bx) => {
      if (!bx) return;

      bx.style.transition = "transform 0.2s ease";

      bx.addEventListener("mouseenter", () => onEnter(bx));
      bx.addEventListener("mouseleave", () => onLeave(bx));
      bx.addEventListener("mousedown", () => onDown(bx));
      bx.addEventListener("mouseup", () => onUp(bx));
    });
  });



  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          height: { xs: "auto", sm: "75vh" },
          px: { xs: 2, sm: 0 },
          py: { xs: 4, sm: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            position: "relative",
            zIndex: "1",
          }}
        >
          {/* 🔵 TOP SECTION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              gap: { xs: 2, sm: 3 },
              width: "100%",
              height: { xs: "auto", sm: "350px" },
              mb: { xs: 3, sm: 3 },
            }}
          >
            {/* LEFT WHITE BOX */}
            <Box
              ref={leftWhiteBox}
              sx={{
                width: { xs: "100%", sm: "50%" },
                height: { xs: "170px", sm: "100%" },
                bgcolor: "white",
                borderRadius: {
                  xs: "200px 0 200px 0px",
                  sm: "50px 0 50px 50px",
                  md: "50px 0 50px 50px",
                },
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                alignItems: "flex-end",
                px: { xs: 3, sm: 5 },
                py: { xs: 2, sm: 3 },
              }}
            >
              <Box>
                <Box
                  sx={{
                    height: "2px",
                    width: { xs: "120px", sm: "180px", md: "200px" },
                    bgcolor: "black",
                    mb: { xs: 1.5, sm: 2 },
                  }}
                ></Box>

                <Box
                  sx={{
                    fontSize: { xs: "11px", sm: "15px", md: "22px" },
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  Empowering Local Sellers to Go Online.
                </Box>
              </Box>
            </Box>

            {/* RIGHT YELLOW BOX */}

            <Box
              ref={rightYellowBox}
              sx={{
                width: { xs: "100%", sm: "45%" },
                height: { xs: "160px", sm: "100%" },
                overflow: "hidden",
                borderRadius: "0px 200px 0px 200px",
              }}
            >
              <video
                muted // MUST BE FIRST
                autoPlay
                loop
                playsInline
                preload="auto"
                src={leavesvideo}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          {/* 🔵 BOTTOM SECTION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: "20px" },
              width: "100%",
              height: { xs: "auto", sm: "150px" },
            }}
          >
            {/* LEFT IMAGE BOX */}
            <Box
              ref={bottomLeftBox}
              sx={{
                width: { xs: "100%", sm: "35%" },
                height: { xs: "180px", sm: "100%" },
                borderRadius: {
                  xs: "0 200px 0 200px",
                  sm: "50px 50px 50px 0px",
                  md: "50px 50px 50px 0px",
                },
                overflow: "hidden",
                bgcolor: "white",
                // paddingBottom:"1000px".
              }}
            >
              <Box>
                <video
                  src={robot}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    transform: "scal(100px)",
                  }}
                ></video>
              </Box>
            </Box>

            {/* RIGHT PURPLE BOX */}
            <Box
              ref={bottomRightBox}
              sx={{
                width: { xs: "100%", sm: "60%" },
                height: { xs: "120px", sm: "100%" },
                bgcolor: "#A699F9",
                borderRadius: {
                  xs: "200px 0px 200px 0px",
                  sm: "50px",
                  md: "50px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-end" },
                pr: { sm: 3 },
                gap: { xs: "10px", sm: "20px", md: "25px" }

              }}
            >
              <Box sx={{width:"200px"}}>
                {/* <ArrowRightAltIcon sx={{fontSize:{ xs: "10vw", sm: "7ve", md: "10vw" }}}/> */}
                <img src={rightArow} alt="" />
              </Box>
              <Link to="/Payment" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "black",
                  bgcolor: "#FFD8D8",
                  borderRadius: "50px",
                  padding: {
                    xs: "12px 28px",
                    sm: "50px 40px",
                    md: "45px 50px",
                  },
                  fontSize: { xs: "14px", sm: "14px", md: "1.1vw" },
                  fontWeight: 600,
                  textTransform: "none",
                  transition: "all 0.3s ease",

                  boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
                  "&:hover": {
                    bgcolor: "#ffc4c4",
                    transform: "translateY(-3px)",
                    boxShadow: "0px 8px 25px rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
                Get Started
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          ref={heromen}
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: "0",
            userSelect: "none",

            "@media (min-width:1700px)": {
              right: "200px",
            },
            "@media (max-width:1820px)": {
              right: "100px",
            },
            "@media (max-width:1750px)": {
              right: "50px",
            },
            "@media (max-width:1600px)": {
              right: "0px",
            },
            "@media (max-width:1500px)": {
              right: "-50px",
            },
            // Show only when width >= 1000px
            "@media (min-width:1350px)": {
              display: "block",
            },

            // Custom: Show from 1000px to 1200px also
            "@media (max-width:1350px)": {
              display: "none",
            },
          }}
        >
          <img src={menhero} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
