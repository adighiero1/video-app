import React from "react";
import {
  Typography,
  Box,
  Drawer,
  Toolbar,
  Divider,
  CssBaseline,
} from "@mui/material";

import NavOptions from "./navOptions";
import Subscriptions from "../subscriptions/subscriptions";
import VideosToRender from "../content/videosToRender";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavAppbar from "./appbar";
import Logo from "../../assets/logo";

const SideDrawerNavigation = () => {
  const lgScreen = useMediaQuery("(min-width:1400px)");
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Figure out what CSSBaseline is */}
      <CssBaseline />
      {/* <Drawer
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
        <Logo />
        <NavOptions />
        {lgScreen === true ? (
          <>
            <Divider />
            <Typography sx={{ mt: 2, mb: 2, ml: 2 }}>Subscriptions</Typography>
            <Subscriptions />
            <Divider />
          </>
        ) : null}

        <Toolbar />
      </Drawer> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default SideDrawerNavigation;
