import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contact } from '../model/contact';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private SERVER_URL = environment.API_URL;
  private endPoint = '/total/contacts';
 
  
  
 

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  constructor(private httpClient : HttpClient) { }

  getAllContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.SERVER_URL+this.endPoint}`)
    .pipe(catchError(this.handleError));
   
     }

     getContactById(id : string): Observable<Contact>{
      return this.httpClient.get<Contact>(`${this.SERVER_URL+this.endPoint}/${id}`)
      .pipe(catchError(this.handleError));
     
       }

       rechercheContact(id:string,contact :Contact):Observable<Object>{
        return this.httpClient.put(`${this.SERVER_URL+this.endPoint}/${id}`,contact)
        .pipe(catchError(this.handleError));
      }
}
