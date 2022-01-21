
var firebaseConfig = {
    apiKey: "AIzaSyAk0fXCQDEPy8C5NuhIhT7hDVcWPA5fJd0",
    authDomain: "letschatwebapp-daa33.firebaseapp.com",
    databaseURL: "https://letschatwebapp-daa33-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-daa33",
    storageBucket: "letschatwebapp-daa33.appspot.com",
    messagingSenderId: "372784277943",
    appId: "1:372784277943:web:bcb5740f04eddea1d3a032"
  };
  
  // Initialize Firebase
    firbase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
