import { Box, Typography } from "@mui/material";
import React from "react";

const WeOffer = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 18 },
        py: { xs: 3, sm: 4, md: 5 },
        fontFamily: "stack",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", lg: "flex-start" },
          gap: { xs: 4, sm: 5 },
        }}
      >
        {/* LEFT TEXT */}
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" },
            textAlign: { xs: "center", lg: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "8vw", sm: "5vw", md: "3vw", lg: "2.5vw" },
              fontFamily: "beardeys",
              lineHeight: { xs: "10vw", sm: "7vw", md: "3.8vw" },
              mb: 2,
            }}
          >
            We offer two specialized accounts for Sellers and Partners.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "4vw", sm: "2.5vw", md: "1.2vw" },
              width: { xs: "100%", md: "80%", lg: "90%" },
              color: "#555",
            }}
          >
            Each account is designed with tailored tools, workflows, and
            insights to meet the unique needs of both Sellers and Partners.
          </Typography>
        </Box>

        {/* RIGHT CARDS */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3, md: 4 },
            height: "100%",
            width: { xs: "100%", md: "55%" },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          {/* CARD 1 */}
          <Box
            sx={{
              // bgcolor: "#ffffff",
              borderRadius: { xs: "24px", md: "36px" },
              p: { xs: 3, md: 4 },
              width: { xs: "100%", sm: "260px", md: "320px" },
              minHeight: { xs: "360px", md: "420px" },

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
              Starts from just ₹2,999
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "22px", md: "26px" },
                fontWeight: 700,
                mt: 3,
              }}
            >
              Activate
              <br />
              Seller Tools
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#555",
                mt: 2,
                lineHeight: 1.6,
              }}
            >
              Get instant access to automation features for orders, invoices,
              payments, labels, and daily Jio-Mart operations — all in one
              dashboard.
            </Typography>
          </Box>

          {/* CARD 2 */}
          <Box
            sx={{
              // bgcolor: "#ffffff",
              borderRadius: { xs: "24px", md: "36px" },
              p: { xs: 3, md: 4 },
              width: { xs: "100%", sm: "260px", md: "320px" },
              minHeight: { xs: "360px", md: "420px" },

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
              Starts from just ₹3,999
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "22px", md: "26px" },
                fontWeight: 700,
                mt: 3,
              }}
            >
              Partner
              <br />
              Intelligence
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#555",
                mt: 2,
                lineHeight: 1.6,
              }}
            >
              Turn raw business numbers into decisions that matter. Track
              revenue patterns, payouts, claims, returns, and sales progress
              with smart analytics.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeOffer;
