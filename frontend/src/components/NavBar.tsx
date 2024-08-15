import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);
  const theme = useTheme();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      style={{
        transition: "top 0.3s",
        top: show ? "0" : `-${theme.mixins.toolbar.minHeight}px`,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          PimpMyRide
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
