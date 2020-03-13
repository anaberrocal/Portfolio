import React from 'react';
import './App.css';
import Bubble1 from "./assests/Bubble-1.png";
import Bubble2 from "./assests/Bubble-2.png";
import Bubble3 from "./assests/Bubble-3.png";
import Bubble4 from "./assests/Bubble-4.png";
import Grid1 from "./assests/Grid-1.png";
import Grid2 from "./assests/Grid-2.png";
import Plus1 from "./assests/Plus-Sign-1.png";
import Plus2 from "./assests/Plus-Sign-2.png";
import Plus3 from "./assests/Plus-Sign-3.png";
import Line1 from "./assests/Line-1.png";
import Line2 from "./assests/Line-1.png";
import Title from "./assests/Title-Intro.png";

import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import './style.css';
 
// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const Fade = styled.div`animation: 3s ${keyframes`${fadeInRight}`} `;

// const Roll = styled.div`animation: 3s ${keyframes`${rollIn}`} `;

function App() {



  return (
    <div className="App">

        <Fade><img src={Bubble1} className="bubble-1"/></Fade>
        <Fade><img src={Bubble2} className="bubble-2"/></Fade>
        <Fade><img src={Bubble3} className="bubble-3"/></Fade>
        <Fade><img src={Bubble4} className="bubble-4"/></Fade>
        {/* <Fade><img src={Bubble5} className="bubble-5"/></Fade> */}
        <Fade><img src={Grid1} className="grid-1"/></Fade>
        <Fade><img src={Grid2} className="grid-2"/></Fade>
        <Fade><img src={Plus1} className="plus-1"/></Fade>
        <Fade><img src={Plus2} className="plus-2"/></Fade>
        <Fade><img src={Plus3} className="plus-3"/></Fade>
        <Fade><img src={Line1} className="line-1"/></Fade>
        <Fade><img src={Line2} className="line-2"/></Fade>
        <Fade><img src={Title} className="title"/></Fade>  
    </div>
  );
}

export default App;
