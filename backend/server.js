import express from "express";
import route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Backend is on 🔥");
});

app.get("/api/route", (req, res) => {
  res.send("Service is on 🔥");
});

app.post("/api/route", route);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
