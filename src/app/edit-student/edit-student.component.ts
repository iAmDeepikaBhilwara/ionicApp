import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router,private studentService:StudentService) { }
  id:number;
  private sub:any;
  student:any;

  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.id=+params['id'];
      console.log("id is"+this.id);
      this.student=this.studentService.getStudentById(this.id);
    });

  }

  updateStudent(student)
  {
    this.studentService.updateStudent(student);
    this.router.navigate(['./list-student']);
  }

}



