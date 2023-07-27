import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import userRouter from "./routes/userRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("You are now connected to the database");
};

connectToDB(config.MONGODB);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/user", userRouter);
app.use("/login", loginRouter);

export default app;
