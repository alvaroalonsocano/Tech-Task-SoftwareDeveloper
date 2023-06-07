import { NgModule } from '@angular/core';
import { homeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';


@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    homeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
