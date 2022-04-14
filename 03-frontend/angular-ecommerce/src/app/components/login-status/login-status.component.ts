import { Component, Inject, OnInit } from '@angular/core';
import * as oktaAuth from '@okta/okta-angular'
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string;

  storage: Storage = sessionStorage;

  constructor(public authStateService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {
    this.authStateService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated;
        this.getUserDetails();
      }
    )
  }

  getUserDetails(){
    if(this.isAuthenticated){
      this.oktaAuthService.getUser().then(
        (res) => {
          this.userFullName = res.name;
          const theEmail = res.email;

          this.storage.setItem('userEmail', JSON.stringify(theEmail)); 
        }
      );
    }
  }

  logout(){
    this.oktaAuthService.signOut();
  }

}
