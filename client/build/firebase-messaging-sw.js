importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: "238189634784"
})

const initializeApp = firebase.messaging()