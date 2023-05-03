import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
