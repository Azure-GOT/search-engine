document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

//firebase.auth().onAuthStateChanged((user)=>{
  //  if(user){
       // location.replace("welcome.html")
   // }
//})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        var user=firebase.auth().currentUser;
        //alert(user.email)
        var email_id=user.email;
        var email_verified=user.emailVerified;
        if(!email_verified){
        //alert("email is not verified")
        //<a href="welcome.html"  style="color:red;">click here to enter the website</a><br><br>
        document.getElementById('check2').innerHTML =email_id+" Is Not Verified !!<br>Verification of  Your Mail is needed To login, check ur email "
        //document.getElementById('check1').innerHTML = `

          //<br><br><center>
          //<p>Sorry To Say</p>
          //<p>Your Account Is Not Verified </p>
          //<p>Verification of  Your Mail is needed To login, check ur email </p>
          //<a href="index.html"  style="color:red;">Home Page</a><br><br></center>`

        //document.getElementById('check1').innerHTML = `<br><br>`
        //document.getElementById('check1').innerHTML = `
          //<br><br><center>
          //<p>Welcome</p>
          //<p> </p>
          //<a href="welcome.html"  style="color:red;">click here to enter the website</a><br><br>
          //<a href="index.html"  style="color:red;">Home Page</a><br><br></center>`
        //if(email_verified==false){
        //document.getElementById("check1").innerHTML = "email not verified";
        //alert("not verified")

        }
        else{
                firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                            location.replace("welcome.html")
                        }
                 })
        //document.getElementById('check1').innerHTML ="none"
        //alert("email is not verified")
        //<a href="welcome.html"  style="color:red;">click here to enter the website</a><br><br>
        //document.getElementById('check1').innerHTML = `
         // <br><br><center>
          //<p>Sorry To Say</p>
          //<p>Your Account Is Not Verified </p>
          //<p>Verify Your Mail To login </p>
          //<a href="index.html"  style="color:red;">Home Page</a><br><br></center>`
        }
        //document.getElementById("error").innerHTML = "link sent to your email id verify and set the password then sign in"
        //alert("link sent to your email id,verify and set the password")
    })
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
