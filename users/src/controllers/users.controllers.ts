import { Request, Response } from "express";

// Mock user data (You can later replace this with actual database logic)
const users = ["Annisa", "Wildan", "Miftah", "Khansa"];

// Get all users
export async function getAllUsers(req: Request, res: Response) {
  return res.json({ users });
}

// Get a single user by ID
export async function getSingleUser(req: Request, res: Response) {
  const { id } = req.params;
  const userIndex = parseInt(id, 10);

  if (isNaN(userIndex) || userIndex >= users.length || userIndex < 0) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ user: users[userIndex] });
}

// Create a new user
export async function createUser(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  users.push(name);
  return res.status(201).json({ message: "User created", user: name });
}

// Update a user by ID
export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  const userIndex = parseInt(id, 10);

  if (isNaN(userIndex) || userIndex >= users.length || userIndex < 0) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  users[userIndex] = name;
  return res.json({ message: `User ${id} updated`, updatedUser: name });
}

// Delete a user by ID
export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const userIndex = parseInt(id, 10);

  if (isNaN(userIndex) || userIndex >= users.length || userIndex < 0) {
    return res.status(404).json({ error: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  return res.json({ message: `User ${id} deleted`, deletedUser });
}
