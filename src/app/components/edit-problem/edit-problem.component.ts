import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { ProblemData } from 'src/models/model';
import { TAGS, COMPLEXITIES, TOPICS } from 'src/app/model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UploadData, UploadService } from 'src/app/services/upload-services/upload.service';

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
  });

  problem$ ?: Observable<ProblemData>;
  problemData ?: ProblemData;
  subscriptions ?: Subscription;

   // Convert array constants into observable
   allComplexities$ = of(COMPLEXITIES);
   allTopics = [...TAGS];
   topics = [...TOPICS];

  // Subject observable in order to remove from the available tags array
  availableTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(TAGS);
  availableTags$ ?: Observable<Array<string>> = this.availableTagsSubject.asObservable();

  // Subject observable in order to add to the selected tags array
  selectedTagsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  selectedTags$: Observable<Array<string>> = this.selectedTagsSubject.asObservable();

  // Data upload variables
  uploadData: UploadData;
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

  onSubmit() {
    if (this.editForm.valid) {
      const name = this.editForm.controls.name.value;
      const topic = this.editForm.controls.topic.value;
      const complexity = this.editForm.controls.complexity.value;
      const filePath = this.problemData.storageUrl;
      console.log(`${topic}`)
      this.uploadService.uploadFile(this.file, filePath, () => {});
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
