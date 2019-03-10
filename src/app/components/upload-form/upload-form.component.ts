import { Observable, BehaviorSubject, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UploadService, UploadData } from 'src/app/services/upload-services/upload.service';
import { COMPLEXITIES, TAGS } from './../../model';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    complexity: new FormControl('', [Validators.required]),
    file: new FormControl('')
  });

  // Convert array constants into observable
  allComplexities$ = of(COMPLEXITIES);
  allTopics = [...TAGS];

  // Subject observable in order to remove from the available tags array
  availableTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(TAGS);
  availableTags$ ?: Observable<Array<string>> = this.availableTagsSubject.asObservable();

  // Subject observable in order to add to the selected tags array
  selectedTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  selectedTags$: Observable<Array<string>> = this.selectedTagsSubject.asObservable();

  // Data upload variables
  uploadData: UploadData;
  file: File;
  submitDisabled = true;
  dataUploaded = false;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {}

  onTagSelected (value: string) {
    const selectedTagsArray: Array<string> = this.selectedTagsSubject.getValue();
    const newSelectedArray: Array<string> = [...selectedTagsArray, value];
    this.selectedTagsSubject.next(newSelectedArray);

    const availableTagsArray: Array<string> = this.availableTagsSubject.getValue();
    availableTagsArray.forEach((item, index) => {
      if (item === value) {
        availableTagsArray.splice(index, 1);
      }
    });
    this.availableTagsSubject.next(availableTagsArray);
  }

  upload(event) {
    this.file = event.target.files[0];
    this.submitDisabled = false;
  }

  onSubmit() {
    this.submitDisabled = true;
    if (this.uploadForm.valid) {
      const name = this.uploadForm.controls.name.value;
      let topic = this.uploadForm.controls.topic.value;
      if (topic.toLowerCase() === 'searching' || topic.toLowerCase() === 'sorting') {
        topic = `algorithms/${topic}`;
      }
      const filePath = `${topic.toLowerCase()}/${name}`;
      this.uploadService.uploadFile(this.file, filePath, () => {
        this.submitDisabled = false;
      });

      const tags = this.selectedTagsSubject.getValue();
      this.uploadData = {
        name: name,
        stars: 0,
        topic: topic.toLowerCase(),
        likes: 0,
        description: this.uploadForm.controls.description.value,
        tags: tags,
        complexity: this.uploadForm.controls.complexity.value,
        storageUrl: filePath
      };

      this.uploadService.uploadData(this.uploadData, () => {
        this.submitDisabled = false;
        this.dataUploaded = true;
        this.uploadForm.reset();
        this.uploadForm.markAsPristine();
        setInterval(() => {
          this.dataUploaded = false;
        }, 1000);
      });
    }
  }
}
