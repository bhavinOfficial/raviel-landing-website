import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SliderLearn = () => {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Grid
          spacing={2}
          container={false}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <Grid key={i} item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  position: "relative",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "500px",
                    lg: "500px",
                    xl: "800px",
                  },
                  height: { xs: "250px", sm: "400px", md: "500px" },
                  borderRadius: "30px",
                  overflow: "hidden",
                  mx: "auto",
                }}
              >
                {/* Image */}
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(65%)", // Full image darker
                  }}
                  src="https://imgs.search.brave.com/LniR-mcqnOwrHRvxiwBUcBJ9vH9_ard_ySQd0uH4sUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/NDMyODA4L3Bob3Rv/L21lcmNlZGVzLWYx/LXcwNi1oeWJyaWQt/Zm9ybXVsYS0xLXJh/Y2UtY2FyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ETXF1/eFpVRjFqUlo5Y0du/LXdmWW1FTWpkaG80/bExZVm9YRFJMMXhP/THN3PQ"
                  alt=""
                />

                {/* Extra Dark Bottom Layer */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "65%",
                    background: `
                      linear-gradient(
                        to top,
                        rgba(0,0,0,1) 0%,
                        rgba(0,0,0,0.85) 35%,
                        rgba(0,0,0,0.4) 70%,
                        rgba(0,0,0,0) 100%
                      )
                    `,
                  }}
                />

                {/* Text Content */}
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "white",
                    fontSize: { xs: "16px", sm: "20px", md: "26px" },
                    fontWeight: 700,
                    textShadow: "0px 3px 10px rgba(0,0,0,0.9)",
                  }}
                >
                  Learn Web Designing
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SliderLearn;
