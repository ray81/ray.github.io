const resource = [
  /* --- CSS --- */
  '/https://ray.github.io/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/https://ray.github.io/app.js',
  '/https://ray.github.io/sw.js',

  /* --- HTML --- */
  '/https://ray.github.io/index.html',
  '/https://ray.github.io/404.html',

  
    '/https://ray.github.io/categories/',
  
    '/https://ray.github.io/tags/',
  
    '/https://ray.github.io/archives/',
  
    '/https://ray.github.io/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/https://ray.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/https://ray.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/https://ray.github.io/assets/img/favicons/apple-touch-icon.png',
    '/https://ray.github.io/assets/img/favicons/favicon-16x16.png',
    '/https://ray.github.io/assets/img/favicons/favicon-32x32.png',
    '/https://ray.github.io/assets/img/favicons/favicon.ico',
    '/https://ray.github.io/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'chirpy-img.netlify.app',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

