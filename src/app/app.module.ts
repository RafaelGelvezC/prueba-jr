import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ApiServiceService } from './ApiService/api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
