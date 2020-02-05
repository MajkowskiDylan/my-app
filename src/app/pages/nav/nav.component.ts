import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public isLoggedIn$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.afAuth.user.pipe(map(user => {
      return user != null;
    }));
  }

}
