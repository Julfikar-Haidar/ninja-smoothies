import firebase from 'firebase'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'
// require("firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBm-HjPuwYNNj2hJIX_NHGz1GQ_nj9o2W0",
    authDomain: "vue-ninja-34401.firebaseapp.com",
    databaseURL: "https://vue-ninja-34401.firebaseio.com",
    projectId: "vue-ninja-34401",
    storageBucket: "vue-ninja-34401.appspot.com",
    messagingSenderId: "334048267637",
    appId: "1:334048267637:web:0a6a04a91b45f87954173c",
    measurementId: "G-PRQNC3VL98"
  };
  // Initialize Firebase
// eslint-disable-next-line no-undef,no-unused-vars
  const firebaseApp = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
//   firebase.analytics();
  // export firebase database
// const db=firebase.firestore();
  export default firebaseApp.firestore()
// export { firebaseApp,db}