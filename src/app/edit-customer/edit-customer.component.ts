import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private customerService:CustomerService,private router:Router) { }
  id: number;
  private sub: any;
  customer:any;
 

  ngOnInit() {
    this.customer = {name:'', email:'', address:'', phone:''};
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.customerService.getRemoteCustomersById(this.id).subscribe((customer)=>{this.customer = customer;});
    });
  }
  updateCustomer(customer){
    this.customerService.updateRemoteCustomer(customer).subscribe(()=>this.router.navigate(['./list-customer']));
    
  }

}


// this.customerService.updateRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/list-customer']);});