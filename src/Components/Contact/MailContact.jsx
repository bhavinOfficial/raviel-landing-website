import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MailContact = () => {
  const contactInfo = {
    email: "contact@yourcompany.com",
    whatsapp: "+91 98765 43210",
    location: "Surat, Gujarat, India",
  };

  const cards = useRef([]);

  useEffect(() => {
    // Scroll reveal for cards
    cards.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          scrub: true,
        },
      });
    });

    // Floating sparkles
    gsap.utils.toArray(".gold-sparkle").forEach((sparkle, i) => {
      gsap.to(sparkle, {
        y: -15,
        opacity: 0.2 + (i % 3) * 0.2,
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleCardClick = (e, type) => {
    const index = type === "email" ? 0 : type === "whatsapp" ? 1 : 2;
    const card = cards.current[index];
    if (!card) return;

    // Ripple circle
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple-circle";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    card.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 0.5 },
      {
        scale: 1.8,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      }
    );

    // Card pop effect
    gsap.fromTo(
      card,
      { scale: 1 },
      {
        scale: 1.03,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      }
    );

    // Logic actions
    if (type === "email") {
      window.location.href = `mailto:${contactInfo.email}`;
    } else if (type === "whatsapp") {
      const phoneNumber = contactInfo.whatsapp.replace(/\s+/g, "");
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 14,
        px: 3,
        background: "#EFEAE1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          className="gold-sparkle"
          sx={{
            position: "absolute",
            width: 10 + (i % 3) * 4,
            height: 10 + (i % 3) * 4,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #F0B202 0%, rgba(240,178,2,0) 70%)",
            top: `${20 + i * 10}%`,
            left: `${10 + ((i * 13) % 70)}%`,
            opacity: 0.4,
            zIndex: 1,
          }}
        />
      ))}

      {/* Header */}
      <Box
        maxWidth="lg"
        sx={{
          mx: "auto",
          textAlign: "center",
          mb: 10,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{
            color: "#222",
            letterSpacing: "2px",
            fontFamily: "beardeys",
          }}
        >
          Stay Connected
        </Typography>
        <Typography variant="body1" color="#6a6a6a" mt={1}>
          Fast, friendly & always here for you 💛
        </Typography>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        {/* WhatsApp */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            ref={(el) => (cards.current[1] = el)}
            sx={cardStyle}
            onClick={(e) => handleCardClick(e, "whatsapp")}
          >
            <IconWrapper>
              <WhatsAppIcon sx={iconStyle} />
            </IconWrapper>
            <GlassTitle>WhatsApp</GlassTitle>
            <GlassText>Instant chat support</GlassText>
            <Highlight>{contactInfo.whatsapp}</Highlight>
          </Paper>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            ref={(el) => (cards.current[0] = el)}
            sx={cardStyle}
            onClick={(e) => handleCardClick(e, "email")}
          >
            <IconWrapper>
              <EmailRoundedIcon sx={iconStyle} />
            </IconWrapper>
            <GlassTitle>Email</GlassTitle>
            <GlassText>Drop us a mail anytime</GlassText>
            <Highlight href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </Highlight>
          </Paper>
        </Grid>

        {/* Location */}
<Grid item xs={12} sm={6} md={4}>
  <Paper
    ref={(el) => (cards.current[2] = el)}
    sx={cardStyle}
    onClick={() =>
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          "442, Savlia Cir, Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395011"
        )}`,
        "_blank"
      )
    }
  >
    <IconWrapper>
      <LocationOnIcon sx={iconStyle} />
    </IconWrapper>
    <GlassTitle>Location</GlassTitle>
    <GlassText>Visit our studio / office</GlassText>
    <Highlight>
      442, Savlia Cir, Yogi Chowk Ground, Chikuwadi, Nana Varachha,
      Surat, Gujarat 395011
    </Highlight>
  </Paper>
</Grid>


      </Grid>
    </Box>
  );
};

/* 🔥 UI Styles */

const cardStyle = {
  height: "100%",  // 🔥 key line
  width:"300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  p: 5,
  textAlign: "center",
  borderRadius: "26px",
  background: "rgba(255,255,255,0.70)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(240,178,2,0.3)",
  transition: "transform 0.45s ease, box-shadow 0.45s ease, border 0.45s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0px 22px 45px rgba(0,0,0,0.18)",
    border: "1px solid #F0B202",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-120%",
    width: "50%",
    height: "100%",
    background:
      "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
    transform: "skewX(-20deg)",
    opacity: 0,
    transition: "all .7s ease-out",
  },
  "&:hover::after": {
    left: "140%",
    opacity: 1,
  },
  "& .ripple-circle": {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(240,178,2,0.35)",
    transform: "scale(0)",
    pointerEvents: "none",
  },
};


const IconWrapper = ({ children }) => (
  <Box
    sx={{
      width: 90,
      height: 90,
      borderRadius: "24px",
      background: "#FFD5D7",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: 3,
      boxShadow: "0 12px 30px rgba(255,213,215,0.7)",
      transition: "transform .4s ease",
      transformOrigin: "center",
      "&:hover": {
        transform: "translateY(-4px) rotate(4deg)",
      },
      mx: "auto",
    }}
  >
    {children}
  </Box>
);

const iconStyle = {
  fontSize: 42,
  color: "#2b2b2b",
};

const GlassTitle = (props) => (
  <Typography
    variant="h6"
    fontWeight={800}
    sx={{
      color: "#1b1b1b",
      fontFamily: "'Poppins', sans-serif",
      mb: 1,
    }}
    {...props}
  />
);

const GlassText = (props) => (
  <Typography
    variant="body2"
    color="#444"
    mb={2}
    sx={{ lineHeight: 1.7 }}
    {...props}
  />
);

const Highlight = (props) => (
  <Typography
    component="a"
    sx={{
      fontWeight: 700,
      fontSize: "15px",
      color: "#F0B202",
      textDecoration: "none",
      wordBreak: "break-word",
    }}
    {...props}
  />
);

export default MailContact;
