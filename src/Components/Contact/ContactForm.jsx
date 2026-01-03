import { Box, TextField, Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import contactForm from "../../assets/images/contact/Group 310.svg";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    gsap.from(imgRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });

    gsap.from(formRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <>
      <Box sx={{ padding: { xs: "20px", sm: "30px", md: "50px" } }}>
        <Box
          ref={containerRef}
          sx={{
            border: "2px solid black",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column-reverse", md: "row" },
            padding: { xs: "20px", md: "40px" },
            gap: { xs: "25px", md: "40px" },
          }}
        >
          {/* Left Image */}
          <Box
            ref={imgRef}
            sx={{
              width: { xs: "90%", sm: "70%", md: "50%" },
              textAlign: "center",
            }}
          >
            <img
              src={contactForm}
              alt="Contact"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
              }}
            />
          </Box>

          {/* Form Section */}
          <Box
            ref={formRef}
            sx={{
              textAlign: "center",
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "7vw", sm: "5vw", md: "2.3vw" },
                fontFamily: "beardeys",
                mb: 1,
              }}
            >
              Have some questions?
            </Box>

            {/* Form */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                width: "100%",
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                  },
                }}
              />

              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                  },
                }}
              />

              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#B8A9F0",
                  borderRadius: "30px",
                  padding: "12px 35px",
                  fontSize: { xs: "4vw", sm: "3vw", md: "1.2vw" },
                  fontWeight: "bold",
                  color: "#222",
                  textTransform: "none",
                  boxShadow: "0px 4px 12px rgba(184, 169, 240, 0.5)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#9E88ED",
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(158, 136, 237, 0.7)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
