import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  mail: string;

  ngOnInit() {
  }

  login(): void {
      alert(`${this.mail} hey`);
  }
}
