const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

function handleHome(req, res) {
  res.send("Hello from home");
  // console.log("Hello from home");
  // console.log(req);
}

app.get('/', handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);