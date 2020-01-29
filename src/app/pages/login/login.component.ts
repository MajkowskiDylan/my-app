import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { error } from 'util';

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

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(`Mon courriel est ${this.profileForm.value.mail}`);
    this.login(this.profileForm.value.mail, this.profileForm.value.password);
  }

  login(mail, password) {
    this.afAuth.auth.signInWithEmailAndPassword(mail, password).then(() => {
      debugger;
    }).catch(error => {
      debugger;
    }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
