import { Box, Button, IconButton, List, ListItem, Stack } from "@mui/material";
import CustomContainer from "./CustomContainer";

import LogoIcon from "../assets/images/logo-bookmark.svg?react";
import FacebookIcon from "../assets/images/icon-facebook.svg?react";
import TwitterIcon from "../assets/images/icon-twitter.svg?react";

const items = ["Features", "Pricing", "Contact"];

export default function FooterSection() {
  return (
    <Box
      component="footer"
      paddingBlock={{ xs: "2.5rem", md: "2rem 31px" }}
      bgcolor="text.primary"
    >
      <CustomContainer padding={"2rem"}>
        <Stack
          flexDirection={{ md: "row" }}
          alignItems="center"
          gap={{ xs: 5.25, md: 8.25 }}
        >
          <Box
            sx={{
              lineHeight: 0,
              "& g": { "& path": { fill: "hsl(0, 0%, 97%)" } },
            }}
          >
            <LogoIcon />
          </Box>
          <List
            disablePadding
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              flex: 1,
              gap: { xs: 4.75, md: 5.75 },
            }}
          >
            {items.map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{
                  width: "auto",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  disableRipple
                  sx={{
                    minWidth: "auto",
                    p: 0,
                    fontSize: "13px",
                    letterSpacing: "2px",
                    lineHeight: 1,
                    fontWeight: 400,
                    color: "background.default",
                    "&:hover": {
                      color: "primary.light",
                    },
                    "&.Mui-focusVisible": {
                      color: "primary.light",
                    },
                  }}
                >
                  {item}
                </Button>
              </ListItem>
            ))}
          </List>
          <Stack
            flexDirection="row"
            gap="2.5rem"
            alignItems="center"
            marginBlockStart={{ xs: "6px", md: 0 }}
          >
            <IconButton
              disableRipple
              aria-label="Open Facebook Page"
              sx={{
                padding: 0,
                "&:hover": { "& path": { fill: "hsl(0, 94%, 66%)" } },
                "&.Mui-focusVisible": {
                  "& path": { fill: "hsl(0, 94%, 66%)" },
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              disableRipple
              aria-label="Open Twitter Page"
              sx={{
                padding: 0,
                "&:hover": { "& path": { fill: "hsl(0, 94%, 66%)" } },
                "&.Mui-focusVisible": {
                  "& path": { fill: "hsl(0, 94%, 66%)" },
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CustomContainer>
    </Box>
  );
}
