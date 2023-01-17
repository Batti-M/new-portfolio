import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((myTheme) => {
    return{
        root: {
            position: 'static',
            display: 'grid',
            placeContent:" center",
            bottom: 0,
            width: '100%',
            height: '50px',
            color: myTheme.palette.primary.contrastText,
            backgroundColor:"#DDA15E",
        },
        button: {
            fontSize: '2rem',
            position: 'fixed',
            bottom: "100px",
            color:"#ffe6a7",
            backgroundColor: "#DDA15E",
            '&:hover': {
                backgroundColor: "#341C1C",
            }
        }
      }});

export default function Footer() {

    const {classes} = useStyles();
  
    const handleClick = () => {
      window.scrollTo({
          top: 0,
          left: 0, 
          behavior: 'smooth'
      });
    };
  
    return (
      <>
        <Button className={classes.button} onClick={handleClick}>&uarr;</Button>
      <footer className={classes.root}> Copyright &#169; Bartosz Mieszkalski ~ 2022</footer>
      </>
    );
  };
  
  
  
  