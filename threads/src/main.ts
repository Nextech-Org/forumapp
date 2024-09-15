import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from Threads Services!");
});

app.listen(8001, () => console.log("Server started on port 8001"));
