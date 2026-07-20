import { Box, Button, Grid, Typography } from "@mui/material";
import CustomContainer from "./CustomContainer";

import chromeIcon from "../assets/images/logo-chrome.svg";
import firefoxIcon from "../assets/images/logo-firefox.svg";
import operaIcon from "../assets/images/logo-opera.svg";

import dotsBg from "../assets/images/bg-dots.svg";

const browsers = [
  { name: "Chrome", version: "62", icon: chromeIcon },
  { name: "Firefox", version: "55", icon: firefoxIcon },
  { name: "Opera", version: "46", icon: operaIcon },
];

export default function DownloadSection() {
  return (
    <Box
      component="section"
      paddingBlockStart={{ xs: "9.485rem", md: "10rem" }}
    >
      <CustomContainer padding="2rem">
        <Box
          sx={{ maxWidth: "550px", textAlign: "center", marginInline: "auto" }}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "1.5rem", md: "1.85rem" }}
            fontWeight={500}
          >
            {"Download the extension"}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ xs: "15px", md: "18px" }}
            color="text.secondary"
            marginBlockStart={{ xs: "12px", md: "22px" }}
          >
            {
              "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
            }
          </Typography>
        </Box>
        <Box
          maxWidth="910px"
          marginInline="auto"
          paddingBlockStart={{ xs: "3.75rem", md: "134px" }}
          paddingInline={{ xs: "16px", md: 0 }}
        >
          <Grid container spacing={{ xs: "2.5rem", md: "2rem" }}>
            {browsers.map((browser, index) => (
              <Grid key={browser.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    boxShadow:
                      "4px 8px 14px hsl(231deg 69% 60% / 6%), -4px 18px 22px hsl(231deg 69% 60% / 6%)",
                    borderRadius: "12px",
                    transform: {
                      md: `translateY(${(browsers.length - 1 - index) * -40}px)`,
                    },
                  }}
                >
                  <Box padding="40px 16px" textAlign="center">
                    <Box
                      component="img"
                      src={browser.icon}
                      alt={`${browser.name} Logo`}
                    />
                    <Typography
                      variant="h3"
                      fontSize="22px"
                      lineHeight={1}
                      fontWeight={500}
                      marginBlock="28px 14px"
                    >{`Add to ${browser.name}`}</Typography>
                    <Typography
                      variant="body1"
                      lineHeight={1}
                      color="text.secondary"
                    >
                      {`Minimum version ${browser.version}`}
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={dotsBg}
                    alt="Dots Background"
                    display="block"
                    maxWidth="100%"
                  />
                  <Box padding="24px">
                    <Button
                      disableRipple
                      sx={{
                        width: "100%",
                        height: "48px",
                        backgroundColor: "primary.main",
                        color: "background.default",
                        textTransform: "none",
                        border: "2px solid",
                        borderColor: "primary.main",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                        },
                        "&.Mui-focusVisible": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                        },
                      }}
                    >
                      {"Add & Install Extension"}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CustomContainer>
    </Box>
  );
}
