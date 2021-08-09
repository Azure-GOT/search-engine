





  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDd2HHFvyI-49ivWsRi2IsNCxYg2-3KZ1o",
    authDomain: "lyrical-compass-321008.firebaseapp.com",
    projectId: "lyrical-compass-321008",
    storageBucket: "lyrical-compass-321008.appspot.com",
    messagingSenderId: "354420458723",
    appId: "1:354420458723:web:88ef567c7d9493e640f1d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth =firebase.auth();

  function signUp(){
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up wait a moment");
  window.location.href = 'authentication.html';
  console.log("Signed Up");

  }

  function signIn(){
  //document.write("welcome");
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  const promise=auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  alert("Signed In"+ email.value);
  window.location.href = 'signout.html';

  console.log("Signed In"+ email.value);
  }
  //function signOut(){
 // auth.signOut();
  //console.log("Signed out");
  //alert("Signed out");
  //}

auth.onAuthStateChanged(function(user){
    if(user){
    var email=user.email;
    //window.location.href = 'authentication.html';
   //alert("Active User " + email);

   console.log("Active User " + email);
    //Take user to a different or home page



    }
    else{
    alert("No Active User");
    //no user is signed in
    console.log("No Active User");


    }

}
);

