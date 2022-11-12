import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { Notify } from "notiflix";




const firebaseConfig = {
  apiKey: "AIzaSyC1UwR2UZgcLB74wYfECqB18_hZyQvzmHU",
  authDomain: "filmoteka-unityjs.firebaseapp.com",
  projectId: "filmoteka-unityjs",
  storageBucket: "filmoteka-unityjs.appspot.com",
  messagingSenderId: "365051232802",
  appId: "1:365051232802:web:2d7e44860f437e0b39007b",
    measurementId: "G-BNX13P0P4T",
  databaseURL: "https://console.firebase.google.com/project/filmoteka-unityjs/database/filmoteka-unityjs-default-rtdb/data/~2F"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const refs = {  
  emailInput: document.querySelector('#login-email'),
  passwordInput: document.querySelector('#login-password'),
  
  loginBtn: document.querySelector('.login-btn'),
  signUpBtn: document.querySelector('.signup-btn'),
  logoutBtn: document.querySelector('[data-logout]'),
  openAuthModalBtn: document.querySelector('[data-auth-modal-open]')
}

refs.loginBtn.addEventListener("click", onLogin);
refs.signUpBtn.addEventListener('click', onSignUp);
refs.logoutBtn.addEventListener('click', onLogOut);

async function onLogin() {
  const email = refs.emailInput.value;
  const password = refs.passwordInput.value;
  if (email.length === 0 || password.length === 0) {
    Notify.failure('Enter your user credentials')
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password) 
    console.log(userCredential.user)
    window.location.href='index.html'
  }
  catch (error) {
    if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
      Notify.failure('User not found!Please input correct values!')
    } 
    console.log(error.code)
   }
  
}

async function onSignUp() {
  const email = refs.emailInput.value;
  const password = refs.passwordInput.value;
   
  if (email.length === 0 || password.length === 0) {
    Notify.failure('Enter your user credentials')
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    Notify.success('Succes! New user created')
    console.log(userCredential.user)
    
  }
  catch (error) {
    if (error.code === "auth/email-already-in-use") {
      Notify.failure('Error! User is already exist')
    } else if(error.code === "auth/invalid-email" || error.code === "auth/weak-password"){
      Notify.failure('Password must be at least 6 characters')
    } else {
      console.log(error)
    }

   }
  
}




async function authStatus ()  {
  onAuthStateChanged(auth, user => {
    if (user) {
      refs.openAuthModalBtn.setAttribute("hidden", "hidden")
      refs.logoutBtn.removeAttribute("hidden")
    }
    // else {
    //  refs.logoutBtn.setAttribute("hidden", "hidden")
    //   refs.openAuthModalBtn.removeAttribute("hidden")
    // }
  });
}

authStatus();


export async function onLogOut() {
  await signOut(auth);
  Notify.info('See you');
  window.location.href='index.html'
  
}