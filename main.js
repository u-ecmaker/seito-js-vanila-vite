import './style.scss'
import './test.scss'
import Splide from '@splidejs/splide';

// Splide
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css/core';


new Splide( '.splide', {
  type   : 'loop',
} ).mount();