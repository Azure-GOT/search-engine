const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const displayNameField = document.getElementById('displayName');
const photoField = document.getElementById('photo');
const labels = document.getElementsByTagName('label');
const signUp = document.getElementById('signUp');
const failureModal = document.querySelector('.failure');
const feedbackMessage = document.querySelector('.feedbackMessage');

const auth = firebase.auth();
//auth.languageCode = 'fr_FR'; //Sending verification emails only in french

//Sends verification emails in the same language as the language used in the
//user's device
auth.useDeviceLanguage();

//Function wrapping all the signup parts including the email verification email
//triggered once the user clicks on the signup button
const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;
    //alert(email)
    //var email_id=email;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        sendVerificationEmail();
        var user=firebase.auth().currentUser;
        alert(user.email)
        var email_id=user.email;
        var email_verified=user.emailVerified;
        document.getElementById("error").innerHTML = "Welcome user: " +email_id+ "  verified " +email_verified;
        if(email_verified==true){
        console.log('Signed Up Successfully !');
        document.getElementById("error").innerHTML = "Welcome user: " +email_id+ "  verified " +email_verified;
        //window.location.assign('index.html');
        //sendVerificationEmail();
        }
        else{
        alert("verify your email")
        document.getElementById("error").innerHTML = "Welcome user: " +email_id+ "  verified " +email_verified;
        document.getElementById("error1").innerHTML ="After verification done  ,click on Home page to sign in "
        }

    })
    .catch(error => {
        document.getElementById("error").innerHTML = error.message
        //console.error(error);
    })

}

//Function called right after the signUpWithEmailAndPassword to send verification emails
const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        alert("Verification Email Sent Successfully !")
        //redirecting the user to the profile page once everything is done correctly
        //window.location.assign('index.html');
    })
    .catch(error => {
            document.getElementById("error").innerHTML = error.message

            console.error(error);
    })
}

signUp.addEventListener('click', signUpFunction);

//Animations
mailField.addEventListener('focus', () => {
    labels.item(0).className = "focused-field";
});

passwordField.addEventListener('focus', () => {
    labels.item(1).className = "focused-field";
});

mailField.addEventListener('blur', () => {
    if(!mailField.value)
        labels.item(0).className = "unfocused-field";
});

passwordField.addEventListener('blur', () => {
    if(!passwordField.value)
        labels.item(1).className = "unfocused-field";
});
