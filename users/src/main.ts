import express from "express";
import { middlewareCheckOrigin } from "./middlewares/middleware.check-origin";
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/users.controllers";

const app = express();

app.use(express.json()); // Parse JSON body

// Middleware
app.use(middlewareCheckOrigin);

// Routes
app.get("/users", getAllUsers); // Get all users
app.get("/users/:id", getSingleUser); // Get single user by ID
app.post("/users", createUser); // Create a new user
app.put("/users/:id", updateUser); // Update user by ID
app.delete("/users/:id", deleteUser); // Delete user by ID

app.listen(8000, () => console.log("Server started on port 8000"));
