// eslint-disable-next-line
import React, { useEffect } from 'react';
import Circle from './Circle';
import Line from './Line';

//Randomise Circle and Line
const positionSVG = (s) => {
    //Circle
    let circleTop = Math.random() * s.clientHeight;
    let circleLeft = Math.random() * s.clientWidth;
    let circleSVG = document.querySelectorAll('.circleSVG')[s.id];
    let circle = circleSVG.firstChild;
    circleSVG.style.width = s.offsetWidth;
    circleSVG.style.height = s.offsetHeight;
    circleSVG.style.position = 'fixed';
    circle.setAttribute("cx", circleLeft);
    circle.setAttribute("cy", circleTop);
    circle.setAttribute(
        "r",
        (s.clientHeight > s.clientWidth) ? Math.random() * s.clientWidth * 0.5 + 1 : Math.random() * s.clientHeight * 0.5 + 1
    );

    //Line
    let lineTop = Math.random() * s.clientHeight;
    let lineLeft = Math.random() * s.clientWidth;
    let length = (s.clientHeight > s.clientWidth) ? s.clientWidth * Math.random() + 1 : s.clientHeight * Math.random() + 1;
    let lineSVG = document.querySelectorAll('.lineSVG')[s.id];
    let line = lineSVG.firstChild;
    lineSVG.style.width = s.offsetWidth;
    lineSVG.style.height = s.offsetHeight;
    lineSVG.style.position = 'fixed';
    line.setAttribute('x1', lineLeft);
    line.setAttribute('y1', lineTop);
    line.setAttribute('x2', lineLeft + length);
    line.setAttribute('y2', lineTop + length);
    lineSVG.style.transform = `rotate(${Math.random() * 360}deg)`;
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

            if (s.id === current) {
                s.style.transform = 'translate(0, 80px)';
                positionSVG(s);
                window.location.href = `./#${current}`
            } else {
                s.style.transform = 'translate(-100%, 0)';
            }
        });
    } else {
        let anchors = document.querySelectorAll('.anchor');
        anchors.forEach(a => {
            a.style.display = 'block'
        })
    }
};

const scrollHandler = () => {
    let sections = document.querySelectorAll('.section');
    let selector = document.querySelector('.nav');
    sections.forEach(s => {
        let rect = s.getBoundingClientRect();
        if(window.innerHeight - rect.top > window.innerHeight / 2) selector.value = s.id;
    });
}

//Display Circle & Line
const showSVG = () => {
    return (
        <div>
            <Circle />
            <Line />
        </div>
    )
};

export { positionSVG, translate, scrollHandler, showSVG }
