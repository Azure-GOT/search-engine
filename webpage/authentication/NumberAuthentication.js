
window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        document.getElementById("error").innerHTML = "Verification Code Sent to Your Registered Mobile Number!"
        console.log("Verification Code Sent to Your Registered Mobile Number!");
        //alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        document.getElementById("error").innerHTML = "Successfully Verified Your Mobile Number"
        //alert("Successfully registered");
        console.log("Successfully Verified Your Mobile Number");
        var user=result.user;
        console.log(user);
        firebase.auth().onAuthStateChanged((user)=>{
        if(user){
                    location.replace("welcome.html")
                }
        })
        document.getElementById('userDetails').innerHTML = `
          <br><br><center>
          <p>Welcome</p>
          <p> </p>
          <a href="welcome.html"  style="color:red;">click here to enter the website</a><br><br>
          <a href="index.html"  style="color:red;">Home Page</a><br><br></center>
        `
    }).catch(function (error) {
        alert(error.message);
        document.getElementById("error").innerHTML = error.message
    });
}
