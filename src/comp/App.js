// Module
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// Components
import Menu from './Menu';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Work from './Work';
// Style
import '../static/css/App.css';

const App = () => {
  const zIndex = () => {
    if(window.innerWidth >= 768) {

      let sections = document.querySelectorAll('.section');
      let current = document.querySelector('.nav').value;
      sections.forEach(s => {
        s.style.position = 'absolute';
        s.style.top = 0;
        s.style.left = 0;        

        if(s.id == current) {
          s.style.transform = 'translate(0, 0)';
          window.location.href = `./#${current}`
        } else {
          s.style.transform = 'translate(-100%, 0)';
        }
      })
    }
  }

  return (
    <div className="App" onLoad={() => zIndex()}>
      <Menu zIndex={zIndex} />

      <div className='main col-12 mt-5'>
        <div className='row'>
          <Profile />
          <Education />
          <Skills />
          <Projects />
          <Work />
        </div>
      </div>

    </div>
  );
}

export default App;
