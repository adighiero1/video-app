import React, { useState } from "react";
import { Button, Avatar, Typography } from "@mui/material";

const usernames = [
  "Catriece",
  "Eman",
  "Adighiero",
  "Tylind",
  "Catriece",
  "Eman",
  "Adighiero",
  "Tylind",
  "Catriece",
  "Eman",
  "Adighiero",
  "Tylind",
];
const Subscriptions = ({ src }) => {
  const [username, setUsername] = useState("");
  return (
    <>
      {usernames.map((username, index) => (
        <Button
          variant="outlined"
          key={index}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "30px",
            border: 0,
            textTransform: "none",
          }}
          startIcon={
            <Avatar
              src={src}
              alt={username}
              sx={{ width: 25, height: 25, mr: 2 }}
            />
          }
        >
          <Typography
            variant="string"
            sx={{ fontSize: "15px", color: "black" }}
          >
            {username}
          </Typography>
        </Button>
      ))}
    </>
  );
};

export default Subscriptions;
