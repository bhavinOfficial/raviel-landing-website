import { Box } from "@mui/material";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import servicasepartner from "../../assets/images/servicase/partnerservicase.png";
import womenServicase from "../../assets/images/servicase/undraw_legal-counsel_kdnh 1.png";
import servicaselast from "../../assets/images/servicase/undraw_file-search_cbur 1.png";

gsap.registerPlugin(ScrollTrigger);

const MainServicase = () => {
  const containerRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([card1.current, card2.current, card3.current], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
        opacity: 0,
        x: 200,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Box
        ref={containerRef}
        sx={{
            overflow:"hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", md: "space-around" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 3, sm: 4, md: 5 },
          width: "100%",
          height: {
            xs: "auto", // Mobile - auto height to avoid scroll issue
            sm: "auto", // Tablet - auto height
            md: "100vh", // Desktop & bigger screens - full height
          },
          bgcolor: "#EFE9E2",
          padding: "50px",
          fontFamily: "stack",
        }}
      >
        {/* left */}
        <Box
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
          ref={card1}
        >
          <Box
            sx={{
              border: "2px solid black",
              borderRadius: "50px",
              padding: {
                xs: "15px",
                sm: "20px",
                md: "25px",
                lg: "30px",
              },
              textAlign: "center",
            }}
          >
            <Box>
              <img src={servicasepartner} alt="" />
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "5vw",
                  sm: "4vw",
                  md: "3vw",
                  lg: "2vw",
                },
                padding: "20px",
              }}
            >
              Partner Dashboard
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                margin: "auto",
                fontSize: {
                  xs: "3.5vw",
                  sm: "2.5vw",
                  md: "1.8vw",
                  lg: "1vw",
                },
              }}
            >
              Only for JioMart Partners. Upload your daily or weekly Excel files
              and instantly receive a detailed dashboard that summarizes your
              orders, returns, cancellations, payments, and settlements.
            </Box>
          </Box>
        </Box>

        {/* Right */}
        <Box>
          {/* top */}
          <Box sx={{ paddingBottom: "30px" }} ref={card2}>
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "50px",
                padding: {
                  xs: "15px",
                  sm: "10px",
                  md: "25px",
                  lg: "20px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "space-around",
                  md: "space-between",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: {
                  xs: "15px",
                  sm: "20px",
                  md: "30px",
                  lg: "40px",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "250px", // Mobile
                    sm: "300px", // Tablets
                    md: "350px", // Laptops
                    lg: "400px", // Large screens (optional)
                  },
                }}
              >
                <img src={womenServicase} alt="" />
              </Box>
              <Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "5vw",
                      sm: "4vw",
                      md: "3vw",
                      lg: "2vw",
                    },
                    paddingBottom: "20px",
                  }}
                >
                  Listing Tool
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "3.5vw", // Mobile (bigger for readability)
                      sm: "2.5vw", // Tablets
                      md: "1.5vw", // Medium screens
                      lg: "1.1vw", // Large screens
                    },
                  }}
                >
                  Create thousands of product listings effortlessly by adding
                  only the basic details.
                </Box>
              </Box>
            </Box>
          </Box>

          {/* bottom */}
          <Box sx={{ paddingBottom: "30px" }} ref={card3}>
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "50px",
                padding: {
                  xs: "15px",
                  sm: "10px",
                  md: "25px",
                  lg: "20px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "space-around",
                  md: "space-between",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: {
                  xs: "15px",
                  sm: "20px",
                  md: "30px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "5vw",
                      sm: "4vw",
                      md: "3vw",
                      lg: "2vw",
                    },
                    paddingBottom: "20px",
                  }}
                >
                  Payment Collection
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "3.5vw", // Mobile (bigger for readability)
                      sm: "2.5vw", // Tablets
                      md: "1.5vw", // Medium screens
                      lg: "1.1vw", // Large screens
                    },
                  }}
                >
                  View all your collected and pending payments in a clean table.
                </Box>
              </Box>
              <Box
                sx={{
                  width: {
                    xs: "250px", // Mobile
                    sm: "300px", // Tablets
                    md: "350px", // Laptops
                    lg: "400px", // Large screens (optional)
                  },
                }}
              >
                <img src={servicaselast} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainServicase;
