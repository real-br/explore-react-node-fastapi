import os
import gpxpy
import aiofiles
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()
UPLOAD_FOLDER = "uploads/"

# Ensure the uploads directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


async def process_gpx_endpoint(gpx: UploadFile = File(...)):
    if gpx is None or gpx.filename is None:
        raise HTTPException(status_code=400, detail="No file uploaded")

    if not gpx.filename.endswith(".gpx"):
        raise HTTPException(status_code=400, detail="File must be a GPX file")

    gpx_file_path = os.path.join(UPLOAD_FOLDER, gpx.filename)

    try:
        async with aiofiles.open(gpx_file_path, "wb") as out_file:
            content = await gpx.read()
            await out_file.write(content)

        async with aiofiles.open(gpx_file_path, "r") as gpx_file:
            gpx_data = await gpx_file.read()
            gpx_parsed = gpxpy.parse(gpx_data)  # Parse the GPX file from string data

            print(gpx_parsed)
            response_data = {"gpx": str(gpx_parsed)}

        # Clean up by removing the uploaded file
        os.remove(gpx_file_path)

        print(JSONResponse(content=response_data))
        return JSONResponse(content=response_data)

    except Exception as e:
        print("Error processing GPX:", e)
        raise HTTPException(status_code=500, detail="Failed to process GPX data")
