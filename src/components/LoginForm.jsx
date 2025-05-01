import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Link,
  TextField,
  IconButton,
  InputAdornment,
  Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate для перехода

const LoginForm = ({ isRegister = false }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const navigate = useNavigate(); // Хук для навигации

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmVisibility = () => setShowConfirm((prev) => !prev);

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const validatePassword = (value) =>
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /[0-9]/.test(value) &&
    value.length >= 6;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(!validatePassword(value));
    if (isRegister) {
      setConfirmPasswordError(value !== confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const confirmValid = isRegister ? confirmPassword === password : true;

    setEmailError(!emailValid);
    setPasswordError(!passwordValid);
    if (isRegister) setConfirmPasswordError(!confirmValid);

    if (!emailValid) {
      emailRef.current?.focus();
      return;
    }
    if (!passwordValid) {
      passwordRef.current?.focus();
      return;
    }
    if (isRegister && !confirmValid) {
      confirmPasswordRef.current?.focus();
      return;
    }

    // Навигация на страницу ввода кода, если все валидно
    if (isFormValid) {
      navigate("/verify-code"); // Переход на страницу для ввода кода
    }
  };

  const isFormValid =
    validateEmail(email) &&
    validatePassword(password) &&
    (!isRegister || confirmPassword === password);

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={0.5}>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 0.5 }}>
          Почта
        </Typography>
        <TextField
          inputRef={emailRef}
          type="email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          fullWidth
          placeholder="Введите почту"
          error={emailError}
          helperText={emailError ? "Введите корректный email" : " "}
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

      <Box mb={0.5}>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 0.5 }}>
          Пароль
        </Typography>
        <TextField
          inputRef={passwordRef}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          fullWidth
          placeholder="Введите пароль"
          error={passwordError}
          helperText={passwordError ? "Минимум 6 символов, с цифрами и латинскими буквами разного регистра" : " "}
          InputProps={{
            style: { color: "white", borderRadius: 8 },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end" sx={{ color: "#ccc" }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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

      {isRegister && (
        <Box mb={0.5}>
          <Typography variant="body2" sx={{ color: "#ccc", mb: 0.5 }}>
            Подтвердите пароль
          </Typography>
          <TextField
            inputRef={confirmPasswordRef}
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            variant="outlined"
            fullWidth
            placeholder="Повторите пароль"
            error={confirmPasswordError}
            helperText={confirmPasswordError ? "Пароли не совпадают" : " "}
            InputProps={{
              style: { color: "white", borderRadius: 8 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmVisibility} edge="end" sx={{ color: "#ccc" }}>
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
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
      )}

      {!isRegister && (
        <Box display="flex" justifyContent="flex-end" mb={1.5}>
          <Link
            href="#"
            underline="none"
            sx={{
              fontSize: "0.8rem",
              color: "#888",
              transition: "color 0.2s ease",
              "&:hover": {
                color: "#aaa",
              },
            }}
          >
            Не помню пароль
          </Link>
        </Box>
      )}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!isFormValid}
        sx={{
          backgroundColor: "#2196F3",
          color: "white",
          mb: 2,
          borderRadius: 2,
          textTransform: "capitalize",
        }}
      >
        {isRegister ? "Продолжить" : "Войти"}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        sx={{
          color: "white",
          borderColor: "#ccc",
          borderRadius: 2,
          textTransform: "capitalize",
        }}
        href={isRegister ? "/login" : "/register"}
      >
        {isRegister ? "Войти" : "Зарегистрироваться"}
      </Button>
    </form>
  );
};

export default LoginForm;
