
import { ContactService } from './../../service/contact.service';
import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  
  contacts : Contact[];
  contact : Contact=new Contact();
  error : string;
  filterValue: Array<any> = [];
  constructor(private contactService :ContactService,private router : Router) { 

    this.filterValue = this.contacts;
  }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts(){
    this.contactService.getAllContacts().subscribe(data=>{
      this.contacts= data;
    },
    error => {
      this.error = error;
    });
  }

  private getContact(id : string){
    this.contactService.getContactById(id).subscribe(data=>{
      this.contact= data;
      console.log('kkkkk'+this.contacts);
    },
    error => {
      this.error = error;
    });
  }

  private recherchContact(id : string){
    this.router.navigate(['recherche-contact',id]);
  
  }

  onSubmit(f: NgForm) {
    
    this.contact.id=f.value.idContact;
    this.getContact(this.contact.id);
    
  }

}
