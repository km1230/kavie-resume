// eslint-disable-next-line
import React from 'react';
import profile from '../static/img/profile.jpg';
import utas from '../static/img/utas.jpg';
import work from '../static/img/work.jpg';
import project from '../static/img/project.jpg';

const TagDetail = {
  profile: {
    img: profile,
    alt: 'profile backgorund',
    title: 'Profile',
    summary: `Hoi Yan Kavie Mo. A recent Master in IT graduate from UTAS.<br /><br />
    Overseas registered optometrist.<br /><br />
    Enthusiastic in web and mobile applications.<br /><br />
    Proactively seeking and building projects.<br /><br />
    Interested in creative application design for better user experience.`
  },

  education: {
    img: utas,
    alt: 'education background',
    title: 'Education',
    summary: `<span style="font-weight: bold">[2018 Feb - 2020 Jan]</span><br />
    Master in IT - University of Tasmania<br /><br />
    <span style="font-weight: bold">[2006 Sep - 2010 Jun]</span><br />
    Bachelor (Hons) in Optometry - Hong Kong Polytechnic University<br /><br />`
  },

  work: {
    img: work,
    alt: 'work background',
    title: 'Employment',
    summary: `<span style="font-weight: bold">[2020 May - present]</span><br />
    Freelance Mobile Application Developer<br /><br />

    <span style="font-weight: bold">[2019 Mar - present]</span><br />
    Optical Dispenser - Oscar Wylee<br /><br />

    <span style="font-weight: bold">[2018 Dec]</span><br />
    Internship - Carlton & United Breweries<br /><br />

    <span style="font-weight: bold">[2018 Nov - 2018 Dec]</span><br />
    Student System Tester - University of Tasmania<br /><br />

    <span style="font-weight: bold">[2011 Oct - 2018 Jan]</span><br />
    Optometrist - Hong Kong Hospital Authority`
  },

  projects: {
    img: project,
    alt: 'project background',
    title: 'Projects',
    summary: `
    <a href="https://utashksa.herokuapp.com/" target="_blank" rel="nopener noreferrer">
      <img src="https://utashksa.herokuapp.com/favicon.ico" /><br />
      <span>UTAS Hong Kong Student Association Web App</span>
    </a><br />
    Membership management system, CRUD posts, Bulk email system<br />
    Nodejs, Reactjs, Bootstrap, CSS<br /><br />

    <a href="https://devjunior.com/" target="_blank" rel="nopener" noreferrer">
      <img src="https://devjunior.s3.amazonaws.com/static/img/favicon.png" />
      <span>Personal Blog</span>
    </a><br />
    Python, Django, Bootstrap<br /><br />

    <a href="https://github.com/km1230/" target="_blank" rel="nopener" noreferrer">
      <img src="https://avatars2.githubusercontent.com/u/33882791?s=460&u=bd29cf40922bfffca35cb1ff3d58b041f5a8b47b&v=4" />
      <span>Github</span>
    </a><br />
    Public projects only<br /><br />

    <span style="font-weight: bold">...More upon request</span>`
  }
}

export default TagDetail;
