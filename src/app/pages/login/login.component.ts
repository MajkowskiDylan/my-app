import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(`Mon courriel est ${this.profileForm.value.mail}`);
  }
}
