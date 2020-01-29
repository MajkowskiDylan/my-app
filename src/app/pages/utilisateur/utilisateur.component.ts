import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/modeles/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
    @Input()
    user: Utilisateur;
    constructor() {}
    ngOnInit(): void {}
  }
