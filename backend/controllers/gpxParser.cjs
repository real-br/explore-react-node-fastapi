const fs = require("fs");
const path = require("path");
let multer = require("multer");
// import parseGpxData from "../utils/gpxParser.tsx";
let gpxParser = require("gpxparser");

// import { Request, Response } from "express";

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

const gpxController = {
  processGpx: [
    upload.single("gpx"),
    async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ error: "GPX file is required" });
        }

        const gpxFilePath = path.join(process.cwd(), req.file.path);
        const gpxData = fs.readFileSync(gpxFilePath, "utf8");

        var gpx = new gpxParser();
        gpx.parse(gpxData); //parse gpx file from string data
        console.log(gpx);
        res.json({ gpx });
        //pivot: PimpMyRide. Analyze GPX file and provide:
        // Headwind parts
        // Cafe stops along the way
        // Hill climbs along the way
        // POI
        // Bike Service points
        // Playlist suggestion
        // Turn By Turn

        fs.unlinkSync(gpxFilePath);
      } catch (error) {
        console.error("Error processing GPX:", error);
        res.status(500).json({ error: "Failed to process GPX data" });
      }
    },
  ],
};

module.exports = gpxController;
