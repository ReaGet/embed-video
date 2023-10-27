import express from "express";
import * as url from 'url';
import * as path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = 1234;
const app = express();

app.use(express.json())
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/ifr", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/embed.html"));
});

app.get("/oembed", (req, res) => {
  const response = {
    "version": "1.0",
    "provider_url": "https://embed-vid2.onrender.com/",
    "provider_name": "Express",
    "type": "video",
    "title": "Bg video",
    "html": "<div style='position:relative;padding-bottom: calc(56.25%)'><iframe src='https://embed-vid2.onrender.com/ifr' style='position:absolute;width:100%;margin: 0; padding: 0;top:0;left:0;' frameborder='0' scrolling='no' width='1280' height='720' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>",
    "width": 1280,
    "height": 720,
    "thumbnail_url": "https://embed-vid2.onrender.com/assets/poster.jpg",
    "thumbnail_width": 1280,
    "thumbnail_height": 720,
  }
  res.writeHead(200, {
    "access-control-allow-headers": "Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type",
    "access-control-allow-methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH",
    "access-control-allow-origin": "*",
    "x-frame-options": "SAMEORIGIN",
    "x-content-type-options": "nosniff",
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(response));
});

app.listen(PORT, () => {
  console.log("Listening port", PORT);
});