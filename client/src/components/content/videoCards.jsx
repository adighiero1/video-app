import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const VideoCards = ({ cardWidth, content }) => {
  const aspectRatio = 9 / 16;
  const cardHeight = `${cardWidth * aspectRatio}px`;

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      <Card
        elevation={0}
        sx={{
          height: cardHeight,
          width: cardWidth,
          borderRadius: 3,
          mt: 1,
        }}
      >
        <CardMedia
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "#d9d9d9",
          }}
          component="video"
          title="Video Name"
          children="https://www.youtube.com/watch?v=N2mqbhpSfdg"
          alt="coming in hot music video"
        />
      </Card>
      <Card elevation={0} sx={{ width: cardWidth }}>
        <CardContent sx={{ pl: 0, height: "100px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "flex-start",
              pl: 2,
            }}
          >
            <Grid
              sx={{
                width: "10%",
              }}
            >
              <Avatar sx={{ height: 30, width: 30 }} />
            </Grid>
            <Grid sx={{ ml: 2, width: "83%" }}>
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
  );
};

export default VideoCards;
