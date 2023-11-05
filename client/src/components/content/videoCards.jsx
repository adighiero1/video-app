import React from "react";
import { Typography, Avatar } from "@mui/material";
import { Card, CardCover, CardContent } from "@mui/joy";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  containerStyling,
  contentStyling,
  textStyling,
} from "./style.videoCards";

const VideoCards = ({ cardWidth, content }) => {
  const aspectRatio = 9 / 16;
  const cardHeight = `${cardWidth * aspectRatio}px`;

  return (
    <>
      <div style={containerStyling}>
        <video
          style={{ width: "100%", borderRadius: "inherit" }}
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
            style={{ width: "inherit", borderRadius: "inherit" }}
          />
        </video>
      </div>
      <div style={contentStyling}>
        <div>
          <img src="/" alt="" style={{ width: "25px", height: "25px" }} />
        </div>
        <div style={textStyling}>
          <h4>{content.title}</h4>
          <h5>{content.creator}</h5>
          <h6>{content.date}</h6>
        </div>
      </div>
    </>
  );
};

export default VideoCards;
