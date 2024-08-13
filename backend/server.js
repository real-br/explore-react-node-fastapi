import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gpxController from "./controllers/gpxParser.cjs";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).send("Backend is on 🔥");
});

app.get("/api/parse", (req, res) => {
  res.status(200).send("Service is on 🔥");
});

app.post("/api/parse", gpxController.processGpx);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
