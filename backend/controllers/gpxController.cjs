const fs = require("fs");
const path = require("path");
const multer = require("multer");
require("graphhopper-js-api-client");
var GraphHopper = require("graphhopper-js-api-client/src/GraphHopperRouting");
const parseGpxData = require("../utils/gpxParser.cjs");

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Create an instance of the GraphHopperRouting client
var ghClient = new GraphHopper({
  key: "ea0b4bea-eb7c-42ca-a8cd-c7d6db407885",
  vehicle: "bike",
  locale: "en",
  elevation: false,
  instructions: true,
});

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

        const waypoints = await parseGpxData(gpxData);
        const points = waypoints.map((point) => [point.lon, point.lat]);

        const routeResponse = await ghClient.doRequest({
          points: points,
        });

        // Extract the turn-by-turn instructions from the response
        const instructions = routeResponse.paths[0].instructions;
        res.json({ instructions });

        // Clean up the uploaded file
        fs.unlinkSync(gpxFilePath);
      } catch (error) {
        console.error("Error processing GPX:", error);
        res.status(500).json({ error: "Failed to process GPX data" });
      }
    },
  ],
};

module.exports = gpxController;
