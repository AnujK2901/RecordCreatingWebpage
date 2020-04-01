function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        document.getElementById('myContent').style.display = 'none';
        document.getElementById('firebaseui-auth-container').style.display = 'block';
    }).catch(function (error) {
        // An error happened.
        console.log('Sign out Error');
    });
}