import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/skills.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service: elimina el warning del scope externo
  )
  {
  /* Guardar datos de usuario en localstorage cuando inicie sesión y configurar nulo cuando cierre sesión */
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
// login
  Login(email, password){  
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['user']); 
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
  Register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
// Envia un mail de verificacion cuando un nuevo usuario se ha registrado
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']); // hacer pantalla aqui
    });
  }

// resetear password olvidada
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

// Devuelve true si el usuario es loggeado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

// Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

// Lógica de autenticación para ejecutar proveedores de autenticación necesaria en el resto de funciones.  
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
          this.router.navigate(['user']);
        });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Configuración de datos de usuario al iniciar sesión con nombre de usuario / contraseña,
     Regístrese con nombre de usuario / contraseña e inicie sesión con autenticación social
     Proveedor en la base de datos de Firestore usando el servicio AngularFirestore + AngularFirestoreDocument */
     SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      };
      return userRef.set(userData, {
        merge: true
      });
    }
// log out
  LogOut() { // SingOut
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);  //navegar a sing in
    })
  }
}
