import React, { useState } from "react";
import { Button, Avatar, Typography } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const showAllText = "Show all";
const showLessText = "Show less";
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
const Subscribers = ({ src }) => {
  const [username, setUsername] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [buttonText, setButtonText] = useState(showAllText);

  const handleShowButton = (e) => {
    e.preventDefault();
    setShowAll((prevShowAll) => !prevShowAll);
    setButtonText(() =>
      buttonText === showAllText ? showLessText : showAllText
    );
    console.log("Text: ", buttonText);
  };

  return (
    <>
      {usernames.map((username, index) =>
        index <= 6 ? (
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
        ) : null
      )}
      {showAll === true &&
        usernames.map((username, index) => {
          if (index > 6) {
            return (
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
            );
          }
        })}
      <Button
        variant="outlined"
        key="toggleButton"
        onClick={handleShowButton}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "20px",
          border: 0,
          textTransform: "none",
          color: "black",
        }}
        startIcon={
          showAll === true ? (
            <KeyboardArrowUpRoundedIcon sx={{ width: 25, height: 25 }} />
          ) : (
            <KeyboardArrowDownRoundedIcon sx={{ width: 25, height: 25 }} />
          )
        }
      >
        {buttonText}
      </Button>
    </>
  );
};

export default Subscribers;
