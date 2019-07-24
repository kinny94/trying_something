import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { ProblemData } from './../../../models/model';
import { TAGS, COMPLEXITIES, TOPICS, PROGRAMMING_LANGUAGE } from './../../model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UploadService } from 'src/app/services/upload-services/upload.service';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.scss']
})
export class EditProblemComponent implements OnInit, OnDestroy {

  editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    complexity: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
  });

  problem$ ?: Observable<ProblemData>;
  problemData ?: ProblemData;
  subscriptions ?: Subscription;
  formError = false;

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
  file: File;
  dataUploaded = false;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute,
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    const topic = this.route.snapshot.params.topic;
    const id = this.route.snapshot.params.id;

    this.problem$ = this.problemService.getProblem(topic, id).valueChanges();
    this.subscriptions = this.problem$.pipe(
      map(problemData => {
        this.problemData = problemData;
        this.selectedTagsSubject.next(problemData.tags);
        this.editForm.controls.name.setValue(this.problemData.name);
        this.editForm.controls.topic.setValue(this.problemData.topic);
        this.editForm.controls.description.setValue(this.problemData.description);
        this.editForm.controls.complexity.setValue(this.problemData.complexity);
        this.editForm.controls.tags.setValue(this.problemData.tags);
      }),
    ).subscribe();
  }

  onTagRemoved(value: string) {
    const selectedTagsArray: Array<string> = this.selectedTagsSubject.getValue();
    const newSelectedArray: Array<string> = selectedTagsArray.filter((item) => item !== value);
    this.selectedTagsSubject.next(newSelectedArray);

    const availableTagsArray: Array<string> = [...this.availableTagsSubject.getValue(), value];
    this.availableTagsSubject.next(availableTagsArray);
  }

  onTagSelected (value: string) {
    if (!this.selectedTagsSubject.getValue().includes(value))   {
      const selectedTagsArray: Array<string> = [...this.selectedTagsSubject.getValue(), value];
    this.selectedTagsSubject.next(selectedTagsArray);

    const availableTagsArray: Array<string> = this.availableTagsSubject.getValue();
    availableTagsArray.filter((item) => item !== value);
    this.availableTagsSubject.next(availableTagsArray);
    }
  }

  isFormValid() {
    if (this.selectedTagsSubject.getValue().length === 0) { return false; }
    return true;
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
    if (this.editForm.valid && this.isFormValid()) {
      this.formError = false;
      if (!this.file) {
        const data: ProblemData = {
          name:  this.editForm.controls.name.value,
          complexity: this.editForm.controls.complexity.value,
          description: this.editForm.controls.description.value,
          tags: this.selectedTagsSubject.getValue(),
          topic: this.editForm.controls.topic.value,
          id: this.problemData.id,
          likes: this.problemData.likes,
          raters: this.problemData.raters,
          stars: this.problemData.stars,
          storageUrl: {
            ...this.problemData.storageUrl
          }
        };
        const id = this.route.snapshot.params.id;
        return this.uploadService.editProblemData(data, id);
      } else {
        const newFilePath = this.createStorageUrl(
          this.editForm.controls.topic.value,
          this.editForm.controls.language.value,
          this.problemData.id
        );

        this.uploadService.uploadFile(this.file, newFilePath, () => {});

        const data: ProblemData = {
          id: this.problemData.id,
          likes: this.problemData.likes,
          raters: this.problemData.raters,
          stars: this.problemData.stars,
          name:  this.editForm.controls.name.value,
          complexity: this.editForm.controls.complexity.value,
          description: this.editForm.controls.description.value,
          tags: this.selectedTagsSubject.getValue(),
          topic: this.editForm.controls.topic.value,
          storageUrl: {
            ...this.problemData.storageUrl,
            [this.editForm.controls.language.value.toLowerCase()]: newFilePath
          }
        };
        const id = this.route.snapshot.params.id;
        return this.uploadService.editProblemData(data, id);
      }
    } else {
      this.formError = true;
    }
  }

  upload(event) {
    this.file = event.target.files[0];
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
