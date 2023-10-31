import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { Card, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const cardStyling = {
  border: ".5px gray solid",
  height: "70vh",
  width: "40vw",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const inputStyling = {
  height: "40px",
  width: "80%",
  mt: 5,
};

const SignInPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card elevation={5} sx={cardStyling}>
        <h1>Sign In</h1>
        <TextField
          type="text"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          autoFocus
          sx={inputStyling}
        />
        <TextField
          type="password"
          label="Password"
          InputLabelProps={{
            shrink: true,
          }}
          sx={inputStyling}
        />
        <Button
          sx={{
            mt: 5,
            width: "60%",
            border: ".5px gray solid",
            borderRadius: 15,
          }}
          onClick={toHome}
        >
          Sign In
        </Button>
        <Box sx={{ mt: 5 }}>
          <p style={{ textAlign: "center" }}>
            New here? <Link>Sign Up! </Link>
          </p>
        </Box>
      </Card>
    </Grid>
  );
};

export default SignInPage;
