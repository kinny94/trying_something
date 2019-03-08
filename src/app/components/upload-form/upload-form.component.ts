import { filter, take } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const TAGS = [
  'Array',
  'LinkedList',
  'Stack',
  'Queue',
  'Graph',
  'Tree',
  'Algorithms',
  'Searching',
  'Sorting',
  'Dynamic Programming',
  'Hash-Table'
];
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

  availableTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(TAGS);
  availableTags$ ?: Observable<Array<string>> = this.availableTagsSubject.asObservable();
  selectedTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  selectedTags$: Observable<Array<string>> = this.selectedTagsSubject.asObservable();

  constructor() { }

  ngOnInit() {}

  onTagSelected(value: string) {

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

  onSubmit() {
  }

}
