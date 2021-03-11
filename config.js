import firebase from 'firebase'
require('@firebase/firestore')
class db {
  constructor() {
    this.init();
    this.observeAuth();
  }
var firebaseConfig = {
  apiKey: "AIzaSyCqz52IQ7Em0JnUSNplrQJ9-zZBLs8YdWc",
  authDomain: "hangout-6a44a.firebaseapp.com",
  projectId: "hangout-6a44a",
  storageBucket: "hangout-6a44a.appspot.com",
  messagingSenderId: "242856960878",
  appId: "1:242856960878:web:337ad8fd17acb5d428d77f",
  measurementId: "G-696J8GW0DX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
parse = snapshot => {
  const { timestamp: numberStamp, text } = snapshot.val();
  const { key: _id } = snapshot;
  const timestamp = new Date(numberStamp);
  const message = {
    
    timestamp,
    text,
    
  };
  return message;
};

on = callback =>
  this.ref
    .limitToLast(20)
    .on('child_added', snapshot => callback(this.parse(snapshot)));

get timestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}
// send the message to the Backend
send = messages => {
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
    const message = {
      text,
      user,
      timestamp: this.timestamp,
    };
    this.append(message);
  }
};

append = message => this.ref.push(message);

// close the connection to the Backend
off() {
  this.ref.off();
}


  export default firebase.firestore()