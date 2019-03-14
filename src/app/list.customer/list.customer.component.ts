import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

  list=[];
  constructor(private customerService:CustomerService,private router:Router) { 
    this.list=this.customerService.getCustomers();
  }

  ngOnInit() {}

     deleteAllCustomers(){
       this.customerService.deleteAllCustomers();
     }

     updateCustomer(id){
       this.customerService.updateCustomer(id);
     }

     onSelect(id){

      this.router.navigate(['/editCustomer/',+id]);
     }

     deleteCustomer(id){
       this.customerService.deleteCustomer(id);
     }
  }
