 import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyA_FplKJ2Ebw4TTGGcYi4QqaZofBjEhiU0",
    authDomain: "posist-57cfd.firebaseapp.com",
    projectId: "posist-57cfd",
    storageBucket: "posist-57cfd.appspot.com",
    messagingSenderId: "925986537814",
    appId: "1:925986537814:web:36e798be0f60a252d456f7",
    measurementId: "G-VF11JSTMMC"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);

  firebase.analytics();
  export default fire;