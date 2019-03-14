import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  
  private selectedItem: any;
  private icons = [
    'people',
    'person-add',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(private studentService:StudentService,private router : Router) 
  {
    this.items.push({
  		title: 'List',
        note:'/list-student',
        icon: this.icons[0]
  	});
  	this.items.push({
  		title: 'Add',
  		note:'/add-student',
      icon: this.icons[1]
  	});
   }

  ngOnInit() {

  }

  openUrl(item){
    this.router.navigate([item.note]);
  }
}





  
  
  
  
