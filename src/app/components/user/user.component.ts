import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Observable, Subscription, of } from 'rxjs';
import { UserData, Username } from 'src/models/model';
import { map, switchMap, flatMap, take } from 'rxjs/operators';
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
  lastname: string;
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

  usernameExists = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.updateProfileForm = this.formBuilder.group({
      firstname: ['', [ Validators.required ]],
      lastname: [''],
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

        this.updateProfileData = {
          firstname: userdata.firstname,
          lastname: userdata.lastname,
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

  changeForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  updateProfile() {
    if (this.updateProfileForm.valid && this.profileFormValueChanged()) {
      const newUserFormData: UpdateProfileData = {
        firstname: this.updateProfileForm.controls.firstname.value,
        lastname: this.updateProfileForm.controls.lastname.value,
      };

      this.userdata$.pipe(
        map((userdata: UserData) => {
          return userdata;
        }),
        switchMap((userdata: UserData) => {
          return this.userService.updateUserData(userdata.username, newUserFormData);
        }),
        take(1)
      ),
    }
  }

  profileFormValueChanged() {
    if (
      this.updateProfileForm.controls.firstname.value === this.updateProfileData.firstname &&
      this.updateProfileForm.controls.lastname.value === this.updateProfileData.lastname
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
