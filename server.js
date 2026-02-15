const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));

let latestPage = null;

app.post("/receive", (req, res) => {
  latestPage = req.body;

  console.log("=== NEW PAGE ===");
  console.log("Title:", latestPage.title);
  console.log("URL:", latestPage.url);
  console.log("Content length:", latestPage.content.length);

  res.json({ status: "ok" });
});

app.get("/latest", (req, res) => {
  res.json(latestPage);
});

app.listen(process.env.PORT || 3000);
