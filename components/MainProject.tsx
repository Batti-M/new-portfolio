import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "tss-react/mui";
import {
  Link,
  Button,
  Slide,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

const useStyles = makeStyles()((myTheme) => {
  return {
    root: {
      backgroundColor: "#FEFAE0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
      overflow: "hidden",
    },
    media: {
      width: "100%",
      backgroundPosition: "center center",
      aspectRatio: "16/9",
    },
    button:{
      backgroundColor: "#341C1C",
      color:"#FEFAE0"
    }
  };
});

const MainProject: React.FC = () => {
  const { classes } = useStyles();
  const { ref, inView } = useInView();

  return (
    <Container ref={ref} className={classes.root}>
      <CssBaseline />
      <Slide in={inView} direction="left" timeout={1200}>
        <Card elevation={16}>
          <CardMedia
            className={classes.media}
            image={"Zoesha.png"}
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Zoesha
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This project is an online shop for a fictional company.
            </Typography>
          </CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "4px",
              alignItems: "center",
            }}
          >
            <Link href="https://github.com/Batti-M/TestingGround/tree/master/Zoesha">
              <GitHubIcon sx={{ fontSize: "2rem",color:"#341C1C" }} />
            </Link>
            <Button variant="contained" className={classes.button}>
              Try it out
            </Button>
          </div>
        </Card>
      </Slide>
    </Container>
  );
};

export default MainProject;
