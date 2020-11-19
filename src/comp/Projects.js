import React from 'react';
import Utashksa from '../static/img/utashksa.png';
import Devjunior from '../static/img/devjunior.png';
import MobileApp from '../static/img/mobile_app.jpg';

const Projects = (props) => {
  return (
    <div className='section projects col-12 row pt-5 pb-5' id='2'>
      <span className="anchor" id='anchor2'></span>
      { (window.innerWidth >= 768) ? props.showSVG() : '' }
      <div className='container'>
        <h2 className='sectionTitle'>- Projects -</h2>

        <div className='projectBox'>
          <a href="https://utashksa.herokuapp.com/" className='mr-3' target="_blank" rel="noopener noreferrer">
            <img src={Utashksa} className='img-thumbnail' alt='UTAS HKSA screenshot'/>
          </a>
          <div className='projectDescription'>
            <h5 className='projectTitle'>[UTAS HKSA]</h5>
            <ul>
              <li>CRUD, Membership management system, Posts, Bulk email system</li>
              <li>Nodejs, Reactjs, Bootstrap, CSS</li>
            </ul>
          </div>
        </div>

        <div className='projectBox'>
          <a href="https://devjunior.com/" className='mr-3' target="_blank" rel="noopener noreferrer">
            <img src={Devjunior} className='img-thumbnail' alt='DevJunior Screenshot'/>
          </a>
          <div className='projectDescription'>
            <h5 className='projectTitle'>[DevJunior]</h5>
            <ul>
              <li>My personal blog</li>
              <li>Python, Django, Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className='projectBox'>
          <div className='mr-3'>
            <img src={MobileApp} className='img-thumbnail' alt='MobileApp Screenshot'/>
          </div>
          <div className='projectDescription'>
            <h5 className='projectTitle'>[Mobile App]</h5>
            <ul>
              <li>React Native Mobile Application</li>
              <li>Content protected by law</li>
            </ul>
          </div>
        </div>

        <div className='projectBox'>
          <a href="https://github.com/km1230/" className='mr-3' target="_blank" rel="noopener noreferrer">
            <img src='https://avatars2.githubusercontent.com/u/33882791?s=460&u=bd29cf40922bfffca35cb1ff3d58b041f5a8b47b&v=4' className='img-thumbnail' alt='Github Avator'/>
          </a>
          <div className='projectDescription'>
            <h5 className='projectTitle'>[Github Repo]</h5>
            <ul>
              <li>Public repositories on github</li>
              <li>Private content upon request</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;
