import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstname: new FormControl('', [ Validators.required ]),
    lastname: new FormControl('', [ Validators.required ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?=[a-z_\d]*[a-z])[a-z_\d]{6,}$')
    ]),
    occupation: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(8)),
    confirmPassword: new FormControl('', Validators.minLength(7))
  });

  constructor() { }

  ngOnInit() {
  }

}
