import { Box, Button } from "@mui/material";
import React from "react";

const Demo = () => {
  return (
    <>
      {/* RED FIXED HEADER */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          bgcolor: "#F7F5EF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "0",
        }}
      >
        <Box sx={{textAlign:"center",fontFamily:"stack"}}>
          <Box sx={{fontFamily:"beardeys",fontSize:"3vw",paddingBottom:"20px",width:"70%",lineHeight:"65px",margin:"auto"}}>We’re trusted by PROFESSIONALS</Box>
          <Box sx={{fontSize:"1.2vw",paddingBottom:"20px"}}>
            Learn why professionals trust our solutions to complete their
            customer journeys.
          </Box>
          <Box>
                      <Button
                        sx={{
                          backgroundColor: "#A699F9",
                          color: "#000",
                          fontSize:"1.1vw",
                          px: 4,
                          py: 1.3,
                          borderRadius: "12px",
                          textTransform: "none",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            backgroundColor: "#8f84e8",
                            color: "#fff",
                          },
                        }}
                      >
                        Read success stories
                      </Button>
          </Box>
        </Box>
      </Box>

      {/* SCROLLABLE CONTENT */}
      <Box
        sx={{
          marginTop: "100vh", // pushes blue below the full-screen red
          height: "100vh", // long enough to scroll
          width: "100%",
          bgcolor: "#0b0b0bff",
          display: "flex",
          borderRadius:"50px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        hello (scrolling blue)
      </Box>
    </>
  );
};

export default Demo;
