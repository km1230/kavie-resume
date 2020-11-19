// eslint-disable-next-line
import React, { useEffect } from 'react';
import Circle from './Circle';
import Line from './Line';

//Randomise Circle and Line
const positionSVG = (s) => {
    let circleSVG = document.querySelectorAll('.circleSVG')[s.id];        
    let lineSVG = document.querySelectorAll('.lineSVG')[s.id];
    let circle = circleSVG.firstChild;    
    let line = lineSVG.firstChild;

    //-- location
    circleSVG.style.position = 'absolute';
    circleSVG.style.height = window.innerHeight;
    circleSVG.style.width = window.innerWidth;
    lineSVG.style.position = 'absolute';
    lineSVG.style.height = window.innerHeight;
    lineSVG.style.width = window.innerWidth;
    lineSVG.style.transform = `rotate(${Math.random() * 360}deg)`;
    let circleTop = Math.random() * window.innerHeight;
    let circleLeft = Math.random() * window.innerWidth;   
    let lineTop = Math.random() * window.innerHeight;
    let lineLeft = Math.random() * window.innerWidth;

    //--circle dimension
    circle.setAttribute("cx", circleLeft);
    circle.setAttribute("cy", circleTop);
    circle.setAttribute(
        "r",
        Math.random() * Number(circleSVG.style.width.replace('px', '')) * 0.5 + 1
    );

    //--line dimension
    let length = window.innerHeight * Math.random() + 1;    
    line.setAttribute('x1', lineLeft);
    line.setAttribute('y1', lineTop);
    line.setAttribute('x2', lineLeft + length);
    line.setAttribute('y2', lineTop + length);    
};

const translate = () => {
    let sections = document.querySelectorAll('.section');
    let current = document.querySelector('.nav').value;

    if (window.innerWidth >= 768) {
        //Prevent overflow-Y
        let App = document.querySelector('.App');
        App.style.overflowY = 'hidden';

        //Translate Effect for each section
        sections.forEach(s => {
            s.style.position = 'absolute';
            s.style.top = 0;
            s.style.left = 0;
            s.style.height = '100vh';
        });

        sections.forEach(s => {
            if (s.id === current) {
                s.style.transform = 'translate(0, 80px)';
                positionSVG(s);
                window.location.href = `./#${current}`
            } else {
                s.style.transform = 'translate(-100%, 0)';
            }
        })

    } else {
        let anchors = document.querySelectorAll('.anchor');
        anchors.forEach(a => {
            a.style.display = 'block'
        })
    }
};

const scrollHandler = () => {
    if (window.innerWidth < 768) {
        let sections = document.querySelectorAll('.section');
        let selector = document.querySelector('.nav');
        sections.forEach(s => {
            let rect = s.getBoundingClientRect();
            if (window.innerHeight - rect.top > window.innerHeight / 2) selector.value = s.id;
        });
    }
}

//Display Circle & Line
const showSVG = () => {
    return (
        <div className="svg">
            <Circle />
            <Line />
        </div>
    )
};

export { positionSVG, translate, scrollHandler, showSVG }
