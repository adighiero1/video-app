import Express from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
const app = Express();

app.listen(8800, () => {
  console.log("Server API working!");
});
