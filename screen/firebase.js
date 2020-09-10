import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD0lq0q6lzVlezvyqzyrL4vDNZkOT-nZzI ",
    authDomain: "chiangrai-aab81.firebaseapp.com",
    databaseURL: "https://chiangrai-aab81.firebaseio.com",
    projectId: "chiangrai-aab81",
    storageBucket: "chiangrai-aab81.appspot.com",
    messagingSenderId: "513860726258",
  };
  firebase.initializeApp(config);
  export const database = firebase.database();
  export const auth = firebase.auth();