import { Box } from "@mui/material";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import flowerimg from "../../assets/images/cards/flower.svg";
import flowerimg2 from "../../assets/images/cards/flowers.svg";
import flowerimg3 from "../../assets/images/cards/stars.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const IconPayment = () => {

  const firstlongbox = useRef(null);
  const secondlongbox = useRef(null);
  const textroundbox = useRef(null);
  const flowercardbox = useRef(null);
  const starcardbox = useRef(null);
  const yellowlongbox = useRef(null);
  const blacklongbox = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(
      firstlongbox.current,
      {
        width: "50%",
        scale: 1,
      },
      {
        width: "12%",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: firstlongbox.current,
          start: "top 100%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      secondlongbox.current,
      {
        width: "12%",
        scale: 1,
      },
      {
        width: "25%",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: secondlongbox.current,
          start: "top 100%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      textroundbox.current,
      {
        scale: 1,
        rotate:"360deg",
      },
      {
        rotate:"0deg",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textroundbox.current,
          start: "top 100%",
          end: "top -100%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      flowercardbox.current,
      {
        scale: 1,
        rotate:"360deg",
      },
      {
        rotate:"0deg",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: flowercardbox.current,
          start: "top 100%",
          end: "top -100%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      starcardbox.current,
      {
        scale: 1,
        rotate:"360deg",
      },
      {
        rotate:"0deg",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: starcardbox.current,
          start: "top 100%",
          end: "top -100%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      yellowlongbox.current,
      {
        width: "10%",
        scale: 1,
      },
      {
        width: "18%",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: yellowlongbox.current,
          start: "top 100%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      blacklongbox.current,
      {
        width: "10%",
        scale: 1,
      },
      {
        width: "12%",
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blacklongbox.current,
          start: "top 100%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Box sx={{ bgcolor: "#d9d2ff", display: "flex" }}>
      <Box
        ref={firstlongbox}
        sx={{
          height: "150px",
          bgcolor: "#cef7e2",
          borderRadius: "100px",
        }}
      />

      <Box sx={{ height: "150px" }} ref={textroundbox}>
        <img src={flowerimg2} alt="" />
      </Box>

      <Box
        sx={{
          height: "150px",
          width: "10%",
          bgcolor: "#5e633d",
          borderRadius: "100px",
        }}
      />

      <Box
       ref={yellowlongbox}
        sx={{
          height: "150px",
          width: "5%",
          bgcolor: "#ffb249",
          borderRadius: "100px",
        }}
      />

      <Box sx={{ height: "150px" }} ref={flowercardbox}>
        <img src={flowerimg} alt="" />
      </Box>

      <Box
       ref={blacklongbox}
        sx={{
          height: "150px",
          width: "4%",
          bgcolor: "#000",
          borderRadius: "100px",
        }}
      />
      <Box sx={{ height: "150px" }} ref={starcardbox}>
        <img src={flowerimg3} alt="" />
      </Box>
      <Box
        ref={secondlongbox}
        sx={{
          height: "150px",
          width: "40%",
          bgcolor: "#ff9898ff",
          borderRadius: "100px",
        }}
      />
    </Box>
  );
};

export default IconPayment;
