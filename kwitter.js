var firebaseConfig = {
  apiKey: "AIzaSyD_qluR5KDDhhvk24IpBB4CFGFRPdLOSO4",
  authDomain: "kwitter-b41f2.firebaseapp.com",
  databaseURL: "https://kwitter-b41f2.firebaseio.com",
  projectId: "kwitter-b41f2",
  storageBucket: "kwitter-b41f2.appspot.com",
  messagingSenderId: "1031209072046",
  appId: "1:1031209072046:web:8592022f77329b2326043f"
};

firebase.initializeApp(firebaseConfig) ;

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}
