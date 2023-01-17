import React,{ RefObject, useRef} from "react";
import { useInView } from "react-intersection-observer";

import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { ThemeProvider, CssBaseline, createTheme,CardMedia,Card } from "@mui/material";
import {Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";

const useStyles = makeStyles()((myTheme) => {
  return {
    box: {
      display: "inline-block",
    },
    logo:{
  
      height: "80%",
      width: "80%",
     
    }
  };
});

const myTheme = createTheme({});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"#FEFAE0",
  height: "auto",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justfiyContent: "center",
  alignItems: "center",
  elevation: 24,
  textAlign: "center",
  color: "#341C1C",
}));

type refProps = {
  techRef: React.MutableRefObject<HTMLDivElement | null>;
};


export default function Techstack({techRef}:refProps): JSX.Element {
 
  const { ref, inView } = useInView();

  const { ref: mainLogoRef, inView: mainLogoInView } = useInView();
  const { ref: secondaryLogoRef, inView: secondaryLogoInView } = useInView();
  
  const { classes } = useStyles();

  const myMainLogos = [{
    src:"css3-logo.svg",
    name: "CSS3"
  },
  {
    src:"html-logo.svg",
    name: "HTML5"
  },
  {
    src:"javascript-logo.svg",
    name: "Javascript"
  },
  {
    src:"react-logo.svg",
    name: "React"
  }
  ]

  const mySecondaryLogos = [{
    src:"firebase-logo.svg",
    name: "Firebase"
  },   
  {
    src:"materialUI-logo.svg",
    name: "MaterialUI"
  },   
  {
    src:"react-router-logo.svg",
    name: "React-Router"
  },   
  {
    src:"sass-logo.svg",
    name: "SaSS"
  },  
  {
    src:"typescript-logo.svg",
    name: "Typescript"
  },    
  {
    src:"redux-logo.svg",
    name: "Redux"
  },   
]
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
    <Container maxWidth="sm" ref={techRef}>
      <Paper sx={{p:2,mt:4,backgroundColor:"#341C1C"}}>
        
          <Typography variant="h5" color="#FEFAE0" align="center" gutterBottom>
            THIS IS MY MAIN TECHSTACK
          </Typography>
        
        
        <Grid container spacing={1} sx={{ height: "auto",width: "100%", alignItems: "center", justifyContent: "space-around"}}>
        
            {myMainLogos.map((logo,index) => (
            <Grow ref={mainLogoRef} in={mainLogoInView} timeout={index*400}>
              <Grid item xs={3} key={logo.src}>
                <Item sx={{display: "flex",justifyContent:"space-between"}}>

                  <img src={logo.src} className={classes.logo} alt="Logo" />
                <Typography variant="body1" align="center" gutterBottom>
                  {logo.name}
                </Typography>
                </Item>
              </Grid>
              </Grow>
            ))}
        </Grid>

      </Paper>
      
              
      <Paper sx={{p:3, mt: 4, mb: 4,backgroundColor:"#341C1C"}}>
      
          <Typography variant="body2" color="#FEFAE0" style={{textTransform:"uppercase"}}  align="center" gutterBottom>
            In the following tools i have a good understanding of the basics and i am working daily to improve them
          </Typography>
        
        <Grid container spacing={1} sx={{ height: "auto",width: "100%", alignItems: "center", justifyContent: "space-around"}}>
        
        {mySecondaryLogos.map((logo,index) => (
        <Grow ref={secondaryLogoRef} in={secondaryLogoInView} timeout={index*700}>
          <Grid item xs={3} m={1} key={logo.src}>
            <Item sx={{display: "flex", justifyContent:"space-between"}} >

                <img src={logo.src} className={classes.logo} alt="Logo" />
                <Typography variant="body2" align="center" >
                    {logo.name}
                  </Typography>
            </Item>
          </Grid>
          </Grow>
        ))}
        </Grid>
      </Paper>
    </Container>
   </ThemeProvider>
  );
}
