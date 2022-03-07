"use strict";

import './store/store';
import 'alpinejs';
import { env } from './libs/utils/constants';
import { initPageLoader } from './libs/components/pageloader';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';
import { initHero } from './libs/components/hero';
import { initTabs } from './libs/components/tabs';
import { initCountdown } from './libs/components/countdown';
import { initRoadmap } from './libs/components/roadmap';
import { initLike } from './libs/components/like';
import { initBackToTop } from './libs/components/backtotop';
const feather = require('feather-icons');

window.initNavbar = initNavbar;
window.initHero = initHero;
window.initTabs = initTabs;
window.initCountdown = initCountdown;
window.initRoadmap = initRoadmap;
window.initLike = initLike;
window.initBackToTop = initBackToTop;
window.initPoster = initPoster;
window.appNavToCreate = appNavToCreate;
window.appNavToJoin = appNavToJoin;
window.appNavToWelcome = appNavToWelcome;
window.appCreateMeeting = appCreateMeeting;



const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}

const svg = document.getElementById( 'posterSvg' );
/* Store the original value in a variable */
const originalViewBox = svg.getAttribute( 'viewBox' );

/* Define our media query and media query object */
const mq = matchMedia( '(max-width: 767px)' );
/* Fire if the media condition changes */
mq.addEventListener( 'change', updatePosterViewBox );

function initPoster()
{
    updatePosterViewBox();
}

/* Define the handler */
function updatePosterViewBox(){
    if (mq.matches) {
        /* Change the viewBox dimensions to show the hexagon */
        svg.setAttribute( 'viewBox', '0 -50 715 1200' );

    } else {
        svg.setAttribute( 'viewBox', originalViewBox );
    }
}

//svg.addEventListener( 'SVGLoad', updatePosterViewBox );

// App Demo ////////////////////

function appNavToCreate() {
        document.getElementById('app-welcome-page').style.display = 'none';
        document.getElementById('app-join-page').style.display = 'none';
        document.getElementById('app-create-page').style.display = 'block';
} 

function appNavToJoin() {
    document.getElementById('app-welcome-page').style.display = 'none';
    document.getElementById('app-create-page').style.display = 'none';

    document.getElementById('app-join-page').style.display = 'block';
} 

function appNavToWelcome() {
    document.getElementById('app-join-page').style.display = 'none';
    document.getElementById('app-create-page').style.display = 'none';
    document.getElementById('app-welcome-page').style.display = 'block';
} 

function appCreateMeeting() {
    // var inputVal = document.getElementById('create-meeting-name-input').value;
            
    // Displaying the value
    //alert(inputVal);
    window.alert(document.getElementById('create-meeting-name-input').value + " ready to go!");
}


