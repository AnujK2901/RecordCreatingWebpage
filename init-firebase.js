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
        document.getElementById('loader').style.display = 'none';
        document.getElementById('firebaseui-auth-container').style.display = 'none';
        //console.log(firebase.auth().currentUser.email);
        //snackbar.open();
    } else {
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        document.getElementById('myContent').style.display = 'none';
        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    if (authResult.additionalUserInfo.isNewUser) {
                        firebase.auth().currentUser.delete()
                        signOut()
                    }
                    ui.delete();
                    document.getElementById("myContent").style.display = 'block';
                    return false;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        });
    }
});