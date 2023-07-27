import app from "./app.js";
import config from "./utils/config.js";
import axios from "axios";

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/weather", async (req, res) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=${config.WEATHERAPIKEY}`
  );
  res.json(response.data);
});

app.get("/news/business", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});
app.get("/news/entertainment", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});

app.get("/news/health", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});

app.get("/news/sports", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});
app.get("/news/science", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});
app.get("/news/technology", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${config.NEWSAPIKEY}`
  );
  res.json(response.data);
});

app.listen(config.PORT, () => {
  console.log(`Live at port: ${config.PORT}`);
});
