import React from 'react'
import {
    Box,
    Grid,Card,CardMedia, CardContent,
    CssBaseline,
    Button,  Link,
    Container,
    Paper,
    Typography,
  } from "@mui/material";
  import { makeStyles } from "tss-react/mui";
  import { styled } from '@mui/material/styles';
  import GitHubIcon from "@mui/icons-material/GitHub";

  const useStyles = makeStyles()((myTheme) => {
    return {
      date: {
        position: "absolute",
        backgroundColor: "#DDA15E",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        top: "-1.2rem",
        left: "0.3rem",
      },
      underline: {
        position:"relative",
        right: "-10%",
        textShadow: "0.1rem 0.1rem 0.1rem #000",
        "&::after": {
            content: '""',
            position: "absolute",
            width: "60%",
            height: "2rem",
            backgroundColor: "#a37f68",
            bottom: "-0.5rem",
            left:"20%",
            zIndex: "-1",
           
            }
        },
        icons: {
            height: "40px",
            width: "40px", 
            marginBottom: "-1rem",
            paddingBottom:0
        },
        showBtn:{
            backgroundColor:"#a37f68",
            color:"white",
            margin: "1rem",
            position: "relative",
            left: "0.5rem",
            "&:hover":{
                backgroundColor: "#341C1C",
                
            }
        },
        dateEducation:{
            position: "absolute",
            backgroundColor: "#5e5c6c",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            top: "-1.2rem",
            left: "0.3rem",
        },
        showEducation:{
            backgroundColor: "#5e5c6c",
            color: "#fff",
            margin: "1rem",
            "&:hover":{
                backgroundColor: "#341C1C",
                color: "#DDA15E",
            }
         },
         showBeruf:{
            backgroundColor: "#DDA15E",
            color: "black",
            margin: "1rem",
            "&:hover":{
                backgroundColor: "#DDA15E",
                color: "#fff",
            }
            },

    };
  });
 



