import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCgjVCcdXJHLhkKkUUWOkna-ynQqCj3YyU',
  authDomain: 'silaboratoriummedis.firebaseapp.com',
  databaseURL: 'https://silaboratoriummedis.firebaseio.com',
  projectId: 'silaboratoriummedis',
  storageBucket: 'silaboratoriummedis.appspot.com',
  messagingSenderId: '942686383539',
  appId: '1:942686383539:web:4ae9e9c704a559b06d6fc6',
  measurementId: 'G-R7JQ53W0SH',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const dataRef = firebase.database().ref();
