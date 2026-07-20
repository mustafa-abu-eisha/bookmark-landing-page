import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CustomContainer from "./CustomContainer";

import heroIllustration from "../assets/images/illustration-hero.svg";
import SpecialShape from "./SpecialShape";

export default function IntroSection() {
  return (
    <Box
      component="section"
      paddingBlockStart={{ xs: "76px", md: "106px" }}
      paddingBlockEnd={{ md: "1.75rem" }}
      position="relative"
      zIndex={1}
    >
      <SpecialShape isRight={true} />
      <CustomContainer padding={"12px"}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: "55px", md: 0 }}
        >
          <Grid
            size={{ xs: 12, md: 5.5 }}
            order={{ xs: 2, md: 1 }}
            textAlign={{ xs: "center", md: "start" }}
            paddingInline={{ xs: "20px", lg: 0 }}
          >
            <Typography
              variant="h1"
              fontSize={{ xs: "2rem", sm: "3.5rem", md: "2.5rem", lg: "3rem" }}
              fontWeight={500}
              lineHeight={{ xs: 1.3, md: 1.1 }}
            >
              {"A Simple Bookmark Manager"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{ xs: "16px", md: "18px" }}
              color="text.secondary"
              marginBlock={{ xs: "20px 2rem", md: "1.5rem 2rem" }}
            >
              {
                "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
              }
            </Typography>
            <Stack
              flexDirection="row"
              gap={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                disableRipple
                sx={{
                  width: "163px",
                  height: "48px",
                  backgroundColor: "primary.main",
                  color: "white",
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
                Get it on Chrome
              </Button>
              <Button
                disableRipple
                sx={{
                  width: "163px",
                  height: "48px",
                  backgroundColor: "background.default",
                  color: "action.hover",
                  textTransform: "none",
                  border: "2px solid",
                  borderColor: "background.default",
                  boxShadow: "4px 4px 12px hsl(229deg 31% 21% / 20%)",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "action.hover",
                    borderColor: "action.hover",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent",
                    color: "action.hover",
                    borderColor: "action.hover",
                  },
                }}
              >
                Get it on Firefox
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src={heroIllustration}
              alt="Intro Image"
              display="block"
              maxWidth={{ xs: "100%", lg: "none" }}
              marginInline="auto"
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
}
