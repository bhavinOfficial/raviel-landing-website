import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import herosectionvideo from "../../assets/images/home/Comp.mp4"
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          mx: { xs: 2, sm: 4, md: 8, lg: 12 },
          height: { xs: "auto", md: "85vh" },
          fontFamily: "stack",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}
      >

        {/* ================= Text Section ================= */}
        <Box sx={{ textAlign: "center", pt: { xs: 3, md: 4 } }}>
          
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "55px", lg: "65px" },
              fontFamily: "beardeys",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Powering Your Business with Smart Digital Solutions
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "22px" },
              maxWidth: "900px",
              mx: "auto",
              mb: 3,
            }}
          >
            We deliver reliable, scalable, and modern services designed
            to accelerate your business growth.
          </Typography>

          {/* ================= Button ================= */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                px: { xs: 2, md: 2.5 },
                py: { xs: 1, md: 1.2 },
                borderRadius: "999px",
                background: "#ffffff",
                color: "#000",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                textTransform: "none",
                '&:hover': { background: "#f5f5f5" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 36, md: 42 },
                  height: { xs: 36, md: 42 },
                  borderRadius: "50%",
                  background: "#D9F2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FlagCircleIcon />
              </Box>

              <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: 600 }}>
                Start now
              </Typography>
            </Button>
          </Box>
        </Box>

        {/* ================= Video Section ================= */}
        <Box
          sx={{
            height: { xs: "220px", sm: "320px", md: "70%" },
            borderRadius: { xs: "24px", md: "50px" },
            overflow: "hidden",
          }}
        >
          <video
            src={herosectionvideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

      </Box>
    </>
  )
}

export default HeroSection
