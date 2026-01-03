import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";

/* ================= PLAN DATA ================= */
const plans = [
  {
    title: "Free Plan",
    desc: "Explore the platform at no cost",
    price: "₹0",
    duration: "3Days",
    icon: CurrencyRupeeIcon,
    points: [
      "3 days Free Access to limited partner tool",
      "Get familiar with excel file handling",
      "Convert to Partner Access Plan After 3 Days",
    ],
  },
  {
    title: "Partner Access",
    desc: "Official access to partner tools",
    price: "₹3999",
    duration: "35Days",
    icon: HandshakeIcon,
    points: [
      "35 days unlimited access to all the tools",
      "Smart dashboard",
      "Manage all sellers performance",
    ],
  },
  {
    title: "Partner Plus",
    desc: "Scale faster with partner privileges",
    price: "₹8999",
    duration: "100Days",
    icon: PersonAddAltIcon,
    points: [
      "3 Month enhanced plan",
      "Get ₹3000 discount",
      "All services included",
    ],
  },
];

const PartnerPayment = () => {
    const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlan = plans[activeIndex];

  return (
    // <Container maxWidth="xl">
      <Box sx={{ py: "50px", px: { xs: 2, md: 10 }, fontFamily: "stack" }}>
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: 32, md: 56 },
          fontWeight: 800,
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        Partner&apos;s{" "}
        <span style={{ fontStyle: "italic", fontFamily: "beardeys" }}>
          Pricing
        </span>
      </Typography>

      {/* Main Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // ✅ responsive
          gap: { xs: 4, md: 5 },
          bgcolor: "white",
          borderRadius: { xs: "30px", md: "50px" },
          padding: { xs: 2, md: 6 },
          overflow: "hidden",
        }}
      >
        {/* LEFT – PLAN LIST */}
        <Box sx={{ flex: 1 }}>
          {plans.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <Box
                key={i}
                onClick={() => setActiveIndex(i)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: isActive ? "#feada3" : "#ffffff",
                  padding: { xs: "16px", md: "20px 40px" },
                  borderRadius: "22px",
                  border: "2px solid black",
                  marginY: "20px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: { md: "scale(1.03)" }, // no zoom on mobile
                    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                  },
                }}
              >
                {/* Icon */}
                {/* Icon */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  {(() => {
                    const Icon = item.icon;
                    return (
                      <Icon
                        sx={{
                          fontSize: 30,
                          color: "#ef6554",
                        }}
                      />
                    );
                  })()}
                </Box>

                {/* Text */}
                <Box sx={{ flex: 1, ml: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: "1.4vw" }, // ✅ desktop same
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.75,
                      fontSize: { xs: 13, md: 16 },
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

                {/* Price */}
                <Typography sx={{ fontWeight: 800, lineHeight: 1 }}>
                  <span
                    style={{
                      fontSize: "clamp(14px, 1.2vw, 22px)",

                    }}
                  >
                    {item.price}
                  </span>

                  <span
                    style={{
fontSize: "clamp(11px, 0.75vw, 14px)",

                      fontWeight: 500,
                      marginLeft: "4px",
                      opacity: 0.7,
                    }}
                  >
                    /{item.duration.replace("Days", "d")}
                  </span>
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* RIGHT – DETAIL CARD */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#ffb3a7",
            borderRadius: { xs: "30px", md: "40px" },
            padding: { xs: "20px", md: "28px" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Header */}
          <Box>
            <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
              {activePlan.title}
            </Typography>
            <Typography sx={{ fontSize: 14, opacity: 0.75 }}>
              {activePlan.desc}
            </Typography>
          </Box>

          {/* White Card */}
          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: "28px",
              padding: { xs: "20px", md: "28px" },
            }}
          >
            {/* Price */}
            <Typography sx={{ fontSize: 36, fontWeight: 800, mb: 2 }}>
              {activePlan.price}{" "}
              <span style={{ fontSize: 18, fontWeight: 500 }}>
                | {activePlan.duration}
              </span>
            </Typography>

            {/* Points */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {activePlan.points.map((point, i) => (
                <Box
                  key={i}
                  sx={{ display: "flex", gap: 1.2, alignItems: "center" }}
                >
                  <Typography>✓</Typography>
                  <Typography sx={{ fontSize: 14 }}>{point}</Typography>
                </Box>
              ))}
            </Box>

            {/* Button */}
            <Box
              onClick={() => navigate("/signin")}
              sx={{
                mt: 4,
                bgcolor: "#0b3b2e",
                color: "#fff",
                textAlign: "center",
                padding: "14px",
                borderRadius: "30px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "0.25s",
                "&:hover": { transform: { md: "scale(1.03)" } },
              }}
            >
              Apply Now
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Container>
  );
};

export default PartnerPayment;
