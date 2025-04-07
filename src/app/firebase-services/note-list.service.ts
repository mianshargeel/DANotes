import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  firestore = inject(Firestore);

  constructor() { }
  // itemCollection = collection(this.firestore, 'items');

  getNoteshRef() {
    return collection(this.firestore, 'notes');
  }
  getTrashRef() {
    return collection(this.firestore, 'trash');
  }
}
