import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.sass'],
})
export class LoginViewComponent {
  constructor(public auth: AuthService, private router: Router) {}

  loginWithRedirect() {
    this.auth.loginWithRedirect().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}