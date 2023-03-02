import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyASBZID22sgBpIlaCxEP3gocLmmmWb6VZs",
    authDomain: "aos-galeri-vue3.firebaseapp.com",
    projectId: "aos-galeri-vue3",
    storageBucket: "aos-galeri-vue3.appspot.com",
    messagingSenderId: "120443768886",
    appId: "1:120443768886:web:d28ced2fa99b92e2d64897"
  };

firebase.initializeApp(firebaseConfig);


const depo=firebase.storage();
const veritabani=firebase.firestore();

const tarih=firebase.firestore.FieldValue.serverTimestamp;

export {depo,veritabani,tarih}