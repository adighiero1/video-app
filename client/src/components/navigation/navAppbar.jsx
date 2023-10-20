import React from "react";
import { IconButton, Badge, Avatar, Box, AppBar, Toolbar } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchBar from "../search/searchBar";

const drawerWidth = 240;
const appBarHeight = "50px";
const marginTopToolbar = 1;

const NavAppbar = ({ videoCards, src, username }) => {
  return (
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
  );
};

export default NavAppbar;
