import { Observable, BehaviorSubject, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UploadService } from './../../services/upload-services/upload.service';
import { COMPLEXITIES, TAGS, TOPICS, PROGRAMMING_LANGUAGE } from './../../model';
import { UUID } from 'angular2-uuid';
import { ProblemData } from './../../../models/model';

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
    language: new FormControl('', [Validators.required]),
    file: new FormControl('')
  });

  // Convert array constants into observable
  allComplexities$ = of(COMPLEXITIES);
  allTopics = [...TAGS];
  topics = [...TOPICS];
  languages = [...PROGRAMMING_LANGUAGE];

  // Subject observable in order to remove from the available tags array
  availableTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(TAGS);
  availableTags$ ?: Observable<Array<string>> = this.availableTagsSubject.asObservable();

  // Subject observable in order to add to the selected tags array
  selectedTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  selectedTags$: Observable<Array<string>> = this.selectedTagsSubject.asObservable();

  // Data upload variables
  uploadData: ProblemData;
  file: File;
  submitDisabled = true;
  dataUploaded = false;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {}

  onTagSelected (value: string) {
    if (!this.selectedTagsSubject.getValue().includes(value))   {
      const selectedTagsArray: Array<string> = [...this.selectedTagsSubject.getValue(), value];
    this.selectedTagsSubject.next(selectedTagsArray);

    const availableTagsArray: Array<string> = this.availableTagsSubject.getValue();
    availableTagsArray.filter((item) => item !== value);
    this.availableTagsSubject.next(availableTagsArray);
    }
  }

  onTagRemoved(value: string) {
    const selectedTagsArray: Array<string> = this.selectedTagsSubject.getValue();
    const newSelectedArray: Array<string> = selectedTagsArray.filter((item) => item !== value);
    this.selectedTagsSubject.next(newSelectedArray);

    const availableTagsArray: Array<string> = [...this.availableTagsSubject.getValue(), value];
    this.availableTagsSubject.next(availableTagsArray);
  }

  upload(event) {
    this.file = event.target.files[0];
    this.submitDisabled = false;
  }

  createStorageUrl(topic: string, language: string, id: string) {
    if (language.toLowerCase() === 'java') {
      return `${topic.toLowerCase()}/${id}/${language.toLowerCase()}/${id}.java`;
    }

    if (language.toLowerCase() === 'typescript') {
      return `${topic.toLowerCase()}/${id}/${language.toLowerCase()}/${id}.ts`;
    }

    if (language.toLowerCase() === 'python') {
      return `${topic.toLowerCase()}/${id}/${language.toLowerCase()}/${id}.py`;
    }

    if (language.toLowerCase() === 'javascript') {
      return `${topic.toLowerCase()}/${id}/${language.toLowerCase()}/${id}.js`;
    }
  }

  onSubmit() {
    this.submitDisabled = true;
    if (this.uploadForm.valid) {
      const name = this.uploadForm.controls.name.value;
      const topic = this.uploadForm.controls.topic.value.toLowerCase();
      const language = this.uploadForm.controls.language.value.toLowerCase();
      const uuid = UUID.UUID();
      const filePath = this.createStorageUrl(topic, language, uuid);
      this.uploadService.uploadFile(this.file, filePath, () => {
        this.submitDisabled = false;
      });

      const tags = this.selectedTagsSubject.getValue();
      this.uploadData = {
        id: uuid,
        name: name,
        stars: 0,
        topic: topic,
        likes: 0,
        raters: 0,
        description: this.uploadForm.controls.description.value,
        tags: tags,
        complexity: this.uploadForm.controls.complexity.value,
        storageUrl: {
          [language]: filePath
        }
      };

      this.uploadService.uploadData(this.uploadData, () => {
        this.submitDisabled = false;
        this.dataUploaded = true;
        this.uploadForm.reset();
      });
    }
  }
}
