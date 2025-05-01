import React from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#1e1e1e", px: 2 }}
    >
      <Box component="img" src="/logo.png" alt="ФКС России" sx={{ width: 100, mb: 1 }} />

      <Box mb={4} textAlign="center">
        <Typography variant="h5" color="white">
          Добро пожаловать
        </Typography>
        <Typography variant="h5" color="white">
          на арену киберспорта!
        </Typography>
      </Box>

      <Box width="100%" maxWidth={400}>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
