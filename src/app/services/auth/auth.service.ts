import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserData } from './../../../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    public  afAuth:  AngularFireAuth,
    public  router:  Router
  ) {
    this.user$ = afAuth.authState;
  }

  signUp(userdata: UserData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userdata.email, userdata.password).then(() => {
      this.loginWithEmailAndPassword(userdata.email, userdata.password);
    }, (err) => {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }

  loginWithEmailAndPassword(email:  string, password:  string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logInWithTwitter() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  logInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  logInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logInWithGithub() {
    return this.afAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
    );
  }
}

