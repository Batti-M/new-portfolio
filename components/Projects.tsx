import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MainProject from "./MainProject";

import GitHubIcon from "@mui/icons-material/GitHub";
import { useInView } from "react-intersection-observer";
import Slide from "@mui/material/Slide";
import { makeStyles } from "tss-react/mui";
import { styled } from "@mui/material/styles";
import {
  Link,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const useStyles = makeStyles()((myTheme) => {
  return {
    card: {
      maxWidth: 345,
    },
    media: {
      width: "100%",
      backgroundPosition: "center center",
      aspectRatio: "16/9",
    },
    content: {
      height: 155,
    },
    github: {
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        borderbottom: "2px solid #24fa2d",
      },
    },
  };
});


type refProps = {
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};
const myTheme = createTheme({});


export default function Projects({ projectsRef }: refProps): JSX.Element {
  const {ref: ref1, inView: inView1} = useInView();
  const {ref: ref2, inView: inView2} = useInView();
  const {ref: ref3, inView: inView3} = useInView();
  
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "CatMeHappy",
      description:
        "It's application that allows users to search for cat images. It uses the Cat API to fetch images.",
      image: "catmehappy.png",
      githublink: "https://github.com/Batti-M/portfolio/tree/main/catmehappy",
      ref: ref1,
      inView: inView1,
    },
    {
      title: "Meme Generator",
      description:
        "With this application you can create your own meme.It uses the ImgFlip API to fetch images.",
      image: "memeGeneratorNew.png",
      githublink:
        "https://github.com/Batti-M/portfolio/blob/main/MemeGenerator.js",
        ref: ref2,
        inView: inView2,
    },
    {
      title: "RolePlay Game",
      description:
        "With this application you fight a battle that decides the fate of the world",
      image: "rpg-game.png",
      githublink: "https://github.com/Batti-M/portfolio/tree/main/RPGame",
      ref: ref3,
      inView: inView3,
    },
  ];
  const { classes } = useStyles();
  
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Container ref={projectsRef}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            margin: "10% auto",
          }}
        >
          {projects.map((project) => (
            <Grid ref={project.ref} item xs={10} sm={3} key={project.title}>
              <Slide in={project.inView} direction="right" timeout={1200}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    
                  }}
                  variant="elevation"
                  elevation={16}
                  className={classes.card}
                >
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                    sx={{ border: "2px solid #341C1C" }}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#341C1C"
                      component="p"
                    >
                      {project.description}
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
                    <Link href={project.githublink}>
                      <GitHubIcon
                        sx={{ fontSize: "2rem",color:"#341C1C" }}
                        className={classes.github}
                      />
                    </Link>
                    <Button variant="contained" style={{backgroundColor:"#341C1C"}}>
                    
                      Try it out
                    </Button>
                  </div>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </ThemeProvider>
  );
}
