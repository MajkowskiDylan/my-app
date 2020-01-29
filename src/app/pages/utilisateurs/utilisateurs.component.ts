import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent {

  users: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService) {}
  ngOnInit(): void {
      this.utilisateurService.getUsers().subscribe(users => this.users   = users);
  }
}
