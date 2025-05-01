import React, { useState } from "react";
import { Box, Button, TextField, Typography, Avatar } from "@mui/material";


const CodePage = () => {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
    setCodeError(value.length < 6); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length === 6) {
      // Логика отправки кода
      console.log("Код подтвержден");
    } else {
      setCodeError(true);
    }
  };

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
          Подтвердите код
        </Typography>
        <Typography variant="h5" color="white">
          из письма на электронной почте
        </Typography>
      </Box>

      <Box width="100%" maxWidth={400}>
      <form onSubmit={handleSubmit}>
          <Box mb={0.5}>
            <Typography variant="body2" sx={{ color: "#ccc", mb: 0.5 }}>
              Код
            </Typography>
            <TextField
              type="text"
              value={code}
              onChange={handleCodeChange}
              variant="outlined"
              fullWidth
              placeholder="Введите код из письма"
              error={codeError}
              helperText={codeError ? "Код должен содержать 6 символов" : " "}
              InputProps={{
                style: { color: "white", borderRadius: 8 },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ccc' },
                  '&:hover fieldset': { borderColor: '#aaa' },
                  '&.Mui-focused fieldset': { borderColor: '#bbb' },
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={code.length !== 6}
            sx={{
              backgroundColor: "#2196F3",
              color: "white",
              mb: 2,
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Создать профиль
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default CodePage;
