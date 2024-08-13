import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

interface Props {
  title: string;
  distance: number;
  owner: string;
}

const RouteCard = ({ title, distance, owner }: Props) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 400,
        margin: 2,
        backgroundColor: "#f9f9f9",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            backgroundColor: "#3f51b5",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            textAlign: "center",
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body1" color="text.secondary">
            <span role="img" aria-label="distance">
              📏
            </span>{" "}
            {distance} km
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" alignItems="center">
          <Typography variant="body1" color="text.secondary" sx={{ mr: 2 }}>
            <span role="img" aria-label="person">
              🧑
            </span>{" "}
            {owner}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box textAlign="center">
          <Typography variant="caption" color="text.secondary">
            Enjoy your route! 🌟
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RouteCard;
