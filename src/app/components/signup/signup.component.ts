import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { checkPasswords } from './varlidators';
import { ErrorStateMatcher } from '@angular/material';
import { UserData, Username } from './../../../models/model';
import { UserService } from './../../services/user-service/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';


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
    private authService: AuthService
  ) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [ Validators.required ]],
      lastname: [''],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$')
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
    if (this.signupForm.valid) {
      const userData: UserData = {
        firstname: this.signupForm.controls.firstname.value,
        lastname: this.signupForm.controls.lastname.value,
        username: this.signupForm.controls.username.value.toLowerCase(),
        email: this.signupForm.controls.email.value.toLowerCase(), 
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
                this.userService.saveUser(userData);
                this.userService.saveUsername(userData);
              }, (err) => {
                return err;
              }).then(() => {
                this.router.navigate(['/user/234']);
                return;
              });
            } else {
              this.usernameExists = true;
              return;
            }
          });
        } else {
          this.accountExists = true;
          return;
        }
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      this.authService.loginWithEmailAndPassword(email, password).then(() => {
        this.loginError = '';
        this.router.navigate(['/user/123']);
      }, (err) => {
        this.loginError = err.message;
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
}
