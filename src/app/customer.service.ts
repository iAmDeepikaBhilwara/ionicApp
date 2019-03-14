import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor() { }


  customer={
    id:0,
    name:"",
    email:"",
    address:"",
    phone:""
  }

  // customers:any=[
  //   {id:0,name:"Deepika",email:"deepi@gmail.com",address:"Bangalore",phone:"345678"},
  //   {id:1,name:"Divya",email:"divya@gmail.com",address:"Bangalore",phone:"3456787568"},
  //   {id:2,name:"Preeti",email:"preeti@gmail.com",address:"Bangalore",phone:"3456787568"},
  //   {id:3,name:"Deepak",email:"deepak@gmail.com",address:"Bangalore",phone:"3456787568"}
   
  // ];
  customers=JSON.parse(localStorage.getItem('customers'));

  
  getCustomers(){

    
    
    if(localStorage.getItem('customers').length!=null)
    {
      this.customers=JSON.parse(localStorage.getItem('customers'));
    }
    return this.customers;
  }

  deleteAllCustomers()
  {
    
     this.customers=[];
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }

  

  updateCustomer(customer){
    
    for(var i=0;i<this.customers.length;i++)
    {
      if(customer.id==this.customers[i].id)
      {
        this.customers[i]=customer;
        break;
      }
    }
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }



  deleteCustomer(id){
    
    
    for(var i=0;i<this.customers.length;i++)
    {
      if(id==this.customers[i].id)
      {
        this.customers.splice(i,1);
      }
    }

     localStorage.setItem('customers',JSON.stringify(this.customers));

  }

  addCustomers(customer){
    customer.id=Math.round(Math.random()*1000000);
    this.customers.push(customer);
    localStorage.setItem('customers',JSON.stringify(this.customers));

  }

  getCustomerById(id){
    
    for(var i=0;i<this.customers.length;i++)
    {
      if(id==this.customers[i].id)
      {
        return this.customers[i];
        break;
      }
    }
  }


}
