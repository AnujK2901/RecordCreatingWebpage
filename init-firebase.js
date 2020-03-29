// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGY4NpDEHkD68H0XefnJwO1Vcbpkl7dig",
    authDomain: "questionresourceproject.firebaseapp.com",
    databaseURL: "https://questionresourceproject.firebaseio.com",
    projectId: "questionresourceproject",
    storageBucket: "questionresourceproject.appspot.com",
    messagingSenderId: "847234346392",
    appId: "1:847234346392:web:c6c5a20d13ee3a2fc44fed",
    measurementId: "G-ZJTW3XLT5R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById("myContent").style.display = "block";
        console.log(firebase.auth().currentUser.email);
        //snackbar.open();
    } else {
        window.location = 'login.html';
    }
});
