importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging-compat.js");

firebase.initializeApp({

    apiKey: "AIzaSyDNwdxbB-lNe1DFETMzQoMPRvOi3UMBzGo",
    authDomain: "portal-do-cliente-fin-dev.firebaseapp.com",
    projectId: "portal-do-cliente-fin-dev",
    storageBucket: "portal-do-cliente-fin-dev.appspot.com",
    messagingSenderId: "872289184431",
    appId: "1:872289184431:web:83deef933dc3aaa705825a",
    measurementId: "G-HM0TFBYNE1"

});

const messaging = firebase.messaging();