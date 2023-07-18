import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;
const NEWSAPIKEY = process.env.NEWSAPIKEY;
const WEATHERAPIKEY = process.env.WEATHERAPIKEY;
const SECRET = process.env.SECRET;

export default {
  PORT,
  MONGODB,
  NEWSAPIKEY,
  SECRET,
  WEATHERAPIKEY,
};
