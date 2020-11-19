import React from 'react';

const Profile = (props) => {
  return (
    <div className='section profile col-12 row pt-5 pb-5' id='0'>
      <span className="anchor" id='anchor0'></span>
      { (window.innerWidth >= 768) ? props.showSVG() : '' }
      <div className='container'>
        <h2 className='sectionTitle'>- Profile -</h2>
        <p>
          Kavie Mo. A recent Master in IT graduate from UTAS.<br /><br />
          Overseas registered optometrist.<br /><br />
          Enthusiastic in web and mobile applications.<br /><br />
          Proactively seeking and building projects.<br /><br />
          Interested in creative application design for better user experience.<br /><br />
        </p>
        <div className='d-flex justify-content-around'>
          <a href="https://www.linkedin.com/in/hymo/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://twitter.com/moklavie/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square fa-3x"></i>
          </a>
          <a href="mailto:hoiyan.mo@utas.edu.au" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope-square fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile;
