import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

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

  students:any=[
    {rollno:"0",firstName:"Deepika",lastName:"Kannikar",birthDate:"13/02/1993",class:"4",subject:"science",teacher:"venkatesh",address:"Bangalore"},
    {rollno:"1",firstName:"Divya",lastName:"Kannikar",birthDate:"5/04/1990",class:"10",subject:"Maths",teacher:"Nirmala",address:"Bangalore"}

  ];

  
getStudents()
{
  return this.students;
}

addStudents(student)
{
  //student.rollno=Math.round(Math.random()*10000);
  this.students.push(student);
}

deleteAllStudents()
{
  
  this.students.length = 0;
}

deleteStudent(id)
{
  for(var i=0;i<this.students.length;i++)
  {
    if(id==this.students[i].id)
    {
      this.students.splice(i,1);
    }
  }
}

}

