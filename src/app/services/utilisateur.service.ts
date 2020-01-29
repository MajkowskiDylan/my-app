import { Injectable } from '@angular/core';
import { Utilisateur } from '../modeles/utilisateur';

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

  constructor() { }
  getUsers(): Utilisateur[] {
    return this.users;
  }
}
