import React from 'react';

const Skills = (props) => {
  return (
    <div className='section skills col-12 row pt-5 pb-5' id='1'>
      <span className="anchor" id='anchor1'></span>
      { (window.innerWidth >= 768) ? props.showSVG() : '' }
      <div className='container'>
        <h2 className='sectionTitle'>- Skills -</h2>
        <div className='row justify-content-around'>
          <div className='col-12 col-md-5 skillsModal mb-3'>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript ES6, Php, Python</li>
              <li>Reactjs, React Native</li>
              <li>Django, Nodejs</li>
              <li>Web app, mobile app, responsive design</li>
            </ul>
          </div>
          <div className='col-12 col-md-5 skillsModal mb-3'>
            <ul>
              <li>Time Management</li>
              <li>Proactive to learn</li>
              <li>Problem Solving</li>
              <li>Eyes on detail</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
