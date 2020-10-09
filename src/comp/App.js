// Module
import React from 'react';
// Components
import Menu from './Menu';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Work from './Work';
import Circle from './Circle';
import Line from './Line';
// Style
import '../static/css/App.css';

const App = () => {

  //Display Circle & Line
  const showSVG = () => {
    return (
      <div>
        <Circle />
        <Line />
      </div>
    )
  };

  //Randomise Circle and Line
  const positionSVG = (s) => {
    //Circle
    let circleTop = Math.random()*s.clientHeight;
    let circleLeft = Math.random()*s.clientWidth;
    let circleSVG = document.querySelectorAll('.circleSVG')[s.id];
    let circle = circleSVG.firstChild;
    circleSVG.style.width = s.offsetWidth;
    circleSVG.style.height = s.offsetHeight;
    circleSVG.style.position = 'fixed';
    circle.setAttribute("cx", circleLeft);
    circle.setAttribute("cy", circleTop);
    circle.setAttribute(
      "r",
      (s.clientHeight > s.clientWidth) ? Math.random()*s.clientWidth*0.5 + 1 : Math.random()*s.clientHeight*0.5 + 1
    );

    //Line
    let lineTop = Math.random()*s.clientHeight;
    let lineLeft = Math.random()*s.clientWidth;
    let length = (s.clientHeight > s.clientWidth) ? s.clientWidth*Math.random() + 1 : s.clientHeight*Math.random() + 1;
    let lineSVG = document.querySelectorAll('.lineSVG')[s.id];
    let line = lineSVG.firstChild;
    lineSVG.style.width = s.offsetWidth;
    lineSVG.style.height = s.offsetHeight;
    lineSVG.style.position = 'fixed';
    line.setAttribute('x1', lineLeft);
    line.setAttribute('y1', lineTop);
    line.setAttribute('x2', lineLeft + length);
    line.setAttribute('y2', lineTop + length);
    lineSVG.style.transform = `rotate(${Math.random()*180}deg)`;
  };

  const translate = () => {
    let sections = document.querySelectorAll('.section');
    let current = document.querySelector('.nav').value;

    if(window.innerWidth >= 768) {
      //Prevent overflow-Y
      let App = document.querySelector('.App');
      App.style.overflowY = 'hidden';

      //Translate Effect for each section
      sections.forEach(s => {
        s.style.position = 'absolute';
        s.style.top = 0;
        s.style.left = 0;
        s.style.height = '100vh';

        if(s.id === current) {
          s.style.transform = 'translate(0, 0)';
          positionSVG(s);
          window.location.href = `./#${current}`
        } else {
          s.style.transform = 'translate(-100%, 0)';
        }
      });
    }
  };

  return (
    <div className="App" onLoad={() => translate()}>
      <Menu translate={translate} positionSVG={positionSVG} />

      <div className='main col-12 mt-5'>
        <div className='row'>
          <Profile positionSVG={positionSVG} showSVG={showSVG} />
          <Education positionSVG={positionSVG} showSVG={showSVG} />
          <Skills positionSVG={positionSVG} showSVG={showSVG} />
          <Projects positionSVG={positionSVG} showSVG={showSVG} />
          <Work positionSVG={positionSVG} showSVG={showSVG} />
        </div>
      </div>

    </div>
  );
}

export default App;
