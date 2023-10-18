import React, { Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const contents = [
  {
    title: "Video Name Is Pretty Long So Let's See What Happens",
    creator: "Lawrence Williams",
    viewCount: 10,
    date: "2 hours ago",
  },
  {
    title: "Video With a Short Title",
    creator: "Lawrence Williams",
    viewCount: 250,
    date: "3 weeks ago",
  },
  {
    title: "Reminder: Set Title Character Length",
    creator: "Lawrence Williams",
    viewCount: 250000,
    date: "07/27/2023",
  },
  {
    title: "Reminder: Set Title Character Length",
    creator: "Lawrence Williams",
    viewCount: 250000,
    date: "07/27/2023",
  },
];

const VideoCards = ({ height, width, src, alt, title }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        margin: "auto",
      }}
    >
      {contents.map((content) => (
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "275px",
            width: "383px",
          }}
        >
          <Card
            elevation={1}
            sx={{
              height: "270px",
              width: "100%",
              borderRadius: 3,
              mt: 1,
              mr: 1,
              ml: 1,
            }}
          >
            <CardMedia
              sx={{ height: "60%", width: "100%" }}
              component="video"
              title="Video Name"
              children="https://www.youtube.com/watch?v=N2mqbhpSfdg"
              alt="coming in hot music video"
            />

            <CardContent>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Grid sx={{ width: "10%" }}>
                  <Avatar sx={{ height: 24, width: 24 }} />
                </Grid>
                <Grid sx={{ ml: 1, width: "85%" }}>
                  <Typography
                    sx={{
                      fontSize: "medium",
                      fontWeight: 550,
                      lineHeight: "1.325rem",
                    }}
                  >
                    {content.title}
                  </Typography>
                  <Typography variant="body2">{content.creator}</Typography>
                  <Typography variant="body2">{`${content.viewCount} views | ${content.date}`}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoCards;
