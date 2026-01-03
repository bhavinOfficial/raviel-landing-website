import { Box, Grid } from "@mui/material";
import React from "react";

const HomeMainF = () => {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          position: "relative",
          padding: { xs: "8vw 4vw", md: "5vw" },
          bgcolor: "black",
          borderRadius: {
            xs: "0 0 40px 40px", // mobile
            sm: "0 0 60px 60px", // tablet
            md: "0 0 80px 80px", // laptop
            lg: "0 0 100px 100px", // desktop
          },
          fontFamily: "stack",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 5, sm: 8, md: 12, lg: 20 }}
            justifyContent="center"
          >
            {/* CARD 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "#FFD166",
                  borderRadius: "30px",
                  height: {
                    xs: "420px",
                    sm: "500px",
                    md: "500px",
                    lg: "500px",
                    xl: "800px",
                  },
                  // width: { xs: "100%", sm: "100%", md: "90%", lg: "450px" },
                  margin: "auto",
                  padding: { xs: "15px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                    fontWeight: "bold",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Smart Invoice Generator
                </Box>

                <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                  {/* <img src={home43card1} alt="" style={{ width: "80%" }} /> */}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  bgcolor: "#FFD166",
                  borderRadius: "30px",
                  height: {
                    xs: "420px",
                    sm: "500px",
                    md: "500px",
                    lg: "500px",
                    xl: "800px",
                  },
                  // width: { xs: "100%", sm: "100%", md: "90%", lg: "450px" },
                  margin: "auto",
                  padding: { xs: "15px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                    fontWeight: "bold",
                    paddingTop: "10px",
                    textAlign: "center",
                    // width:"50%"
                  }}
                >
                  Payment Collection Dashboard
                </Box>

                <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                  {/* <img src={home43card1} alt="" style={{ width: "80%" }} /> */}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  bgcolor: "#FFD166",
                  borderRadius: "30px",
                  height: {
                    xs: "420px",
                    sm: "500px",
                    md: "500px",
                    lg: "500px",
                    xl: "800px",
                  },
                  // width: { xs: "100%", sm: "100%", md: "90%", lg: "450px" },
                  margin: "auto",
                  padding: { xs: "15px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                    fontWeight: "bold",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Digital Billing System
                </Box>

                <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                  {/* <img src={home43card1} alt="" style={{ width: "80%" }} /> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomeMainF;
