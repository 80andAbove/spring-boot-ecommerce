import { Component, Inject, OnInit } from '@angular/core';
import myAppConfig from 'src/app/config/my-app-config';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { 
    this.oktaSignin = new OktaSignIn({
      features: {
        registration: true
      },
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    });
  }

  ngOnInit(): void {
    this.oktaSignin.remove();
    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'},
      (response) => {
        if(response.status === 'SUCCESS'){
          this.oktaAuthService;
        }
      },
      (error) => {
        throw error;
      }
    )
  }

}
