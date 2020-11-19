// Module
import React from 'react';
// Components
import { translate, scrollHandler, showSVG } from './Fx';
import Menu from './Menu';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Work from './Work';
// Style
import '../static/css/App.css';

const App = () => {

  return (
    <div className="App" onLoad={() => translate()}  onScroll={() => scrollHandler()}>
      <Menu translate={translate} />

      <div className='main col-12 mt-5'>
        <div className='row sectionRow'>
          <Profile showSVG={showSVG} />
          <Skills showSVG={showSVG} />
          <Projects showSVG={showSVG} />
          <Education showSVG={showSVG} />
          <Work showSVG={showSVG} />
        </div>
      </div>

    </div>
  );
}

export default App;
