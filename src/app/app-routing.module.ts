import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ErrorComponent } from './components/error/error.component';
import { RechercheContactComponent } from './components/recherche-contact/recherche-contact.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {path : 'contacts' , component : ListContactComponent},
  {path : 'recherche-contact/:id' , component : RechercheContactComponent},
  
  {path : '', redirectTo: 'contacts', pathMatch: 'full' },
  
  {path: '404',component: ErrorComponent},
  {path: '**', redirectTo: '/404',}

];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
