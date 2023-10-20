import React from "react";
import { Link } from "react-router-dom";
import VideoCards from "./videoCards";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const contents = [
  {
    vidId: 1,
    title: "Video Name Is Pretty Long So Let's See What Happens",
    creator: "Lawrence Williams",
    viewCount: 10,
    date: "2 hours ago",
  },
  {
    vidId: 2,
    title: "Video With a Short Title",
    creator: "Lawrence Williams",
    viewCount: 250,
    date: "3 weeks ago",
  },
  {
    vidId: 3,
    title: "Reminder: Set Title Character Length",
    creator: "Lawrence Williams",
    viewCount: 250000,
    date: "07/27/2023",
  },
  {
    vidId: 4,
    title: "Reminder: Set Title Character Length",
    creator: "Lawrence Williams",
    viewCount: 250000,
    date: "07/27/2023",
  },
];

const VideosToRender = ({ containerWidth, cardWidth, id }) => {
  const videosToRender = id
    ? contents.filter((video) => video.vidId === parseInt(id))
    : contents;

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {videosToRender.map((content) => (
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 20,
            margin: 10,
            containerWidth: containerWidth,
          }}
        >
          {id ? (
            <VideoCards content={content} cardWidth={cardWidth} />
          ) : (
            <Link to={`/${content.vidId}`} style={{ textDecoration: "none" }}>
              <VideoCards content={content} cardWidth={"350px"} />
            </Link>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default VideosToRender;
