import { NgModule } from '@angular/core';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: []
})
export class LoginModule { }
