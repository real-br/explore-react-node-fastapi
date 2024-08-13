import React from "react";
import { Box } from "@mui/material";

const AnimatedBike = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-label="Animated Bike"
      >
        <defs>
          <style>
            {`
              @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .wheel {
                animation: rotate 1s linear infinite;
              }
            `}
          </style>
        </defs>
        <g fill="none" stroke="black" strokeWidth="6">
          {/* Bike Frame */}
          <line x1="30" y1="150" x2="80" y2="100" />
          <line x1="80" y1="100" x2="140" y2="100" />
          <line x1="140" y1="100" x2="190" y2="150" />
          <line x1="30" y1="150" x2="190" y2="150" />
          <line x1="80" y1="100" x2="140" y2="150" />
          <line x1="140" y1="150" x2="80" y2="150" />
        </g>
        <circle
          className="wheel"
          cx="80"
          cy="150"
          r="30"
          stroke="black"
          strokeWidth="6"
        />
        <circle
          className="wheel"
          cx="140"
          cy="150"
          r="30"
          stroke="black"
          strokeWidth="6"
        />
        <circle cx="80" cy="150" r="6" fill="black" />
        <circle cx="140" cy="150" r="6" fill="black" />
      </svg>
    </Box>
  );
};

export default AnimatedBike;
