import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Badge,
  Avatar,
  Box,
  AppBar,
  Toolbar,
  ButtonBase,
  Paper,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchBar from "../search/searchBar";

const drawerWidth = 240;
const appBarHeight = "50px";
const marginTopToolbar = 1;

const NavAppbar = ({ videoCards, src, username, user }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toSignIn = () => {
    navigate("/signin");
  };

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
          {loggedIn ? (
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
          ) : (
            <ButtonBase onClick={toSignIn}>
              <Paper
                elevation={0}
                sx={{
                  ml: 2,
                  border: ".5px gray solid",
                  borderRadius: 15,
                  padding: "5px",
                  width: "75px",
                }}
              >
                Sign In
              </Paper>
            </ButtonBase>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavAppbar;
