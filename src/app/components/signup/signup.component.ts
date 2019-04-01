import { Component, OnInit, OnDestroy, NgZone  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { checkPasswords } from './varlidators';
import { ErrorStateMatcher } from '@angular/material';
import { UserData, Username } from './../../../models/model';
import { UserService } from './../../services/user-service/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';
import { uniqueNamesGenerator } from 'unique-names-generator';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  signupForm: FormGroup;
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  loginError = '';
  user$: Observable<firebase.User>;

  isSavingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSaving: Observable<boolean> = this.isSavingSubject.asObservable();

  hidePassword = true;
  hideConfirmPassword = true;

  usernameExists = false;
  accountExists = false;

  usernameExistSubscription: Subscription;
  accountExistSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private ngZone: NgZone
  ) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [ Validators.required ]],
      lastname: [''],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[a-z0-9]+$/i)
      ]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: checkPasswords });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  userExists(email: string): Observable<boolean> {
    return this.userService.userExists().valueChanges().pipe(
      map((users: Username[]) => {
        let exists = false;
        users.forEach((user: Username) => {
          if (user.email === email) {
            exists = true;
            return exists;
          }
        });
        return exists;
      })
    );
  }

  usernameTaken(username: string): Observable<boolean> {
    return this.userService.isUsernameTaken(username).pipe(
      map((user: Username) => {
        if (user === null) {
          return false;
        } else {
          return true;
        }
      }),
    );
  }

  onSignup() {
    this.isSavingSubject.next(true);
    if (this.signupForm.valid) {
      const userData: UserData = {
        firstname: this.signupForm.controls.firstname.value,
        lastname: this.signupForm.controls.lastname.value,
        username: this.signupForm.controls.username.value.toLowerCase(),
        email: this.signupForm.controls.email.value.toLowerCase(),
        likedProblems: [],
        ratedProblems: []
      };

      const passowrd: string = this.signupForm.controls.password.value;

      this.accountExistSubscription = this.userExists(userData.email)
      .subscribe( accountExists => {
        this.accountExists  = accountExists;
        if (!this.accountExists) {
          this.accountExists = false;
          this.usernameExistSubscription = this.usernameTaken(userData.username)
          .subscribe(userExists => {
            this.usernameExists = userExists;
            if (!this.usernameExists) {
              this.authService.signUp(userData, passowrd).then(() => {
                this.userService.saveUser(userData).then(() => {
                  this.userService.saveUsername(userData).then(() => {
                    this.isSavingSubject.next(false);
                    this.router.navigate(['/user/234']);
                    return;
                  });
                }, (err) => {
                  this.isSavingSubject.next(false);
                  return err;
                });
              }, (err) => {
                this.isSavingSubject.next(false);
                return err;
              });
            } else {
              this.usernameExists = true;
              this.isSavingSubject.next(false);
              return;
            }
          });
        } else {
          this.accountExists = true;
          this.isSavingSubject.next(false);
          return;
        }
      });
    } else {
      this.isSavingSubject.next(false);
    }
  }

  onLogin() {
    this.isSavingSubject.next(true);
    if (this.loginForm.valid) {
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      this.authService.loginWithEmailAndPassword(email, password).then(() => {
        this.loginError = '';
        this.isSavingSubject.next(false);
        this.router.navigate(['/user/123']);
      }, (err) => {
        this.loginError = err.message;
        this.isSavingSubject.next(false);
        return;
      });
    }
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  ngOnDestroy() {
    if  (this.usernameExistSubscription ) {
      this.usernameExistSubscription.unsubscribe();
    }

    if (this.accountExistSubscription) {
      this.accountExistSubscription.unsubscribe();
    }
  }

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

  facebookLogin() {
    this.isSavingSubject.next(true);
    this.authService.logInWithFacebook().then((data) => {
      const randomName: string = uniqueNamesGenerator();
      const newUser: UserData = {
        firstname: data.additionalUserInfo.profile['given_name'],
        lastname: data.additionalUserInfo.profile['family_name'],
        email: data.additionalUserInfo.profile['email'],
        username: randomName,
        likedProblems: [],
        ratedProblems: []
      };
      this.userService.saveUser(newUser).then(() => {
        this.userService.saveUsername(newUser).then(() => {
          this.isSavingSubject.next(false);
        });
      });
    }, (err) => {
      alert(err);
      return;
    }).then(() => {
      this.navigate(['/user/123']);
    }, (err) => {
      alert(err);
    });
  }

  googleLogin() {
    this.isSavingSubject.next(true);
    this.authService.logInWithGoogle().then((data) => {
      const randomName: string = uniqueNamesGenerator();
      const newUser: UserData = {
        firstname: data.additionalUserInfo.profile['given_name'],
        lastname: data.additionalUserInfo.profile['family_name'],
        email: data.additionalUserInfo.profile['email'],
        username: randomName,
        likedProblems: [],
        ratedProblems: []
      };
      this.userService.saveUser(newUser).then(() => {
        this.userService.saveUsername(newUser).then(() => {
          this.isSavingSubject.next(false);
        });
      });
    }, (err) => {
      alert(err);
      return;
    }).then(() => {
      this.navigate(['/user/123']);
    }, (err) => {
      alert(err);
    });
  }

  githubLogin() {
    this.isSavingSubject.next(true);
    this.authService.logInWithGithub().then((data) => {
      const randomName: string = uniqueNamesGenerator();
      const newUser: UserData = {
        firstname: data.additionalUserInfo.profile['given_name'],
        lastname: data.additionalUserInfo.profile['family_name'],
        email: data.additionalUserInfo.profile['email'],
        username: randomName,
        likedProblems: [],
        ratedProblems: []
      };
      this.userService.saveUser(newUser).then(() => {
        this.userService.saveUsername(newUser).then(() => {
          this.isSavingSubject.next(false);
        });
      });
    }, (err) => {
      alert(err);
      return;
    }).then(() => {
      this.navigate(['/user/123']);
    }, (err) => {
      alert(err);
    });
  }
}
