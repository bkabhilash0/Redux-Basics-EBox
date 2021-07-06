const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.json({
    status: "success",
  });
});

app.listen(5000, () => {
  console.log("Running in Port 5000");
});
