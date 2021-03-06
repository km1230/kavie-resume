import React from 'react';

const Menu = (props) => {
  const handleSelect = (e) => {
    let current = document.querySelector('.nav').value;
    if (window.innerWidth < 768) {
      e.preventDefault();
      window.location.href = `./#anchor${current}`;
    } else {
      props.translate()
    }
  }

  return (
    <div className='menu col-12 d-flex justify-content-center p-3 fixed-top'>
      <select className='nav' onChange={e => handleSelect(e)} defaultValue='0'>
        <option value='0' className='option'>Profile</option>
        <option value='1' className='option'>Skills</option>
        <option value='2' className='option'>Projects</option>
        <option value='3' className='option'>Education</option>
        <option value='4' className='option'>Working Exp</option>
      </select>
    </div>
  )
}

export default Menu;
