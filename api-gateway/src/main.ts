import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/users", createProxyMiddleware({ target: "http://localhost:8000" }));
app.use("/threads", createProxyMiddleware({ target: "http://localhost:8001" }));
app.use("/replies", createProxyMiddleware({ target: "http://localhost:8002" }));

app.listen(3000, () => console.log("Server started on port 3000"));
