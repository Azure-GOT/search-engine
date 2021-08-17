document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    //const email = document.getElementById("email").value
    //const password = document.getElementById("password").value
    //firebase.auth().createUserWithEmailAndPassword(email, password)
    //.catch((error) => {
     //   document.getElementById("error").innerHTML = error.message
    //});
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById("error").innerHTML = "link sent to your email id verify and set the password then sign in"
        alert("link sent to your email id,verify and set the password")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });

}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById("error").innerHTML = "Reset link sent to your email id ,check -verify then sign in"
        //alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function emailVerify2(){
        const email = document.getElementById("email").value
        firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    document.getElementById("error").innerHTML = "verification mail sent to your email id  "

    // ...
  });
  }
