import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { checkPasswords } from './varlidators';
import { ErrorStateMatcher } from '@angular/material';
import { UserData, Username } from './../../../models/model';
import { UserService } from './../../services/user-service/user.service';
import { Router } from '@angular/router';
import { map, ignoreElements } from 'rxjs/operators';
import { Subscription, of, Observable, Subject, BehaviorSubject } from 'rxjs';


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
  matcher = new MyErrorStateMatcher();
  usernameExists = false;
  accountExists = false;

  usernameExistSubscription: Subscription;
  accountExistSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
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
    )
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

  onSubmit() {
    if (this.signupForm.valid) {
      const userData: UserData = {
        firstname: this.signupForm.controls.firstname.value,
        lastname: this.signupForm.controls.lastname.value,
        username: this.signupForm.controls.username.value,
        email: this.signupForm.controls.email.value,
        password: this.signupForm.controls.password.value
      };

      this.accountExistSubscription = this.userExists(userData.email)
      .subscribe( accountExists => {
        this.accountExists  = accountExists;
        if (!this.accountExists) {
          this.accountExists = false;
          this.usernameExistSubscription = this.usernameTaken(userData.username)
          .subscribe(userExists => {
            this.usernameExists = userExists;
            if (!this.usernameExists) {
              this.userService.saveUser(userData);
              this.userService.saveUsername(userData);
              this.router.navigate(['/user/234']);
              return;
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

  ngOnInit() {}

  ngOnDestroy() {
    this.usernameExistSubscription.unsubscribe();
    this.accountExistSubscription.unsubscribe();
  }
}
