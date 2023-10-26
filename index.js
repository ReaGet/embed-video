import express from "express";
import * as path from "path";

const __dirname = path.dirname(import.meta.url);

const PORT = 1234;
const app = express();

console.log(__dirname)

app.use(express.json())
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

app.get("/api", (req, res) => {
  const response = {
    "version": "1.0",
    "provider_url": "https://www.redgifs.com/",
    "provider_name": "Express",
    "type": "video",
    "title": "Bg video",
    "html": "<div style='position:relative;padding-bottom: calc(56.25%)'><iframe src='/assets/video.mp4' frameborder='0' scrolling='no' width='1280' height='720' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>",
    "width": 1920,
    "height": 1080,
    "thumbnail_url": "assets/poster.jpg",
    "thumbnail_width": 1280,
    "thumbnail_height": 720,
  }

  res.json(response);
});

app.listen(PORT, () => {
  console.log("Listening port", PORT);
});