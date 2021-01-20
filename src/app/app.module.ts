import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RechercheContactComponent } from './components/recherche-contact/recherche-contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';






import { HttpClientModule,HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RechercheContactComponent,
    ErrorComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
