import { filter, take } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
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

  tagSelection ?: Observable<Array<string>>;
  selectedTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  selectedTags: Observable<Array<string>> = this.selectedTagsSubject.asObservable();

  constructor() { }

  ngOnInit() {
    this.tagSelection = of(TAGS);
  }

  onTagSelected(value) {

    this.selectedTags.pipe(take(1)).subscribe(tags => {
      const newArr = [...tags, value];
      this.selectedTagsSubject.next(newArr);
    });

    this.tagSelection = this.tagSelection.pipe(
      filter(tag => tag !== value)
    );

    this.selectedTags.subscribe(data => console.log(data));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.uploadForm.value);
  }

}
