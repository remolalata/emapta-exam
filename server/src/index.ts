import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dataRoutes from "./routes/dataRoutes";

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors()); // Allow all origins by default

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", dataRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
