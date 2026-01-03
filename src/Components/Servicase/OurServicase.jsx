import { Box } from "@mui/material";
import React from "react";
import roketVideo from "../../assets/images/rocket.mp4";

const OurServicase = () => {
  return (
    <Box sx={{ position: "relative", py: { xs: 4, md: 8 } }}>
      
      {/* Title */}
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          bgcolor: "#B8A9F0",
          px: 3,
          py: 2,
          fontSize: { xs: "6vw", sm: "4vw", md: "2.5vw" },
          fontFamily: "beardeys",
          borderRadius: "40px",
          maxWidth: "600px",
        }}
      >
        Our Services
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          mt: { xs: 4, md: 6 },
          // gap: { xs: 4, md: 0 },
          fontFamily: "stack",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Left Content Area */}
        <Box sx={{ width: "100%", maxWidth: "500px" }}>
          
          {/* Top Text Box */}
          <Box
            sx={{
              // bgcolor: "white",
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: "30px",
            }}
          >
            <Box sx={{ pb: 2, fontSize: { xs: "4.5vw", sm: "3vw", md: "1.8vw" } ,fontWeight:"bold"}}>
              Solutions That Drive Success
            </Box>

            <Box
              sx={{
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                lineHeight: 1.4,
              }}
            >
              Our services are built for sellers who expect more—more accuracy, more
              efficiency, and more growth. By combining automation, intelligence,
              and streamlined workflows, we eliminate complexity and deliver a
              smooth, end-to-end experience.
            </Box>
          </Box>
        </Box>

        {/* Right Video Section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "50%" },
            maxWidth: "620px",
            border: "2px solid black",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <video
            src={roketVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurServicase;
