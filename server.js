import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import "express-async-errors";
import connectDB from "./db/connectDb.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5000;

(() => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
