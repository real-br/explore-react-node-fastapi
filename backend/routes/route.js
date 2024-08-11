import express from "express";
const router = express.Router();
import gpxController from "../controllers/gpxController.cjs";

// POST endpoint to process GPX and get routing information
router.post("/api/route", gpxController.processGpx);

export default router;
