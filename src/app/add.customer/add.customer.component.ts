import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {

  
  customer=
    {id:0,name:" ",email:" ",address:" ",phone:" "};
  constructor(private customerService:CustomerService, private router:Router) {}

  ngOnInit() {}

  addCustomers(customer)
  {
    this.customerService.addRemoteCustomers(customer).subscribe(()=>this.router.navigate(['./list-customer']));
    this.customer={id:0,name:" ",email:" ",address:" ",phone:" "};
    

  }

}

