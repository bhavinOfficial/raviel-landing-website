import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import cartoon from "../../assets/images/form/cartoon2.png";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const SignIn = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validation logic 
  const validate = () => {
    let temp = {};

    if (!values.name.trim()) temp.name = "Full name is required";
    else if (values.name.length < 2)
      temp.name = "Name must be at least 2 characters";

    if (!values.email) temp.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      temp.email = "Enter a valid email address";

    if (!values.password) temp.password = "Password is required";
    else if (values.password.length < 6)
      temp.password = "Password must be at least 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Validated Data:", values);
    // 👉 call backend / firebase here
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        bgcolor: "#efe9e2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          borderRadius: "32px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {/* LEFT – FORM */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "34px", fontWeight: 800 }}>
            Create Account
          </Typography>

          <Typography sx={{ fontSize: "14px", color: "#444", mt: 1 }}>
            Join us and start your journey
          </Typography>

          <Box
            sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                },
              }}
            />

            {/* Submit */}
            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                mt: 1,
                py: 1.4,
                borderRadius: "18px",
                backgroundColor: "#ef6554",
                color: "#fff",
                fontWeight: 700,
                boxShadow: "0 10px 30px rgba(239,101,84,0.45)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#000",
                  transform: "translateY(-2px)",
                },
              }}
            >
              CREATE ACCOUNT
            </Button>

            <Divider sx={{ my: 2 }}>OR</Divider>

            {/* Social */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ borderRadius: "16px", border: "1px solid #000000ff",color:"black" }}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                startIcon={<AppleIcon />}
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                Continue with Apple
              </Button>
            </Box>
          </Box>
        </Box>
        {/* RIGHT – CARTOON */}
        <Box
          sx={{
            width: "50%",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            // background: "linear-gradient(135deg, rgba(167,153,248,0.25), rgba(251,174,0,0.15))",
            // backgroundColor:"#F3F0EC",
            padding: "30px",
          }}
        >
          <Box
            component="img"
            src={cartoon}
            alt="Sign in illustration"
            sx={{
              width: "80%",
              maxWidth: 420,
              userSelect: "none",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
