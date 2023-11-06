import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private firestore: AngularFirestore) {}

  createDoc(data: any, path: string, id: string) {
  
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);

}
  creatDoce() {
    this.firestore.collection('estudiantes')
  }
  
  getId() {
    return this.firestore.createId();
  }
  getCollection<mensajess>(path: string) {

    const collection = this.firestore.collection<mensajess>(path);
    return collection.valueChanges();

  }
  getDoc<tipo>(path: string, id: string) {
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
   }

  updateDoc(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).update(data);
  }
  setDoc(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
}