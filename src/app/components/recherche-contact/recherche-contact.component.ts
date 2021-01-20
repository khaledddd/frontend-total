import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-recherche-contact',
  templateUrl: './recherche-contact.component.html',
  styleUrls: ['./recherche-contact.component.css']
})
export class RechercheContactComponent implements OnInit {

  id :string;
  contact : Contact=new Contact();
   error :string;
   
  constructor(private contactService : ContactService,
     private route :ActivatedRoute,
     private router :Router) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.contactService.getContactById(this.id).subscribe(data=>{
     this.contact=data;
   },
   error => {
    this.error = error;
  
  })

  }
 s

  goToContactsList(){
  this.router.navigate(['/contacts']);

}
}
