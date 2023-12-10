// import React from "react";
// import { useParams } from "react-router-dom";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import { Box } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import NavAppbar from "../components/navigation/navAppbar";
// import Logo from "../assets/logo";
// import VideosToRender from "../components/content/videosToRender";

// const SingleVideoPage = () => {
//   const { id } = useParams();

//   return (
//     <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
//       <Grid xs={12}>
//         <NavAppbar />
//         <Logo />
//       </Grid>
//       <Grid sx={{ width: { xs: "100%", md: "65%" } }}>
//         <VideosToRender containerWidth={"70vw"} cardWidth={"65vw"} id={id} />
//         <Box
//           sx={{
//             border: "1px black solid",
//             width: "100%",
//             height: "75vh",
//             borderRadius: 3,
//           }}
//         >
//           <p
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               textAlign: "center",
//               fontSize: "30px",
//               fontWeight: 700,
//             }}
//           >
//             COMMENTS & LIKES COMPONENT WILL GO HERE.
//             <hr />
//             ALSO, I WILL REMOVE THE PADDING FROM THE CARD ABOVE SO BOTH
//             COMPONENTS WILL BE A BIT CLOSER TOGETHER.
//           </p>
//         </Box>
//       </Grid>
//       <Grid sx={{ width: { xs: "100%", md: "30%" } }}>
//         <Box
//           sx={{
//             border: "1px black solid",
//             width: "100%",
//             height: "75vh",
//             borderRadius: 3,
//           }}
//         >
//           <p
//             style={{
//               display: "flex",
//               textAlign: "center",
//               fontSize: "30px",
//               fontWeight: 700,
//             }}
//           >
//             SCROLLABLE CHANNEL VIDEOS BOX
//           </p>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default SingleVideoPage;
