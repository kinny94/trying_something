import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserData } from './../../../models/model';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  user$: Observable<firebase.User>;
  authSubscription: Subscription;

  constructor(
    public  afAuth:  AngularFireAuth,
    public  router:  Router
  ) {
    this.user$ = afAuth.authState;
  }

  signUp(userdata: UserData, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userdata.email, password).then(() => {
      this.loginWithEmailAndPassword(userdata.email, password);
    }, (err) => {
      if (err) {
        return err;
      }
    });
  }

  loginWithEmailAndPassword(email:  string, password:  string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    this.authSubscription = this.user$.subscribe(user => {
      if (user === null) {
        return false;
      } else {
        return true;
      }
    });
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

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}

