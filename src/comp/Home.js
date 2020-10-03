import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import TagDetail from './TagDetail';

const Home = (props) => {
  // eslint-disable-next-line
  const [tags, setTags] = useState(TagDetail);

  useEffect(() => {
    let tags = document.querySelectorAll('.tag');
    let sides = document.querySelectorAll('.side');
    let reloadBtns = document.querySelectorAll('.reloadBtn');

    tags.forEach(t => {
      t.addEventListener('mouseover', () => addCurrent(t));
      t.addEventListener('mouseout', () => removeCurrent(t));
    });

    sides.forEach(s => {
      s.addEventListener('click', () => 
        tags.forEach(t => removeCurrent(t))
      )
    });

    reloadBtns.forEach(r => {
      r.addEventListener('click', () => removeCurrent(r.parentNode));
    });
  });

  const addCurrent = (t) => {
    t.classList.add('currentTag');
    t.firstChild.classList.add('currentTagImg');
    t.children[1].classList.add('currentTitle');
    t.children[2].classList.add('currentSummary');
    if (window.screen.width < 768) {
      window.scroll({top: t.getBoundingClientRect().y, behavior: 'smooth'});
      t.children[3].style.display = "block";
    };
  }

  const removeCurrent = (t) => {
    t.classList.remove('currentTag');
    t.firstChild.classList.remove('currentTagImg');
    t.children[1].classList.remove('currentTitle');
    t.children[2].classList.remove('currentSummary');
    if (window.screen.width <= 768) {
      t.children[3].style.display = "none";
    }
  }

  return (
    <div className="container">
      <div className="side" />

      {Object.keys(tags).map(k =>
        (<Tag detail={tags[k]} key={k} />)
      )}

      <div className="side" />
    </div>
  )
}

export default Home
