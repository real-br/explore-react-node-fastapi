import fs from "fs";
import path from "path";
import { parseStringPromise } from "xml2js";

const gpxFilePath = path.join(process.cwd(), "KVO.gpx");

function readGpxFile(filePath) {
  return fs.promises.readFile(filePath, "utf8");
}

async function parseGpxData(gpxData) {
  const result = await parseStringPromise(gpxData);
  const trkpts = result.gpx.trk[0].trkseg[0].trkpt;

  return trkpts.map((pt) => ({
    lat: parseFloat(pt.$.lat),
    lon: parseFloat(pt.$.lon),
    ele: parseFloat(pt.ele[0]),
  }));
}

async function testParseGpxData() {
  try {
    const gpxData = await readGpxFile(gpxFilePath);
    const parsedData = await parseGpxData(gpxData);

    const expectedFirstPoint = {
      lat: 50.9669,
      lon: 4.1812000000000005,
      ele: 19.810000000000002,
    };

    if (
      parsedData.length === 0 ||
      parsedData[0].lat !== expectedFirstPoint.lat ||
      parsedData[0].lon !== expectedFirstPoint.lon ||
      parsedData[0].ele !== expectedFirstPoint.ele
    ) {
      throw new Error(parsedData[0].ele);
    }

    console.log("Test passed: GPX data is parsed correctly");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

testParseGpxData();
