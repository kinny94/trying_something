import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { User } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable()
export class Globals implements OnDestroy {

  user: User = undefined;
  currentUser: string = undefined;
  userData: Object = undefined;
  authSubscription: Subscription;
  snapshotSubscription: Subscription;
  userDataSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
  ) {
    this.authSubscription = this.authService.user$.subscribe((user: User) => {
      this.user = user;
      if (this.user) {
        this.snapshotSubscription = this.db.list(`/usernames/`).snapshotChanges().pipe(
          map(dataSnapshot => {
            dataSnapshot.forEach(userDataPayload => {
              if (userDataPayload.payload.val()['email'] === this.user.email) {
                this.currentUser = userDataPayload.key;
                this.userDataSubscription = this.db.object(`/users/${userDataPayload.key}/`).valueChanges().subscribe((userData) => {
                  this.userData = userData;
                });
                return;
              }
            });
          })
        ).subscribe();
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.snapshotSubscription.unsubscribe();
    this.userDataSubscription.unsubscribe();
  }
}
