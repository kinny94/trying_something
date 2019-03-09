import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

export interface UploadData {
  stars: number;
  likes: number;
  name: string;
  topic: string;
  tags: Array<string>;
  description: string;
  complexity: string;
  storageUrl: string;
}

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

  uploadFile (file: File, filePath:string, callback) {
    this.ref = this.storage.ref(filePath);
    this.task = this.ref.put(file);
    callback();
  }

  uploadData(data: UploadData, callback) {
    this.db.list(`/problems/${data.topic}`).push(data);
    callback();
  }
}
