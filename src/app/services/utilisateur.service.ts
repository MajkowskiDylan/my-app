import { Injectable } from '@angular/core';
import { Utilisateur } from '../modeles/utilisateur';
import {Observable, of} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  users = [
    {
      firstName: 'Jeune',
      lastName: 'Viève',
      mail: 'genevieve@m.com',
      photo: '',
      role: 'Top Executive'
    },
    {
      firstName: 'Park',
      lastName: 'Chan-wook',
      mail: 'oldboy@old.com',
      photo: '',
      role: 'Kek'
    }
  ];

  constructor(private db: AngularFirestore) {
  }

  getUsers(): Observable<Utilisateur[]> {
    return this.db.collection<Utilisateur>('utilisateurs').valueChanges();
  }
}
