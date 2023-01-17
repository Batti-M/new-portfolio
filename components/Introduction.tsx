import React, { MouseEvent, AnimationEvent } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  CssBaseline,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { keyframes } from "@emotion/react";
import SvgIcon from "@mui/material/SvgIcon";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let myTheme = createTheme()

myTheme = responsiveFontSizes(myTheme);

const jiggle = keyframes({
  "0%": {
    transform: "scale(1, 1.2)",
  },
  "25%": {
    transform: "scale(1.3,1)",
  },
  "50%": {
    transform: "scale(1.4, 0.9)",
  },
  "75%": {
    transform: "scale(0.95, 1.05)",
  },
  "100%": {
    transform: "scale(1, 1.2)",
    color: "#99582a",
  },
});

const flyaway = keyframes({
  "0%": {
    rotate: "-15deg",
    offsetDistance: "0%",
  },
  "50%": {
    scale: "0.5",
  },
  "100%": {
    rotate: "-50deg",
    scale: "0",
    offsetDistance: "100%",
  },
});

const useStyles = makeStyles()((myTheme) => {
  return {
    box: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      textShadow: "2px 5px 5px rgb(0,0,0)",
      fontStyle: "italic",
      letterSpacing: "0rem",
    },

    jiggleAni: {
      
      animation: `${jiggle} 0.75s ease-in-out forwards`,
    },
    paperplane: {
      width: "60px",
      height: "60px",
      "&:hover": {
        animation: `${flyaway} 3500ms forwards ease-in-out`,
        offsetPath: ' path("M1.1,29.1c0,0,371.7,15.8,6771.7-1861.9")',
      },
    },
    mailButton: {
      color: "#99582a",
      display: "flex",
      width: "200px",
      justifyContent: "center",
      backgroundColor: "#DDA15E",
      "&:hover": {
        backgroundColor: "#DDA15E",
      },
    },
    mailDiv: {
      "&:hover": {
        backgroundColor: "#DDA15E",
      },
    },
    lebenslaufBtn: {
      color: "#99582a",
      display: "flex",
      width: "200px",
      padding: "1.5rem",
      marginTop:"60px",
      backgroundColor: "#DDA15E",
      "&:hover": {
        backgroundColor: "#DDA15E",
        color: "white"
      },
    },
   AnschreibenBtn: {
    color: "#99582a",
    display: "flex",
    width: "200px",
    padding: "1.5rem",
    marginTop:"60px",
      backgroundColor: "#DDA15E",
      "&:hover": {
        backgroundColor: "#DDA15E",
        color: "white"
      },
    },
    btnwrapper: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "2rem",
      width: "100%",
    }

  };
});

type refProps = {
  introductionRef: React.MutableRefObject<HTMLDivElement | null>;
};

function Introduction({ introductionRef }: refProps) {
  const { classes } = useStyles();

  function handleHoverIn(
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>
  ) {
    const target = event.target as Element;
    target.classList.add(classes.jiggleAni);
  }
  function handleHoverOut(
    event:
      | MouseEvent<HTMLButtonElement>
      | AnimationEvent<HTMLDivElement>
      | MouseEvent<HTMLDivElement>
  ) {
    const target = event.target as Element;

    target.classList.remove(classes.jiggleAni);
  }

  const name = "Bartosz";
  const surname = " Mieszkalski";
  const nameLetters = name.split("");
  const surnameLetters = surname.split("");

  const navigate = useNavigate();

  return (
    <Container ref={introductionRef}>
      <CssBaseline />
      <div
        style={{
          height: "90vh",
          backgroundColor: "#FEFAE0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{ textTransform: "uppercase", color: "#99582a" }}
        >
          Hi, I'm
        </Typography>
        
        <div className={classes.box}>
          {nameLetters.map((letter, index) => (
            <Box
              sx={{ color: "#F37602",fontWeight:"bold", fontSize: "8rem"}}
              key={index}
              onMouseOver={handleHoverIn}
              onAnimationEnd={handleHoverOut}
            >
              <Typography variant="h1">{letter}</Typography>
            </Box>
          ))}
        </div>

        <div className={classes.box}>
          {surnameLetters.map((letter, index) => (
            <Box
              sx={{ fontSize: "8rem",fontWeight:"bold", color:"#F37602" }}
              key={index}
              onMouseOver={handleHoverIn}
              onAnimationEnd={handleHoverOut}
            >
              <Typography variant="h1">{letter}</Typography>
            </Box>
          ))}
        </div>
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", color: "#99582a" }}
        >
          Frontend Developer focused on working with React
        </Typography>
        <div className={classes.btnwrapper}>
          <div style={{ marginTop: "60px" }}>

            <Button
              component="a"
              href="mailto:bartosz-m@outlook.de"
              variant="contained"
              className={classes.mailButton}
              >
              Mail me
              <img
                src="paperplane.svg"
                alt="paperplane"
                className={classes.paperplane}
                />
              </Button>

          </div>

            <Button  
              variant="contained" 
              onClick={() => navigate("/lebenslauf")}
              className={classes.lebenslaufBtn}>
              Zum Lebenslauf
            </Button>
            <Button  variant="contained" 
            onClick={() => navigate("/anschreiben")}
            className={classes.AnschreibenBtn}>
              Zum Anschreiben
            </Button>
            </div>

      </div>
    </Container>
  );
}

export default Introduction;
