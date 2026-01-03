import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import cardhero1 from "../../assets/images/cards/CardHero1.png";
import cardhero2 from "../../assets/images/cards/CardHero4.svg";
import cardhero3 from "../../assets/images/cards/CardHero3.png";

const SellerGrowthIntelligence = () => {
  const [activeStep, setActiveStep] = useState(1);
  const intervalRef = useRef(null);

  const stepImages = {
    1: cardhero1,
    2: cardhero2,
    3: cardhero3,
  };

  const stepContent = {
    1: {
      title: "Seller Essentials",
      desc: "Essential tools for new sellers to manage daily operations smoothly.",
    },
    2: {
      title: "Pro Access",
      desc: "A professional toolkit crafted to boost productivity and results.",
    },
    3: {
      title: "Quarter Prime",
      desc: "A value-packed quarter designed to support uninterrupted business progress.",
    },
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2500);
  };

  const stopAutoPlay = () => clearInterval(intervalRef.current);

  const handleStepClick = (num) => {
    stopAutoPlay();
    setActiveStep(num);
    startAutoPlay();
  };
  

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 18 },
        backgroundColor: "#EFEAE1",
        fontFamily: "stack",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", lg: "center" },
          height: { xs: "auto", lg: "80vh" },
          gap: { xs: 5, md: 0 },
          py: { xs: 6, md: 0 },
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Box
          sx={{
            width: { xs: "100%", lg: "40%" },
            textAlign: { xs: "center", md: "center", lg: "left" }, // ⭐ Center text on small screens
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }, // ⭐ Center content on small screens
            paddingBottom: { xs: "0px", sm: "50px", md: "50px", lg: "0" },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "8vw", sm: "6vw", md: "4vw", lg: "3vw" },
              fontFamily: "beardeys",
              pb: 3,
              width: { xs: "100%", md: "100%", lg: "100%", xl: "70%" },
            }}
          >
            Seller Growth Intelligence
          </Box>

          <Box
            sx={{
              fontSize: { xs: "4vw", sm: "2.5vw", md: "2vw", lg: "1vw" },
              width: { xs: "100%", md: "100%", lg: "70%" },
            }}
          >
            Designed to accelerate your selling journey with smart automation.
          </Box>
        </Box>

        {/* RIGHT CARD SECTION */}
        <Box
          sx={{
            width: { xs: "100%", md: "90%", lg: "821px" },
            display: "flex",
            justifyContent: { xs: "center", lg: "flex-end", xl: "flex-end" },
            alignItems: "center !importent",
          }}
        >
          <Box
            sx={{
              height: { xs: "450px", sm: "520px", md: "600px", lg: "688px" },
              width: { xs: "100%", sm: "95%", md: "90%", lg: "821px" },
              background:
                "linear-gradient(180deg, #D5CAFF 22.78%, rgba(213, 202, 255, 0.8) 53.65%, rgba(213, 202, 255, 0.6) 78.47%)",
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: "50px",
              position: "relative",
            }}
          >
            {/* DYNAMIC TEXT */}
            <Box
              sx={{
                fontSize: { xs: "6vw", sm: "4.5vw", md: "2.5vw", lg: "2vw" },
                pb: 2,
                width: "80%",
              }}
            >
              {stepContent[activeStep].title}
            </Box>
            {/* RIGHT SIDE IMAGE */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "20px", md: "50px" },
                left: { xs: "20px", md: "20px" },
                width: { xs: "90%", sm: "60%", md: "55%", lg: "70%" },
                pointerEvents: "none", // prevents click issues
              }}
            >
              <Box
                component="img"
                src={stepImages[activeStep]}
                alt="Seller growth illustration"
                key={activeStep} // 🔥 important for smooth re-render
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  userSelect: "none",
                  transition: "0.4s ease",
                  opacity: 1,
                }}
              />
            </Box>

            <Box
              sx={{
                fontSize: { xs: "3.5vw", sm: "2.5vw", md: "1.2vw", lg: "1vw" },
                width: "80%",
              }}
            >
              {stepContent[activeStep].desc}
            </Box>

            {/* NUMBER BUTTONS */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "5%", md: "8%" },
                right: { xs: "5%", md: "8%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[1, 2, 3].map((num) => (
                <Box
                  key={num}
                  onClick={() => handleStepClick(num)}
                  sx={{
                    p: { xs: "12px 15px", md: "20px 25px" },
                    borderRadius: "50%",
                    m: { xs: "5px", md: "10px" },
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "0.3s",
                    fontSize: { xs: "3vw", sm: "2vw", md: "1vw" },

                    bgcolor: activeStep === num ? "white" : "transparent",
                    border:
                      activeStep === num
                        ? "2px solid white"
                        : "2px solid black",
                    boxShadow:
                      activeStep === num
                        ? "0px 0px 15px rgba(0,0,0,0.25)"
                        : "none",

                    "&:hover": {
                      bgcolor: "white",
                      border: "2px solid white",
                    },
                  }}
                >
                  {num}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SellerGrowthIntelligence;
