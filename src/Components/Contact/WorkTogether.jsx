import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const WorkTogether = () => {
  const sectionRef = useRef(null);
    const navigate = useNavigate();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub:true
      },
    });
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "#F1EAE3",
        textAlign: { xs: "center", md: "left" },
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 4, sm: 6, md: 8 },
        borderRadius: { xs: "20px", md: "30px" },
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Stack, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "7vw", sm: "5vw", md: "3vw" },
          mb: 2,
        }}
      >
        Let’s work together
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Stack, sans-serif",
          fontSize: { xs: "4vw", sm: "2.6vw", md: "1.2vw" },
          maxWidth: { md: "1500px" },
          mx: { xs: "auto", md: "0" },
          lineHeight: 1.5,
          mb: 4,
        }}
      >
        “Whether you're a new seller looking to set up your online store or an
        established brand aiming to optimize operations, we're here to provide
        reliable, end-to-end e-commerce services that help your business scale.”
      </Typography>

      {/* Button */}
      <Button
              onClick={() => navigate("/Payment")}
        variant="contained"
        sx={{
          bgcolor: "#E5DBD0",
          color: "#000",
          fontSize: { xs: "4vw", sm: "2.3vw", md: "1.1vw" },
          px: { xs: 4, sm: 5, md: 6 },
          py: { xs: 1.5, md: 2 },
          borderRadius: "20px",
          textTransform: "none",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          "&:hover": {
            bgcolor: "#D6CCC4",
            transform: "translateY(-3px)",
            transition: "0.3s ease",
          },
        }}
      >
        Let’s start
      </Button>
    </Box>
  );
};

export default WorkTogether;
