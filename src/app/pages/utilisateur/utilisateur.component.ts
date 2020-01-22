import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export interface UtilisateurComponent implements OnInit {
    firstName: string;
    lastName: string;
    mail: string;
    role: string;
    photo: string;
  }
