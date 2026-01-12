import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useRef } from "react";
import navbarLogo from "../../assets/images/logos/png.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Refs for GSAP
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef([]);
  const iconRef = useRef(null);

  const menuItems = [
    { label: "HOME123hello", link: "Home" },
    { label: "ABOUT US", link: "About" },
    { label: "SERVICES", link: "Services" },
    { label: "LEARN", link: "Learn" },
    { label: "CONTACT US", link: "Contact" },
    { label: "START", link: "Payment", isButton: true }, // 👈 button
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    // Navbar fade-in
    tl.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });

    // Logo animation
    tl.from(
      logoRef.current,
      {
        opacity: 0,
        x: -40,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Desktop menu items (FIXED duration + delay)
    tl.from(
      menuRef.current.filter(Boolean),
      {
        opacity: 1,
        // y: 25,
        filter: "blur(0px)",
        stagger: 0.25,
        duration: 10, // NOW WORKS
        delay: 5, // NOW WORKS
        ease: "power3.out",
      },
      "-=0.2"
    );

    // Mobile icon animation
    tl.from(
      iconRef.current,
      {
        opacity: 1,
        // x: 40,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <>
      <Box
        ref={navRef}
        sx={{
          fontFamily: "stack",
          width: "100%",
          padding: { xs: "5vw 6vw", sm: "4vw 5vw", md: "2vw 3vw" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000,
          backgroundColor: "transparent",
          // backdropFilter: "blur(12px)",
        }}
      >
        {/* LOGO */}
        <Box sx={{ width: "300px", userSelect: "none" }} ref={logoRef}>
          <img src={navbarLogo} alt="" />
        </Box>

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "80px",
            fontSize: "1.1vw",
            color: "#333",
            fontWeight: 500,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, i) => (
            <a
              key={item.label}
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                ref={(el) => (menuRef.current[i] = el)}
                sx={{
                  px: item.isButton ? "22px" : 0,
                  py: item.isButton ? "10px" : 0,
                  borderRadius: item.isButton ? "999px" : 0,
                  backgroundColor: item.isButton ? "#000" : "transparent",
                  color: item.isButton ? "#fff" : "inherit",
                  fontWeight: item.isButton ? 600 : 500,
                  transition: "0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: item.isButton ? "#111" : "transparent",
                  },
                }}
              >
                {item.label}
              </Box>
            </a>
          ))}
        </Box>

        {/* MOBILE MENU ICON */}
        <IconButton
          ref={iconRef}
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon
            sx={{
              fontSize: {
                xs: "6vw",
                sm: "4.5vw",
                md: "3vw",
                lg: "2vw",
                xl: "1.6vw",
              },
            }}
          />
        </IconButton>

        {/* MOBILE DRAWER */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: "70vw",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ alignSelf: "flex-end" }}
            >
              <CloseIcon />
            </IconButton>

            <List sx={{ mt: 2 }}>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button
                    onClick={() => setOpen(false)}
                    sx={{
                      mt: item.isButton ? 2 : 0,
                      borderRadius: item.isButton ? "30px" : 0,
                      backgroundColor: item.isButton ? "#000" : "transparent",
                      color: item.isButton ? "#fff" : "#000",
                      textAlign: "center",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",

                      // 👇 Button hover
                      "&:hover": item.isButton
                        ? {
                            backgroundColor: "#111",
                            transform: "translateY(-3px) scale(1.03)",
                            boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
                          }
                        : {
                            color: "#000",
                            transform: "translateX(6px)",
                          },

                      // 👇 Click / active effect
                      "&:active": item.isButton
                        ? {
                            transform: "translateY(-1px) scale(0.98)",
                            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                          }
                        : {},
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: { xs: "5vw", sm: "4vw" },
                        fontWeight: item.isButton ? 700 : 600,
                      }}
                    />
                  </ListItem>
                </a>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
