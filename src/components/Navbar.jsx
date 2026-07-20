import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Button,
  Stack,
} from "@mui/material";

import MenuIcon from "../assets/images/icon-hamburger.svg?react";
import CloseIcon from "../assets/images/icon-close.svg?react";
import LogoIcon from "../assets/images/logo-bookmark.svg?react";
import FacebookIcon from "../assets/images/icon-facebook.svg?react";
import TwitterIcon from "../assets/images/icon-twitter.svg?react";

import CustomContainer from "./CustomContainer";

const drawerWidth = "100%";
const navItems = ["Features", "Pricing", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack
      justifyContent="space-between"
      sx={{
        height: "100%",
        textAlign: "center",
        paddingInline: "2rem",
        paddingBlock: "2.5rem 3rem",
      }}
    >
      <Box>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingBlockEnd="2.5rem"
        >
          <Box
            sx={{
              lineHeight: 0,
              "& svg": { "& g": { "& path": { fill: "white" } } },
            }}
          >
            <LogoIcon />
          </Box>
          <IconButton
            disableRipple
            sx={{ p: 0 }}
            aria-label="Close Drawer"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: "text.secondary", opacity: 0.2 }} />
        <List disablePadding>
          {navItems.map((item) => (
            <ListItem
              key={item}
              disablePadding
              sx={{ flexDirection: "column" }}
            >
              <Button
                disableRipple
                sx={{
                  padding: "24px 0",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "3px",
                  color: "background.default",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.light",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent",
                    color: "primary.light",
                  },
                }}
              >
                {item}
              </Button>
              <Divider
                sx={{
                  borderColor: "text.secondary",
                  opacity: 0.2,
                  width: "100%",
                }}
              />
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Button
              sx={{
                height: "48px",
                width: "100%",
                marginBlockStart: "1.5rem",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "3px",
                color: "background.default",
                border: "2px solid",
                borderColor: "background.default",
                "&:hover": {
                  backgroundColor: "background.default",
                  color: "primary.main",
                },
              }}
            >
              Login
            </Button>
          </ListItem>
        </List>
      </Box>
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <IconButton disableRipple aria-label="Open Facebook" sx={{ p: 0 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton disableRipple aria-label="Open Twitter" sx={{ p: 0 }}>
          <TwitterIcon />
        </IconButton>
      </Stack>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <CustomContainer padding={"2rem"} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        aria-label="Navbar"
        component="nav"
        sx={{
          position: "sticky",
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingBlockStart: { xs: "2.5rem", md: "3rem" },
        }}
      >
        <Toolbar sx={{ "&&": { minHeight: "auto", paddingInline: 0 } }}>
          <Box
            sx={{
              marginInlineStart: { lg: "6px" },
              flexGrow: 1,
              lineHeight: 0,
            }}
          >
            <LogoIcon />
          </Box>
          <IconButton
            disableRipple
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, p: 0 }}
          >
            {!mobileOpen && <MenuIcon />}
          </IconButton>
          <List
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "50px",
              p: 0,
            }}
          >
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <Button
                  disableRipple
                  sx={{
                    minWidth: "auto",
                    color: "text.primary",
                    p: 0,
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: "1px",
                    "&:hover": {
                      color: "primary.light",
                    },
                    "&.Mui-focusVisible": { color: "primary.light" },
                  }}
                >
                  {item}
                </Button>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <Button
                disableRipple
                sx={{
                  width: "110px",
                  height: "40px",
                  borderRadius: "5px",
                  backgroundColor: "primary.light",
                  color: "background.default",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  border: "2px solid transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.light",
                    borderColor: "primary.light",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent",
                    color: "primary.light",
                    borderColor: "primary.light",
                  },
                }}
              >
                Login
              </Button>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        orientation="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "hsl(229deg 31% 21% / 85%)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </CustomContainer>
  );
}

export default Navbar;
