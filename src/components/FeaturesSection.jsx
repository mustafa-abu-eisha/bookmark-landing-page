import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Button,
  Divider,
} from "@mui/material";

import CustomContainer from "./CustomContainer";
import SpecialShape from "./SpecialShape";

import featureTabOne from "../assets/images/illustration-features-tab-1.svg";
import featureTabTwo from "../assets/images/illustration-features-tab-2.svg";
import featureTabThree from "../assets/images/illustration-features-tab-3.svg";

const featuresTabs = [
  {
    tabName: "Simple Bookmarking",
    tabTitle: "Bookmark in one click",
    tabDescription:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: featureTabOne,
  },
  {
    tabName: "Speedy Searching",
    tabTitle: "Intelligent search",
    tabDescription:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: featureTabTwo,
  },
  {
    tabName: "Easy Sharing",
    tabTitle: "Share your bookmarks",
    tabDescription:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: featureTabThree,
  },
];

export default function FeaturesSection() {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box
      component="section"
      paddingBlockStart={{ xs: "9.5rem", md: "5.5rem" }}
      paddingBlockEnd={{ md: "90px" }}
      position="relative"
      zIndex={1}
    >
      <SpecialShape isRight={false} />
      <CustomContainer padding={"2rem"}>
        <Box
          sx={{
            maxWidth: "550px",
            marginInline: "auto",
            textAlign: "center",
            paddingBlockEnd: "2.5rem",
          }}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "1.5rem", sm: "2.5rem" }}
            fontWeight={500}
          >
            {"Features"}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ xs: "15.5px", sm: "18px" }}
            color="text.secondary"
            marginBlockStart={{ xs: "14px", md: "24px" }}
          >
            {
              "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
            }
          </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "background.paper",
            display: { sm: "none" },
          }}
        />
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <Box
            sx={{
              maxWidth: "730px",
              marginInline: "auto",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="Change Features Tabs"
              sx={{
                minHeight: "auto",
                "& .MuiTabs-list": {
                  flexDirection: { xs: "column", sm: "row" },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              {featuresTabs.map((feature, index) => (
                <Tab
                  disableRipple
                  key={feature.tabName}
                  label={feature.tabName}
                  value={`${index + 1}`}
                  sx={{
                    maxWidth: { xs: "100%", sm: "auto" },
                    flex: 1,
                    minHeight: "auto",
                    padding: { xs: "20px 0", sm: "28px 0" },
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: 1,
                    textTransform: "none",
                    color: "text.secondary",
                    borderBottom: "1px solid",
                    borderBottomColor: "background.paper",
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      width: { xs: "150px", sm: "100%" },
                      height: "4px",
                      backgroundColor: "transparent",
                      left: { xs: "50%", sm: 0 },
                      transform: {
                        xs: "translateX(-50%)",
                        sm: "translateX(0)",
                      },
                      bottom: 0,
                    },
                    "&:hover": {
                      "&:not(.Mui-selected)": {
                        color: "primary.light",
                      },
                    },
                    "&.Mui-selected": {
                      color: "text.primary",
                      "&::after": {
                        backgroundColor: "primary.light",
                      },
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          {featuresTabs.map(
            (feature, index) =>
              tabValue === `${index + 1}` && (
                <Box
                  key={feature.tabTitle}
                  paddingBlockStart={{ xs: "70px", md: "4.25rem" }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={{ xs: "5.25rem", md: 0 }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box
                        component="img"
                        src={feature.image}
                        alt={feature.tabTitle}
                        display="block"
                        maxWidth={{ xs: "100%", lg: "none" }}
                        marginInline="auto"
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12, md: 4.85 }}
                      textAlign={{ xs: "center", md: "start" }}
                    >
                      <Typography
                        variant="h3"
                        fontSize={{ xs: "1.5rem", sm: "2rem" }}
                        fontWeight={500}
                      >
                        {feature.tabTitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={{ xs: "15.25px", sm: "18px" }}
                        color="text.secondary"
                        marginBlock={{ xs: "1.25rem 0", md: "1.5rem 2rem" }}
                      >
                        {feature.tabDescription}
                      </Typography>
                      <Button
                        sx={{
                          width: "110px",
                          height: "48px",
                          backgroundColor: "primary.main",
                          textTransform: "none",
                          color: "background.default",
                          border: "2px solid",
                          borderColor: "primary.main",
                          display: { xs: "none", md: "inline-flex" },
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "primary.main",
                          },
                          "&:Mui-focusVisible": {
                            backgroundColor: "transparent",
                            color: "primary.main",
                          },
                        }}
                      >
                        More Info
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              ),
          )}
        </Box>
      </CustomContainer>
    </Box>
  );
}
