/* global importScripts, workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

self.addEventListener('install', () => {
  self.skipWaiting();
});

workbox.precaching.precacheAndRoute([]);
