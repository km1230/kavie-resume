import React from 'react';

const Work = (props) => {
  return (
    <div className='section work col-12 row pt-5 pb-5' id='4'>
      <span className="anchor" id='anchor4'></span>
      { (window.innerWidth >= 768) ? props.showSVG() : '' }
      <div className='container'>
        <h2 className='sectionTitle'>- Working Exp -</h2>

        <div className='col-12 p-3'>
          <span className='date'>[2020 May - Present]</span><br />
          Mobile App Developer - Freelance
        </div>

        <div className='col-12 p-3'>
          <span className='date'>[2019 Mar - Present]</span><br />
          Optical Dispenser - Oscar Wylee
        </div>

        <div className='col-12 p-3'>
          <span className='date'>[2018 Nov - 2018 Dec]</span><br />
          Student System Tester - UTAS
        </div>

        <div className='col-12 p-3'>
          <span className='date'>[2011 Oct - 2018 Jan]</span><br />
          Optometrist - Hong Kong Hospital Authority
        </div>

      </div>
    </div>
  )
}

export default Work;
