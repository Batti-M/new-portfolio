// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'


// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

//import CatRobotApp from "./components/projects/Catrobot/src/CatRobotApp";
//import  MemeGenerator from './components/MemeGenerator';
//import {RPG} from './components/rpg/rpg';
import Lebenslauf from "./components/Lebenslauf";
import Anschreiben from "./components/Anschreiben";

//import {CatApp} from "./components/projects/catmehappy/CatApp";

//import App from "./components/projects/zoesha/app";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
 
      <Router>
        <Routes>
          
          <Route path="/" element={<App />} />
         
         <Route path="/lebenslauf" element={<Lebenslauf />} />
         <Route path="/anschreiben" element={<Anschreiben />} />  
        </Routes>
      </Router>
   

   
  </React.StrictMode>
);
