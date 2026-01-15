import { Box, Button } from "@mui/material"
import React from "react"
import herosectionrobotvideo from "../../assets/images/home/Comp.mp4"
import heroline from "../../assets/images/home/herolinevideo.mp4"

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: { xs: "100vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          fontFamily: "stack",
        }}
      >
        <Box sx={{ px: { xs: "6vw", md: "10vw" }, width: "100%" }}>
          {/* ================= Heading ================= */}
          <Box
            sx={{
              fontFamily: "beardeys",
              fontSize: { xs: "38px", sm: "48px", md: "64px", lg: "74px" },
              lineHeight: 1.2,
              pb: "20px",
            }}
          >
            Powering
            <Box
              component="video"
              src={heroline}
              autoPlay
              loop
              muted
              playsInline
              sx={{
                display: "inline-block",
                width: { xs: "120px", sm: "160px", md: "200px", lg: "220px" },
                height: { xs: "45px", sm: "60px", md: "70px", lg: "80px" },
                mx: 2,
                borderRadius: "40px",
                verticalAlign: "middle",
                objectFit: "cover",
                marginBottom:"20px"
              }}
            />
            Your Business <br /> with Smart Digital Solutions
          </Box>

          {/* ================= Subheading ================= */}
          <Box
            sx={{
              fontFamily: "stack",
              fontSize: { xs: "16px", sm: "18px", md: "22px", lg: "32px" },
              pb: "30px",
              color: "#444",
            }}
          >
            We deliver reliable, scalable, and modern services designed <br />
            to accelerate your business growth.
          </Box>

          {/* ================= CTA Section ================= */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Video Card */}
            <Box
              sx={{
                height: { xs: 140, md: 170 },
                width: { xs: "100%", sm: 260, md: 300 },
                borderRadius: "100px 100px 0 100px",
                overflow: "hidden",
                bgcolor: "black",
                border: "5px solid black",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            >
              <Box
                component="video"
                src={herosectionrobotvideo}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Button Card */}
            <Box
              sx={{
                height: { xs: 140, md: 170 },
                width: { xs: "100%", sm: 260, md: 300 },
                bgcolor: "#A699F9",
                borderRadius: "100px 100px 100px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  px: { xs: 10, md: 8 },
                  py: { xs: 4, md: 5 },
                  bgcolor: "#FFD8D8",
                  borderRadius: "100px",
                  fontSize: { xs: "16px", md: "22px" },
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#ffcaca",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSection
