import React, { useEffect } from 'react';

const Tag = (props) => {
  let summaryID = `tagsummary-${props.detail.title}`;
  useEffect(() => setSummary(summaryID, props.detail.summary));

  return (
    <div className="tag">
      <img className="tagImg" src={props.detail.img} alt={props.detail.alt}/>
      <p className="tagTitle">{props.detail.title}</p>
      <p className={`tagSummary ${summaryID}`} />
      <p className="reloadBtn">
        <i className="fas fa-redo"></i>
      </p>
    </div>
  );
}

const setSummary = (summaryID, summary) => {
  let thisSummary = document.querySelector(`.${summaryID}`);
  thisSummary.innerHTML = summary;
  let summaryImg = thisSummary.querySelectorAll('img');
  if(typeof summaryImg !== 'undefined') summaryImg.forEach(i => i.style.width = '48px');
  if(window.screen.width <= 768 && thisSummary.previousElementSibling.innerText === 'Projects') {
    thisSummary.innerHTML = '---Long press to open links---<br><br>' + thisSummary.innerHTML;
  }
}

export default Tag;
