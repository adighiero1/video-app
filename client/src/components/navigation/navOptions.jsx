import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

const listOne = [
  {
    name: "Home",
    icon: <HomeRoundedIcon />,
    arialabel: "home-button",
  },
  {
    name: "Subscriptions",
    icon: <SubscriptionsRoundedIcon />,
    arialabel: "subscription-button",
  },
];

const listTwo = [
  {
    name: "Library",
    icon: <VideoLibraryRoundedIcon />,
    arialabel: "subscription-button",
  },
  {
    name: "Your Videos",
    icon: <SmartDisplayRoundedIcon />,
    arialabel: "subscription-button",
  },
  {
    name: "Liked Videos",
    icon: <ThumbUpRoundedIcon />,
    arialabel: "subscription-button",
  },
];

const NavOptions = () => {
  return (
    <>
      <List>
        {listOne.map((option, index) => (
          <ListItem key={index} aria-label={option.arialabel} disablePadding>
            <ListItemButton>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {listTwo.map((option, index) => (
          <ListItem key={index} aria-label={option.arialabel} disablePadding>
            <ListItemButton>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavOptions;
