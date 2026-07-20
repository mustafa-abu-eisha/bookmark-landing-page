import { useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import CustomContainer from "./CustomContainer";

import errorIcon from "../assets/images/icon-error.svg";

export default function NewsletterSection() {
  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  return (
    <Box
      component="section"
      paddingBlock={{
        xs: `4.465rem ${emailError ? "2.25rem" : "3.75rem"}`,
        sm: "4.5rem 74px",
      }}
      bgcolor="primary.main"
    >
      <CustomContainer padding="2rem">
        <Box
          sx={{ maxWidth: "442px", marginInline: "auto", textAlign: "center" }}
        >
          <Typography
            variant="body1"
            textTransform="uppercase"
            fontSize={{ xs: "13px", sm: "15px" }}
            letterSpacing="4px"
            lineHeight={1}
            color="background.default"
          >
            {"35,000+ already joined"}
          </Typography>
          <Typography
            variant="h2"
            fontSize={{ xs: "1.5rem", sm: "2rem" }}
            fontWeight={500}
            marginBlock={{ xs: "14px 2rem", sm: "38px 2.25rem" }}
            color="background.default"
          >
            {"Stay up-to-date with what we’re doing"}
          </Typography>
          <Stack
            component="form"
            flexDirection={{ sm: "row" }}
            gap={{ xs: emailError ? "2.5rem" : 2, sm: 2 }}
          >
            <Box width="100%" position="relative" zIndex={1}>
              {emailError && (
                <Box
                  component="img"
                  src={errorIcon}
                  alt="Error Icon"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "16px",
                    zIndex: 3,
                  }}
                />
              )}
              <TextField
                id="outlined-basic"
                placeholder="Enter your email address"
                variant="outlined"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "48px",
                    borderRadius: "6px",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: emailError
                      ? "primary.light"
                      : "background.default",
                    "&.Mui-focused": {
                      borderColor: "text.primary",
                    },
                  },
                  "& input": {
                    padding: "10px 18px 12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                }}
              />
              {emailError && (
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "start",
                    backgroundColor: "primary.light",
                    color: "background.default",
                    position: "absolute",
                    width: "100%",
                    padding: "8px 12px 3px",
                    borderRadius: "0 0 6px 6px",
                    fontSize: "11px",
                    fontStyle: "italic",
                    bottom: "-22px",
                    left: 0,
                    zIndex: -1,
                  }}
                >
                  {"Whoops, make sure it's an email"}
                </Typography>
              )}
            </Box>
            <Button
              type="submit"
              disableRipple
              onClick={handleSubmit}
              sx={{
                minWidth: "126px",
                height: "48px",
                borderRadius: "6px",
                backgroundColor: "primary.light",
                color: "background.default",
                border: "2px solid",
                borderColor: "primary.light",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "background.default",
                  color: "primary.light",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "background.default",
                  color: "primary.light",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </CustomContainer>
    </Box>
  );
}
