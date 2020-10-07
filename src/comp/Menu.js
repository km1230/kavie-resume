import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const handleSelect = () => {
    if(window.innerWidth < 768) {
      let selection = document.querySelector('.nav').value;
      window.location.href = `./#${selection}`;
    } else {
      props.zIndex()
    }
  }

  return (
    <div className='menu col-12 d-flex justify-content-center p-3 fixed-top'>
      <select className='nav' onChange={() => handleSelect()}>
        <option value='0' className='option'>Profile</option>
        <option value='1' className='option'>Education</option>
        <option value='2' className='option'>Skills</option>
        <option value='3' className='option'>Projects</option>
        <option value='4' className='option'>Working Exp</option>
      </select>
    </div>
  )
}

export default Menu;
