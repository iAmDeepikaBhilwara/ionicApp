import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.scss'],
})
export class AddStudentComponent implements OnInit {

  student={
    rollno:"",
    firstName:"",
    lastName:"",
    birthDate:"",
    class:"",
    subject:"",
    teacher:"",
    address:""
  }

  constructor(private studentService: StudentService,private router:Router) { }

  ngOnInit() {}

  addStudents(student)
  {
    this.studentService.addStudents(student);
    this.router.navigate(['./list-student']);
  }

}
