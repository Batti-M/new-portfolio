import React, { useState, MouseEventHandler } from "react";
import { makeStyles } from "tss-react/mui";

import {
  AppBar,
  Slide,
  Toolbar,
  IconButton,
  MenuItem,
  Box,
  Typography,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles()((myTheme) => {
  return {
    sticky: {
      position: "sticky",
      top: 0,
      backgroundColor: "#FEFAE0",
    },
    sxNavBoxStyle: {
      transition: "all 0.5s ease-in-out",
      borderRadius: "5px",
      " &:hover": {
        transition: "all 0.5s ease-in-out",
        backgroundColor: "#341C1C",
        color: "white",
      },
    },
    github: {
      fontSize: "2.5rem",
    },
  };
});

type refProps = {
  headerRef: React.MutableRefObject<HTMLDivElement | null>;
  introductionRef: React.MutableRefObject<HTMLDivElement | null>;
  techRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function Header(props: refProps) {
  // Use the useState hook to store the state of the dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { classes } = useStyles();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToRef = (
    ref: React.RefObject<HTMLDivElement | null> | null
  ): any => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box
    ref={props.headerRef}
    sx={{ flexGrow: 1, zIndex: "3" }}
    className={classes.sticky}
    >
    
      <AppBar
        position="static"
        sx={{
          boxShadow: 3,
          color: "#FEFAE0",
          bgcolor: "#DDA15E",
         
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDropdown}
            sx={{ mr: 2, transition: "all 0.5s ease-in-out" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome..
          </Typography>
          <a href="https://github.com/Batti-M">
            <GitHubIcon sx={{ color: "white" }} className={classes.github} />
          </a>
        </Toolbar>
      </AppBar>
     


      {dropdownOpen && (
        <Box
          aria-label="dropdown-menu"
          sx={{
            width: "300px",
            boxShadow: 3,
            bgcolor: "#DDA15E",
            p: 2,
            flexGrow: 0,
            position: "absolute",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <MenuItem
            sx={{
              bgcolor: "#FEFAE0",
              margin: 0.5,
              padding: 2,
              color: "#283618",
              boxShadow: 3,
              transition: "all 0.5s ease-in-out",
            }}
            onClick={() => scrollToRef(props.introductionRef)}
            className={classes.sxNavBoxStyle}
          >
            Introduction
          </MenuItem>
          <MenuItem
            sx={{
              bgcolor: "#FEFAE0",
              margin: 0.5,
              padding: 2,
              color: "#283618",
              boxShadow: 3,
              transition: "all 0.5s ease-in-out",
            }}
            onClick={() => scrollToRef(props.techRef)}
            className={classes.sxNavBoxStyle}
          >
            My Techstack
          </MenuItem>
          <MenuItem
            sx={{
              bgcolor: "#FEFAE0",
              margin: 0.5,
              padding: 2,
              color: "#283618",
              boxShadow: 3,
              transition: "all 0.5s ease-in-out",
            }}
            onClick={() => scrollToRef(props.projectsRef)}
            className={classes.sxNavBoxStyle}
          >
            My Projects
          </MenuItem>
        </Box>
      )}
    </Box>
  );
}
