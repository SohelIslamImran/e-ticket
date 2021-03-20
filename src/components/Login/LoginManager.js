import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const initializeLoginFramework = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUserName(name);
            return handleResponse(res);
        })
        .catch(error => console.log(error.message))
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    })
        .then(() => console.log('user name updated successfully'))
        .catch(error => console.log(error.message))
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => handleResponse(res))
        .catch(error => console.log(error.message));
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(res => handleResponse(res))
        .catch(error => console.log(error.message))
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then(res => handleResponse(res))
        .catch(error => console.log(error.message))
}

const handleResponse = (res) => {
    const { displayName, photoURL, email } = res.user;
    const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
    }
    return signedInUser;
}

export const handleSignOut = () => {
    return firebase
        .auth()
        .signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: ''
            }
            return signedOutUser;
        })
        .catch(error => console.log(error.message))
}
