import React from "react";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const appBarHeight = "50px";
const marginTopToolbar = 1;

const Logo = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
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
      </Link>
    </>
  );
};

export default Logo;
