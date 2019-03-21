import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { checkPasswords } from './varlidators';
import { ErrorStateMatcher } from '@angular/material';


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
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [ Validators.required ]],
      lastname: [''],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=[a-z_\d]*[a-z])[a-z_\d]{6,}$')
      ]],
      occupation: [''],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: checkPasswords });
  }

  ngOnInit() {}

}
