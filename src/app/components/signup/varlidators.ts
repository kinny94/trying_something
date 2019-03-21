import { FormGroup } from '@angular/forms';

export function checkPasswords(group: FormGroup): any {
  const pass: string = group.controls.password.value;
  const confirmPass: string = group.controls.confirmPassword.value;

  return pass === confirmPass ? null : { notSame: true };
}


