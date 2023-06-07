import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeViewComponent } from './modules/home/home-view/home-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-bsza4fta3oe4pbjn.us.auth0.com',
      clientId: 'k943KAX7ez8vFfkD6LUVxlqJCYuW8qdZ',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
