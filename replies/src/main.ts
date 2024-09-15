import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from Replies Services!");
});

app.listen(8002, () => console.log("Server started on port 8002"));
