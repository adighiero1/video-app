import React from "react";
import {
  IconButton,
  Badge,
  Typography,
  Avatar,
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  CssBaseline,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchBar from "../search/searchBar";
import NavOptions from "./navOptions";
import Subscriptions from "../subscriptions/subscriptions";

const drawerWidth = 240;
const appBarHeight = "50px";
const marginTopToolbar = 2;

const LandingPageNavigation = ({ videoCards, src, username }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Figure out what CSSBaseline is */}
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#ffffff",
          borderBottom: 0,
        }}
      >
        <Toolbar
          sx={{
            mt: marginTopToolbar,
            mr: 3,
            ml: 18,
            ".MuiToolbar-root": {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          <SearchBar height={appBarHeight} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon color="primary" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsRoundedIcon color="primary" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                src={src}
                alt={username}
                sx={{ width: 30, height: 30, mr: 1 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            border: 0,
            margin: 0,
            marginTop: marginTopToolbar,
            marginBottom: 2,
            height: appBarHeight,
          }}
        >
          <p style={{ color: "black", margin: 0 }}>LOGO AND NAME HERE</p>
        </Toolbar>
        <NavOptions />
        <Divider />
        <Typography sx={{ mt: 2, mb: 2, ml: 2 }}>Subscriptions</Typography>
        <Subscriptions />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {videoCards}
      </Box>
    </Box>
  );
};

export default LandingPageNavigation;
