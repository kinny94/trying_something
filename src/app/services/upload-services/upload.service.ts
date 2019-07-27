import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProblemData } from './../../../models/model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {}

  uploadFile (file: File, filePath: string, callback: any) {
    this.ref = this.storage.ref(filePath);
    this.task = this.ref.put(file);
    callback();
  }

  uploadData(data: ProblemData, callback: any) {
    this.db.list(`/problems/${data.topic}`).push(data);
    callback();
  }

  editProblemData(data: ProblemData, id: string) {
    return this.db.object(`/problems/${data.topic}/${id}`).set(data);
  }

  deleteFile(path: string) {
    return this.storage.ref(path).delete();
  }
}
