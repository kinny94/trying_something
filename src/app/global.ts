import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { User } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap, flatMap, filter } from 'rxjs/operators';
import { Subscription, BehaviorSubject, of } from 'rxjs';
import { UserData } from './../models/model';

@Injectable({
  providedIn: 'root',
})
export class Globals implements OnDestroy {

  user: User = undefined;
  currentUser: string = undefined;
  userData: UserData = undefined;
  authSubscription: Subscription;
  snapshotSubscription: Subscription;
  userDataSubscription: Subscription;

  userSubject: BehaviorSubject<string> = new BehaviorSubject(undefined);
  userEmailSubject: BehaviorSubject<string> = new BehaviorSubject(undefined);

  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
  ) {

    this.authSubscription = this.authService.user$.pipe(
      map((user: User) => {
        if (user) {
          this.user = user;
          this.snapshotSubscription = this.db.list(`/usernames/`).snapshotChanges().pipe(
            map(dataSnapshot => {
              dataSnapshot.forEach(userDataPayload => {
                if (userDataPayload.payload.val()['email'] === this.user.email) {
                  this.currentUser = userDataPayload.key;
                  this.userDataSubscription = this.db.object(`/users/${userDataPayload.key}/`).valueChanges()
                  .subscribe((userData: UserData) => {
                    this.userData = userData;
                  });
                  return;
                }
              });
            })
          ).subscribe();
        }
      })
    ).subscribe();
  }

  getUser() {
    return this.authService.user$.pipe(
      map((user: User) => {
        if (user) {
          this.userSubject.next(user.email);
          return this.userSubject.value;
        }
        return undefined;
      }),
    );
  }

  getUserDataSnapshot() {
    return this.getUser().pipe(
      switchMap(() => {
        return this.db.list(`/usernames/`).snapshotChanges();
      }),
      switchMap(snapshot => of(snapshot.filter(data => data['payload'].val()['email'] === this.userSubject.value))),
      flatMap((snap: any) => {
        this.userEmailSubject.next(snap[0].payload.key);
        return snap;
      })
    );
  }

  getUserData() {
    return this.getUserDataSnapshot().pipe(
      switchMap(() => {
        return this.db.object(`/users/${this.userEmailSubject.value}`).valueChanges();
      }),
      flatMap((userdata) => {
        return of(userdata);
      }),
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }

    if (this.snapshotSubscription) {
      this.snapshotSubscription.unsubscribe();
    }

    if (this.userDataSubscription) {
      this.userDataSubscription.unsubscribe();
    }
  }
}
