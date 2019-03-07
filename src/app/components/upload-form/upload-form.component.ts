import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  uploadForm = new FormGroup({
    name: new FormControl(''),
    topic: new FormControl(''),
    tags: new FormControl(''),
    description: new FormControl(''),
    complexity: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.uploadForm.value);
  }

}