export default function Lebenslauf() {
    const { classes } = useStyles();
    const [shown, setShown] = React.useState(false);
    const [lebenslauf, setLebenslauf] = React.useState("beruf");

    const berufe = [
    {
        title: "Teamleiter",
        date: "11/2009 - 09/2016 ",
        company: "TeamWork -  die Büttgen GmbH",
        location: "Passau",
        tasks: [
            "Warenannahme und -verteilung",
            "Kundenberatung",
            "Personalverantwortung",
            "Aktionsplanung",
            "Lagerverwaltung"
        ],
    },
    {
        title: "Studentenjobs",
        date: "10/2016 - 09/2017",
        company: "Studitemps GmbH",
        location: "Tübingen",
        tasks: [
            "Inventurhelfer bei C&A",
            "Sales Assistant bei H&M",
            "Logistiker bei Saturn"
        ],
    },
    {
        title: "Markenbetreuer",
        date: "11/2016 - 12/2017",
        company: "Sig Sales GmbH",
        location: "Tübingen",
        tasks: [
            "Aktionsplanung",
            "Kundenberatung",
            "Warenannahme und -verteilung",
            "Verwaltung von Lagerbeständen"
        ],
    },{
        title: "Produktionsmitarbeiter",
        date: "01/2018 - 06/2018",
        company: "Logo Dienstleistungen GmbH",
        location: "Reutlingen",
        tasks: [
            "Lagerverwaltung",
            "Aufbau von Versandkisten für Großgeräte"
        ],
    },{
        title: "Briefzusteller",
        date: "01/2019 - 09/2022",
        company: "Deutsche Post AG",
        location: "Tübingen",
        tasks: [
            "Übernehmen, Sortieren und Zusammenführen nach Gangfolge" ,
            "Bearbeiten von Zahlungsanweisungen/Kassieren von Bargeld",
            "Erstellen der Zustellabrechnung",
            "Auslieferung von Brief- und Paketsendungen"
        ],
    },{
        title: "Zeitungsausträger",
        date: "10/2022 - heute",
        company: "Schwäbisches Tagblatt",
        location: "Tübingen",
        tasks: [
            "Zustellung von Zeitungen und Zeitschriften",
        ]
        },

]
    const schulen = [
        {
            date: "09/1998 - 07/2007",
            schule: "Joseph-von-Fraunhofer-Gymnasium Cham",
            abschluss: "Erlangen der allgemeinen Hochschulreife"
        },
        {
            date: "07/2007 - 06/2008",
            schule: "Panzergrenadierbataillon 112 in Regen",
            abschluss: "vollendete Fernmeldeausbildung"
        },
        {
            date: "10/2008 - 09/2010",
            schule: "Universität Passau",
            abschluss: "Studium in Business Administration and Economics ohne Abschluss"
        },
        {
            date: "10/2016 -  09/2017",
            schule: "Universität Tübingen",
            abschluss: "Studium in Informatik ohne Abschluss"
        },
    ]

    const toggleShown = () => {
        setShown(!shown);
    };

    const toggleLebenslauf = ( ) => {
        lebenslauf === "beruf" ? setLebenslauf("schule") : setLebenslauf("beruf");
        console.log(lebenslauf)
    };
      


  return (
    <Container sx={{backgroundColor:"#fff"}}>
        <CssBaseline />
        <Grid container spacing={12}>

        
            <Grid item xs={10}  sm={7} sx={{transition: "all ease-in 2000ms"}}>
                {lebenslauf === "beruf" ? 
                    <Box>
                        <Typography variant="h2" className={classes.underline} sx={{color:"#DDA15E",position:"absolute",top:0,right:"20%",zIndex:2,fontWeight:"bold"}}>beruflicher Werdegang</Typography>
                        <Button className={classes.showBtn} onClick={toggleShown}> zeige Aufgaben</Button>
                        <Button className={classes.showEducation} onClick={toggleLebenslauf}> zeige schulische Ausbildung</Button>
                        {berufe.map((beruf) => (
                            <Paper sx={{m: 3,p:2,pl:8, width:"100%",position:"relative",backgroundColor:"#FEFAE0"} }>
                                <Typography variant="subtitle2" className={classes.date}>{beruf.date}</Typography>
                                <Typography onClick={toggleShown} variant="h6" sx={{color:"#DDA15E",fontWeight:"bold"}}>{beruf.title}</Typography>
                            
                                <Typography variant="subtitle2" sx={{pb:0,mb:0}}>{beruf.company} in {beruf.location}</Typography>
                                
                                <Typography sx={{display: shown ? "block" : "none" }} variant="subtitle1"><ul>{beruf.tasks.map(task=>(
                                    <li>
                                        <Typography variant="subtitle2" sx={{lineHeight:0}}>{task}</Typography>
                                    </li>
                                )
                                )
                            }</ul></Typography>
                                
                            </Paper>
                        ))}
                    </Box> 
                    :
                    <Box>
                        <Typography variant="h2" className={classes.underline} sx={{color:"#5e5c6c",position:"absolute",top:0,right:"20%",zIndex:2,fontWeight:"bold"}}>schulischer Werdegang</Typography>
                        
                        <Button className={classes.showBeruf}  onClick={toggleLebenslauf}> zeige berufliche Ausbildung</Button>
                        {schulen.map((schule) => (
                            <Paper sx={{m: 3,p:2,pl:8, width:"100%",position:"relative",backgroundColor:"#FEFAE0"} }>
                                <Typography variant="subtitle2" className={classes.dateEducation}>{schule.date}</Typography>
                            
                                <Typography variant="h6" sx={{pb:0,mb:0,color:"#5e5c6c"}}>{schule.schule}</Typography>
                                <Typography variant="subtitle2" sx={{pb:0,mb:0}}>{schule.abschluss}</Typography>
                
                                
                            </Paper>
                        ))}
                    </Box> 
        }
               
            </Grid> 
            
            <Grid item xs={10} sm={3}>
               
                <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "auto",
                    marginTop: "0.5rem",
                    backgroundColor: "#FEFAE0",
                    
                }}
                variant="elevation"
                elevation={6}
                >
                
                    
                    <CardMedia
                        component="img"
                        image="./src/assets/me.jpg"
                        title="some title"
                        height="240"
                        sx={{ border: "2px solid #341C1C" }}
                    />
                    
                    <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",textAlign:"center",gap:"1rem"}} >
                        <Typography gutterBottom variant="h5" sx={{fontWeight:"bold"}} >
                        Bartosz Mieszkalski
                        </Typography>
                        <img src="./src/assets/birthday-cake.png" className={classes.icons}></img>
                        <Typography
                        variant="body2"
                        color="#341C1C"
                        component="p"
                        >
                        22.08.1987
                        </Typography>
                        <img src="./src/assets/email.png" className={classes.icons}></img>
                        <Typography   variant="body2"
                        color="#341C1C"
                        component="p">
                            bartosz-m@outlook.de
                        </Typography>
                        <img src="./src/assets/handy-mobiltelefon.png" className={classes.icons}></img>
                        <Typography   variant="body2"
                        color="#341C1C"
                        component="p">
                            0179/4906291
                        </Typography>
                        <img src="./src/assets/platzhalter.png" className={classes.icons}></img>
                        <Typography   variant="body2"
                        color="#341C1C"
                        component="p">
                            Gelber Kreidebusen
                        </Typography>
                        <Typography   variant="body2"
                        color="#341C1C"
                        component="p" sx={{marginTop:"-1rem"}}>
                            72108 Rottenburg am Neckar
                        </Typography>
                        <img src="./src/assets/internet-icon.png" className={classes.icons}></img>
                        <Typography   variant="body2"
                        color="#341C1C"
                        component="p"
                        sx={{ textDecoration: "none"}}>
                          <Link sx={{ textDecoration: "none",color:"black"}}href="bartosz-mieszkalski.de">bartosz-mieszkalski.de
                          </Link> 
                        </Typography>

                        <Link href={"https://github.com/Batti-M/"}>
                        <GitHubIcon
                            sx={{ fontSize: "2rem",color:"#341C1C" }}
                        />
                        </Link>
                   

                    </CardContent>
                   
                </Card>
            
              
              
            </Grid>
        </Grid> 
    </Container>
  )
}
