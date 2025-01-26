import { Router } from "express";
import * as fs from "fs";
import * as path from "path";
import { User } from "../types/User";

const router = Router();
const filePath = path.join(__dirname, "../data/data.json");

// Helper functions
const readData = (): User[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as User[];
};

const writeData = (data: User[]) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

// Get all users
router.get("/users", (req, res) => {
  const data = readData();
  res.json(data);
});

// Get a single user by ID
router.get("/users/:id", (req, res) => {
  const data = readData();
  const user = data.find((u) => u.id === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Create a new user
router.post("/users", (req, res) => {
  const data = readData();
  const newUser: User = { ...req.body, id: `${Date.now()}` }; // Generate a unique ID
  data.push(newUser);
  writeData(data);

  res.status(201).json(newUser);
});

// Update a user
router.put("/users/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex((u) => u.id === req.params.id);

  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    writeData(data);
    res.json(data[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  const data = readData();
  const filteredData = data.filter((u) => u.id !== req.params.id);

  console.log(filteredData);

  if (filteredData.length !== data.length) {
    writeData(filteredData);
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
