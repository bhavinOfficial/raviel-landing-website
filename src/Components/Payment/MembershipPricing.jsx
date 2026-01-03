import React, { useState } from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PricingCard = ({
  title,
  subtitle,
  price,
  period,
  badge,
  features,
  services,
  suitedFor,
  active,
  onClick,
}) => {

  const navigate = useNavigate();
  return (
    <Box
      onClick={onClick}
      sx={{
        width: { xs: "100%", md: 360 },
        bgcolor: active ? "#fff2c5" : "#fff",
        borderRadius: "28px",
        border: "1.5px solid #000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "all 0.35s ease",
        "&:hover": {
          transform: "scale(1.04)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
        },
      }}
    >
      {/* TOP */}
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize={22} fontWeight={700}>
            {title}
          </Typography>

          {badge && (
            <Chip
              label={badge}
              sx={{
                bgcolor: "#d9d2ff",
                fontWeight: 600,
                border: "1px solid #000",
              }}
            />
          )}
        </Stack>

        <Typography fontSize={14} mt={1} sx={{textAlign:"start"}}>
          {subtitle}
        </Typography>

        {/* Price */}
        <Typography
          sx={{
            fontSize: 34,
            fontWeight: 800,
            mt: 2,
          }}
        >
          ₹ {price}
          <Typography component="span" fontSize={18} fontWeight={600}>
            {period}
          </Typography>
        </Typography>

        {/* CTA */}
        <Button
        onClick={() => navigate("/signin")}
          fullWidth
          sx={{
            mt: 2.5,
            py: 1.3,
            borderRadius: "999px",
            bgcolor: "#052d24",
            color: "#fff",
            fontWeight: 700,
            textTransform: "none",
            fontSize:"16px",
            "&:hover": { bgcolor: "#cec5ff",color:"black" },
          }}
        >
          Get Active Now
        </Button>
      </Box>

      {/* BOTTOM */}
      <Box
        sx={{
          p: 3,
          borderTop: "1.5px solid #000",
          borderRadius: "28px 28px 0 0",
          textAlign:"start"
        }}
      >
        {/* Features */}
        {features && (
          <Stack spacing={1.2}>
            {features.map((item, i) => (
              <Typography key={i} fontSize={14}>
                ✓ {item}
              </Typography>
            ))}
          </Stack>
        )}

        {/* Suited For */}
        {suitedFor && (
          <>
            <Typography fontWeight={700} mt={2} mb={1}>
              Best Suited For :
            </Typography>
            {suitedFor.map((item, i) => (
              <Typography key={i} fontSize={14}>
                ✓ {item}
              </Typography>
            ))}
          </>
        )}

        {/* Services */}
        {services && (
          <>
            <Typography fontWeight={700} mt={3} mb={1}>
              Included Services:
            </Typography>

            <Stack direction="row" gap={1} flexWrap="wrap">
              {services.map((srv, i) => (
                <Chip
                  key={i}
                  label={srv}
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #000",
                    fontSize: 12,
                  }}
                />
              ))}
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
};

const MembershipPricing = () => {

  const [activeCard, setActiveCard] = useState(null);
  return (
    <Box
      sx={{
        bgcolor: "#d9d2ff",
        py: 8,
        px: { xs: 2, md: 6 },
        textAlign: "center",
        borderRadius: "50px 50px 0 0",
      }}
    >
      {/* Top Badge */}
      <Chip
        label="Seller Pricing"
        sx={{
          mb: 3,
          fontWeight: 600,
          borderRadius: "999px",
          fontSize: "1.2vw",
          padding: "20px",
          border: "2px solid white",
        }}
      />

      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: 36, md: 56 },
          fontWeight: 800,
        }}
      >
        Membership{" "}
        <span style={{ fontStyle: "italic", fontFamily: "beardeys" }}>
          Pricing
        </span>
      </Typography>

      <Typography
        sx={{
          maxWidth: 720,
          mx: "auto",
          mt: 2,
          color: "#444",
          fontSize: 15,
        }}
      >
        Our membership pricing is designed to offer smart, flexible plans that
        deliver maximum value without complexity. Each plan unlocks premium
        features, exclusive benefits, and reliable support.
      </Typography>

      {/* Pricing Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        mt={6}
      >
        {/* Seller Essentials */}
        <PricingCard
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
          title="Seller Essentials"
          subtitle="Smart tools for beginners to start selling fast"
          price="2,999"
          period="/1M"
          buttonColor="#063b2d"
          bgColor="#fff"
          borderColor="#111"
          features={[
            "8 services at a time",
            "5 product listing",
            "Smart bill book",
            "Automatic image cropper",
            "Inventory management",
            "Fast bank settlement",
          ]}
          services={[
            "Invoice Creator",
            "Label Cropper",
            "Bank Settlement",
            "Price Update",
            "Bill Book",
            "Inventory Manage",
          ]}
        />

        {/* Pro Access */}
        <PricingCard
         active={activeCard === 2}
        onClick={() => setActiveCard(2)}
          title="Pro Access"
          subtitle="Advanced tools for serious sellers"
          price="3,999"
          period="/1M"
          badge="Popular"
          buttonColor="#063b2d"
          bgColor="#fff3c4"
          borderColor="#111"
          highlight
          features={[
            "6 premium services added",
            "Unlimited product listing",
            "Download all labels",
            "Claim your returns",
            "Stock update in one click",
            "Everything in Pro Access",
          ]}
          services={[
            "Claim Tool",
            "Payment Collection",
            "Listing",
            "Label Download",
            "Stock Update",
            "Return Management",
          ]}
        />

        {/* Quarter Prime */}
        <PricingCard
         active={activeCard === 3}
        onClick={() => setActiveCard(3)}
          title="Quarter Prime"
          subtitle="Built for scale, speed, and priority"
          price="9,999"
          period="/3M"
          badge="17% OFF"
          buttonColor="#c9c1ff"
          bgColor="#fff"
          borderColor="#111"
          features={[
            "Large catalogs",
            "High-volume businesses",
            "Multi-category brands",
            "Priority processing",
            "Higher usage limits",
          ]}
        />
      </Stack>
    </Box>
  );
};

export default MembershipPricing;
