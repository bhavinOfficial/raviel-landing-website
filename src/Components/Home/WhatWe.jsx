import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import home3lineimg from "../../assets/images/home/Line 2.png";
import home3men from "../../assets/images/home/home3men.png";
import home3card from "../../assets/images/home/home3card.png";
import home3mobile from "../../assets/images/home/home3mobile.png";
import home3menwalk from "../../assets/images/home/home3menwalk.png";
// import clockHome from "../../assets/TODOLIST/CLOCK/1.mp4";
import clockHome from "../../assets/TODOLIST/CLOCK/1.mp4";

const WhatWe = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "auto" },
          bgcolor: "black",
          borderRadius: {
            xs: "40px 40px 0 0", // mobile
            sm: "60px 60px 0 0", // tablet
            md: "80px 80px 0 0", // laptop
            lg: "100px 100px 0 0", // desktop
          },
          fontFamily: "stack",
          paddingBottom: { xs: "5vw", md: 0 },
        }}
      >
        <Box
          sx={{
            padding: { xs: "6vw 6vw", md: "5vw 5vw 1vw 5vw" },
            color: "white",
          }}
        >
          {/* TOP SECTION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "40px", md: 0 },
            }}
          >
            {/* LEFT BOX */}
            <Box
              sx={{
                backgroundColor: "#EEE8E0",
                padding: { xs: "20px", md: "20px 70px 20px 20px" },
                borderRadius: {
                  xs: "40px 40px 40px 40px", // mobile
                  md: "100px 0 100px 100px", // desktop
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "20px", md: "30px" },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "150px", sm: "300px", md: "220px" },
                  width: { xs: "150px", sm: "300px", md: "220px" },
                  bgcolor: "white",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <video
                  src={clockHome}
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "beardeys",
                    fontSize: { xs: "8vw", md: "2.5vw" },
                    color: "#a699f9",
                  }}
                >
                  WHAT
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "beardeys",
                    fontSize: { xs: "8vw", md: "2.5vw" },
                    color: "#EEAA1E",
                  }}
                >
                  WE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "beardeys",
                    fontSize: { xs: "8vw", md: "2.5vw" },
                    color: "#000",
                  }}
                >
                  PROVIDE
                </Typography>
              </Box>
            </Box>

            {/* RIGHT BOX */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box sx={{ maxWidth: "100px" }}>
                <img
                  src={home3lineimg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "4vw", md: "1.8vw" },
                  width: { xs: "100%", md: "70%" },
                  lineHeight: { xs: "6vw", md: "2.2vw" },
                }}
              >
                We handle your entire JioMart seller registration — from
                document verification to account activation — so you can start
                selling faster and easier.
              </Typography>
            </Box>
          </Box>

          {/* BOTTOM SECTION */}
          <Box
            sx={{
              marginTop: "5vw",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              {/* CARD 1 */}
              <Grid item xs={6} md="auto">
                <Box
                  sx={{
                    height: {
                      xs: "300px", // mobile
                      sm: "400px", // tablet
                      md: "450px", // laptop/desktop
                    },
                    width: {
                      xs: "160px", // mobile (fits 2 cards in row)
                      sm: "220px", // tablet
                      md: "300px", // laptop/desktop
                    },
                    background: "linear-gradient(145deg, #FFD1D6, #ED9DA0)",
                    borderRadius: "40px 0px 40px 40px",
                    transform: {
                      xs: "rotate(0deg)", // mobile
                      sm: "rotate(5deg)", // tablet
                      md: "rotate(8deg)", // laptop
                      lg: "rotate(10deg)", // desktop
                    },
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    margin: { xs: "0", md: "50px" },
                    padding: "22px",
                    overflow: "hidden",
                    transition: "0.4s",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "rotate(0deg) scale(1.03)",
                      },
                    },
                  }}
                >
                  {/* Title */}
                  <Box
                    sx={{
                      fontSize: "clamp(18px, 1.3vw, 24px)",
                      fontWeight: 700,
                      color: "#2A2141",
                      paddingBottom: "15px",
                      lineHeight: 1.3,
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Product Listing Management
                  </Box>

                  {/* Image */}
                  <Box
                    sx={{
                      height: "70%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-5deg)",
                    }}
                  >
                    <img
                      src={home3men}
                      alt=""
                      style={{
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              {/* CARD 2 */}
              <Grid item xs={6} md="auto">
                <Box
                  sx={{
                    height: {
                      xs: "300px", // mobile
                      sm: "400px", // tablet
                      md: "450px", // laptop/desktop
                    },
                    width: {
                      xs: "160px", // mobile (fits 2 cards in row)
                      sm: "220px", // tablet
                      md: "300px", // laptop/desktop
                    },
                    background: "linear-gradient(145deg, #FFA98A, #E76F51)",
                    borderRadius: "0px 40px 40px 40px",
                    transform: {
                      xs: "rotate(0deg)", // mobile
                      sm: "rotate(-5deg)", // tablet
                      md: "rotate(-8deg)", // laptop
                      lg: "rotate(-10deg)", // desktop
                    },
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    margin: { xs: "0", md: "50px" },
                    padding: "22px",
                    overflow: "hidden",
                    transition: "0.4s",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "rotate(0deg) scale(1.03)",
                      },
                    },
                  }}
                >
                  {/* Title */}
                  <Box
                    sx={{
                      fontSize: "clamp(18px, 1.3vw, 24px)",
                      fontWeight: 700,
                      color: "#2A2141",
                      paddingBottom: "15px",
                      paddingTop: "20px",
                      lineHeight: 1.3,
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Marketplace Commission Advisory
                  </Box>

                  {/* Image */}
                  <Box
                    sx={{
                      height: "80%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-5deg)",
                    }}
                  >
                    <img
                      src={home3card}
                      alt=""
                      style={{
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              {/* CARD 3 (already perfect) */}
              <Grid item xs={6} md="auto">
                <Box
                  sx={{
                    height: {
                      xs: "300px", // mobile
                      sm: "400px", // tablet
                      md: "450px", // laptop/desktop
                    },
                    width: {
                      xs: "160px", // mobile (fits 2 cards in row)
                      sm: "220px", // tablet
                      md: "300px", // laptop/desktop
                    },
                    background: "linear-gradient(145deg, #CFC4FF, #B8A9F0)",
                    borderRadius: "40px 0px 40px 40px",
                    transform: {
                      xs: "rotate(0deg)", // mobile
                      sm: "rotate(5deg)", // tablet
                      md: "rotate(8deg)", // laptop
                      lg: "rotate(10deg)", // desktop
                    },
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    margin: { xs: "0", md: "50px" },
                    padding: "22px",
                    overflow: "hidden",
                    transition: "0.4s",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "rotate(0deg) scale(1.03)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "clamp(18px, 1.3vw, 24px)",
                      fontWeight: 700,
                      color: "#2A2141",
                      paddingBottom: "15px",
                      lineHeight: 1.3,
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Trademark Registration & Brand Protection
                  </Box>

                  <Box
                    sx={{
                      height: "70%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-5deg)",
                    }}
                  >
                    <img
                      src={home3mobile}
                      alt=""
                      style={{
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              {/* CARD 4 */}
              <Grid item xs={6} md="auto">
                <Box
                  sx={{
                    height: {
                      xs: "300px", // mobile
                      sm: "400px", // tablet
                      md: "450px", // laptop/desktop
                    },
                    width: {
                      xs: "160px", // mobile (fits 2 cards in row)
                      sm: "220px", // tablet
                      md: "300px", // laptop/desktop
                    },
                    background: "linear-gradient(145deg, #FFE9A5, #FFD166)",
                    borderRadius: "0px 40px 40px 40px",
                    transform: {
                      xs: "rotate(0deg)", // mobile
                      sm: "rotate(-5deg)", // tablet
                      md: "rotate(-8deg)", // laptop
                      lg: "rotate(-10deg)", // desktop
                    },

                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    margin: { xs: "0", md: "50px" },
                    padding: "22px",
                    overflow: "hidden",
                    transition: "0.4s",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "rotate(0deg) scale(1.03)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "clamp(18px, 1.3vw, 24px)",
                      fontWeight: 700,
                      color: "#2A2141",
                      paddingBottom: "15px",
                      lineHeight: 1.3,
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Smart Image Optimizer
                  </Box>

                  <Box
                    sx={{
                      height: "70%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-5deg)",
                    }}
                  >
                    <img
                      src={home3menwalk}
                      alt=""
                      style={{
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhatWe;
