import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/modeles/utilisateur';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent {

  users: Utilisateur[];
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor() {}
  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Jeune',
        lastName: 'Viève',
        mail: 'genevieve@m.com',
        photo: '',
        role: 'kek',
      }];
  }
}
