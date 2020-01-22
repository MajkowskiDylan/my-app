import { Component, OnInit, Input } from '@angular/core';
import Utilisateur from '../utilisateur/utilisateur.component';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent {
  @Input()
  user: Utilisateur;
  constructor() {}
  ngOnInit(): void {}
}
