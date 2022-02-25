
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name + "!";
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose :"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  wondow.location="LetsChqt_page.html"
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console/log("Room Name- " + Room_names );
    row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";


   
   });});}
getData();
function redirectToRoomNam(name)
{
localStorage.setItem("room_name",name);
window.location + "kwitter_page.html";
}    