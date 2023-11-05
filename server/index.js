import express from "express"; //express sever
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import { db } from "./connect.js";
import authRoutes from "./routes/auth.js";
const app = express();
//middlewares
app.use((req, res, next) => {
  //whenever we make a request we are going to give an access
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
app.use(express.json()); // using express that json to be able to send data as an object in all our controllers
app.use(
  //to only allow localhost
  cors({
    origin: "http://localhost:3000",
  })
);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Database connected successfully");
  }
});

app.use(cookieParser());
app.use("/server/auth", authRoutes);
app.listen(8800, () => {
  console.log("Server API working!");
});
