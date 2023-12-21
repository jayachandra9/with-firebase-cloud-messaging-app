/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDStIHC8a4QE6Uo8ttYTtDCTFTY5UM6Lt",
  projectId: "testevisitnb",
  messagingSenderId: "917945671984",
  appId: "1:917945671984:web:44da0f4e5e54470314e8f5",
});

firebase.messaging();
