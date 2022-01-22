// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});

function test() {
    alert("hello ")
}

import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";



function register() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    nom = document.getElementById('nom').value
    prenom = document.getElementById('prenom').value
    username = document.getElementById('username').value
    print(email)
        // validate input fields 
    if (validate_email == false || validate_password == false) {
        alert('email ou mot de passe non valide ')
        return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    // auth 

}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else { return true }
}

function validate_fields(field) {
    if (field == numm) { return false }
    if (field.lenght <= 0) { return false } else { return true }

}

function test() {
    alert("kraht")
}