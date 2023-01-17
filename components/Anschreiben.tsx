import React from 'react'
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

export default function Anschreiben() {
  return (
    <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" align="center" sx={{color:"#DDA15E",textShadow:"1px 1px 2px black"}}> Bewerbung zum Webprogrammierer/-in in Voll- oder Teilzeit (Quereinsteiger) </Typography>
        </Box>
        <Paper sx={{p:4, backgroundColor:"#FEFAE0"}}>
            <Typography variant="body2">
              <p style={{marginBottom:"50px"}}> Sehr geehrte Damen und Herren der Lenk GmbH,</p> 

              
              <p>  über die letzten Monate habe ich eine große Leidenschaft für’s Programmieren entwickelt. 
                  Da ich eine berufliche Veränderung anstrebe, möchte ich nun meine Leidenschaft auch beruflich ausleben.
                  Durch mein Selbststudium habe ich mir gute Kenntnisse in HTML, CSS, Javascript und React angeeignet, 
                  sowie Grundkenntnisse in PostgreSQL, React Redux, Material UI, Firebase, TypeScript und SaSS.
                </p>
              
            </Typography>
            <Typography variant="body2">
              <p>Mein Interesse für die Informatik geht einige Jahre zurück. Zu dieser Zeit habe ich ein Studium in Tübingen begonnen, jedoch musste ich dieses aus persönlichen Gründen abbrechen.
              Das Thema Informatik, vor allem Webdesign, ist jedoch nie vollkommen von meinem Radar verschwunden, so dass ich immer wieder begonnen habe einige Zeilen zu schreiben.
              Mit der Zeit habe ich mich immer mehr in die Materie vertieft und mich mit verschiedenen Online-Kursen und Büchern während meines Fulltime-Jobs weitergebildet, 
              so dass das Programmieren nach einigen Monaten zu meiner größten Leidenschaft wurde.
              </p>
            <p>
            Wie Sie sehen, gewinnen Sie mit mir einen Mitarbeiter, der extrem motiviert ist sich umfassend und selbstverständlich auch in seiner Freizeit in einen neuen Bereich einzuarbeiten
            und es gewohnt ist, selbstständig zu arbeiten.
              
            </p>
            </Typography>
             
            <Typography variant="body2">
            Neben einem hohen Maß an Kollegialität und einer guten und schnellen Auffassungsgabe,
             habe ich mich in meinen bisherigen beruflichen Stationen vor allem durch meine hohe Leistungsbereitschaft, Eigeninitiative und Zuverlässigkeit
              - nur ein Fehltag in den letzten fünf Jahren belegt dies - hervorgetan.
            Diese Fähigkeiten würde ich nun auch gerne bei Ihrem Unternehmen einbringen.
            </Typography>
            <Typography variant="body2">
           <p> Für Ihr Unternehmen interessiere ich mich zum einen besonders, da sich Ihr Tätigkeitsfeld mit meinen Interessen deckt und zum anderen, 
            die Atmospähre in Ihrem Team, das zu sein scheint, wonach ich suche.</p>
            
             <p>Zudem sehe ich bei Ihnen die Chance mich ideal weiterzuentwickeln und meine Fähigkeiten zu erweitern, um so mehr und mehr Verantwortung und Aufgaben übernehmen zu können.
             Denn auch wenn ich bisher noch keine Erfahrung in PHP habe, so kann ich Ihnen versichern, während ich , wie in der Stellenbeschreibung angedeutet,
             zumeist mit HTML und CSS arbeiten würde, mich nebenbei intensiv damit befassen werde, mir Kenntnisse in PHP und allen anderen nötigen Programmiersprachen & Tools anzueignen. </p>
           
            </Typography>
            <Typography variant="body2">
              <p>Ich freue mich sehr auf die Möglichkeit, mich persönlich bei Ihnen vorzustellen und Ihnen meine Fähigkeiten und Motivation näher zu bringen.</p>
              <p>Sollten Sie vorab meine Fähigkeiten testen wollen, würde ich mich sehr über eine Testaufgabe freuen.</p>

              <p >Ich freue mich auf Ihre Antwort und verbleibe bis dahin.</p>
              <p style={{marginTop:"50px"}}> Mit besten Grüßen,</p>
              <p> Bartosz Mieszkalski </p>
            </Typography>
            
        </Paper>
    </Container>
  )
}
