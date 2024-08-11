const { parseStringPromise } = require("xml2js");

async function parseGpxData(gpxData) {
  const result = await parseStringPromise(gpxData);
  const trkpts = result.gpx.trk[0].trkseg[0].trkpt;

  return trkpts.map((pt) => ({
    lat: parseFloat(pt.$.lat),
    lon: parseFloat(pt.$.lon),
    ele: parseFloat(pt.ele[0]),
  }));
}

module.exports = parseGpxData;
