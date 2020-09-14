/* eslint-disable no-restricted-globals */
/* global importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener('install', () => {
  self.skipWaiting();
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
