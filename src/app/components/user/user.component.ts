import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Observable, Subscription } from 'rxjs';
import { UserData, Username } from 'src/models/model';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { checkPasswords } from '../signup/validators';
import { ErrorStateMatcher } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export interface UpdateProfileData {
  firstname: string;
  lastname?: string;
  username: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userdata$: Observable<UserData>;
  likedProblems$: Observable<Object>;
  ratedProblems$: Observable<Object>;

  updateProfileForm: FormGroup;
  changePassowordForm: FormGroup;

  hidePassword = true;
  hideConfirmPassword = true;

  showChangePasswordForm = false;

  updateProfileData: UpdateProfileData;
  userdataSubscription: Subscription;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.updateProfileForm = this.formBuilder.group({
      firstname: ['', [ Validators.required ]],
      lastname: [''],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[a-z0-9]+$/i)
      ]],
    });

    this.changePassowordForm = this.formBuilder.group({
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: checkPasswords });
  }

  ngOnInit() {
    this.userdata$ = this.userService.getUserData();
    this.userdataSubscription = this.userdata$.pipe(
      map((userdata: UserData) => {
        this.updateProfileForm.controls.firstname.setValue(userdata.firstname);
        this.updateProfileForm.controls.lastname.setValue(userdata.lastname);
        this.updateProfileForm.controls.username.setValue(userdata.username);

        this.updateProfileData = {
          firstname: userdata.firstname,
          lastname: userdata.lastname,
          username: userdata.username
        };
      })
    ).subscribe();

    this.likedProblems$ = this.userdata$.pipe(
      map((userdata: UserData) => {
        return userdata.likedProblems;
      }),
    );
    this.ratedProblems$ = this.userdata$.pipe(
      map((userdata: UserData) => {
        return userdata.ratedProblems;
      }),
    );
  }

  ngOnDestroy() {
    if (this.userdataSubscription) {
      this.userdataSubscription.unsubscribe();
    }
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

  changeForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  updateProfile() {
    if (this.updateProfileForm.valid && this.profileFormValueChanged()) {
      const newUserData: UpdateProfileData = {
        firstname: this.updateProfileForm.controls.firstname.value,
        lastname: this.updateProfileForm.controls.lastname.value,
        username: this.updateProfileForm.controls.username.value
      };

      this.usernameTaken(newUserData.username).pipe(
        map((isTaken: boolean) => {
          if (isTaken) {
            
          }
        })
      )
    }
  }

  profileFormValueChanged() {
    if (
      this.updateProfileForm.controls.firstname.value === this.updateProfileData.firstname &&
      this.updateProfileForm.controls.lastname.value === this.updateProfileData.lastname &&
      this.updateProfileForm.controls.username.value === this.updateProfileData.username
    ) {
      return false;
    } else {
      return true;
    }
  }

  changePassword() {
    console.log('I am gonna change password');
  }

}
