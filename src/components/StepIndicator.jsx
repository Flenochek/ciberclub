import React from "react";
import { Box, Typography } from "@mui/material";

const steps = [
  { number: 1, label: "Данные" },
  { number: 2, label: "Код" },
  { number: 3, label: "Пароль" },
];

const StepIndicator = ({ currentStep }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
      {steps.map((step, index) => (
        <Box
          key={step.number}
          display="flex"
          alignItems="center"
          sx={{ mx: 0.5 }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={24}
            height={24}
            borderRadius="50%"
            bgcolor={currentStep === step.number ? "#2196F3" : "#555"}
            color="white"
            fontSize="0.75rem"
          >
            {step.number}
          </Box>
          <Typography
            variant="body2"
            color="white"
            sx={{ ml: 0.5, mr: 1, fontSize: "0.75rem" }}
          >
            {step.label}
          </Typography>
          {index < steps.length - 1 && (
            <Box
              height="1px"
              width="16px"
              bgcolor="#ccc"
              mx={0.3}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StepIndicator;
