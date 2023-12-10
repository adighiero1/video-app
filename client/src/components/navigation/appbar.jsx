import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import TvIcon from "@mui/icons-material/Tv";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Notifications", "Messages"];
const settings = ["Channel", "Settings", "Dashboard", "Logout"];

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  display: "flex",
  alignItems: "center",
};

const typographyStyles = {
  mr: 2,
  ml: 1,
  flexGrow: 1,
  fontWeight: 700,
  letterSpacing: ".235rem",
  color: "inherit",
  textDecoration: "none",
};

const buttonStyle = {
  color: "#fff",
};

const NavAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <AppBar
      role="navigation"
      aria-label="Top Navigation Bar"
      position="static"
      sx={{ backgroundColor: "#333" }}
    >
      <Container role="region" aria-label="Navigation Bar" maxWidth="xl">
        {/* disableGutters removes spacing on right and left margins */}

        <Toolbar disableGutters>
          {/* Profile Link */}
          <Link aria-labelledby="Tv-Icon" role="link" style={linkStyle}>
            <TvIcon
              id="Tv-Icon"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              id="app-name"
              variant="h6"
              noWrap
              // component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ...typographyStyles,
                display: { xs: "none", md: "flex" },
              }}
            >
              VIDEO APP
            </Typography>
          </Link>

          {/* Mobile Screen Code */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="appbar-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: "2rem" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TvIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ...typographyStyles,
              display: { xs: "flex", md: "none" },
            }}
          >
            VIDEO APP
          </Typography>
          {/* Desktop View */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {loggedIn ? (
              <>
                <Tooltip title="User settings">
                  <IconButton
                    role="button"
                    aria-label="User Image With Menu"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      sx={{ backgroundColor: "#efefef", color: "black" }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>{" "}
              </>
            ) : (
              <Button
                type="submit"
                aria-label="Sign In Button"
                onClick={handleSignIn}
                sx={buttonStyle}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavAppBar;
