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

  // students:any=[
  //   {rollno:0,firstName:"Deepika",lastName:"Kannikar",birthDate:"13/02/1993",class:"4",subject:"science",teacher:"venkatesh",address:"Bangalore"},
  //   {rollno:1,firstName:"Divya",lastName:"Kannikar",birthDate:"5/04/1990",class:"10",subject:"Maths",teacher:"Nirmala",address:"Bangalore"}

  // ];
  students=JSON.parse(localStorage.getItem('students'));

  
getStudents()
{
  if(localStorage.getItem('students').length!=null)
  {
    this.students=JSON.parse(localStorage.getItem('students'));
  }
   return this.students;
}

addStudents(student)
{
  student.rollno=Math.round(Math.random()*10000);
  this.students.push(student);
  localStorage.setItem('students',JSON.stringify(this.students));
}

deleteAllStudents()
{
  
  this.students=[];
  localStorage.setItem('students',JSON.stringify(this.students));
}

deleteStudent(rollno)
{
  for(var i=0;i<this.students.length;i++)
  {
    if(rollno==this.students[i].rollno)
    {
      this.students.splice(i,1);
    }
  }
  localStorage.setItem('students',JSON.stringify(this.students));
}

getStudentById(rollno)
{
 for(var i=0;i<this.students.length;i++)
 {
   if(rollno==this.students[i].rollno)
   {
     return this.students[i];
     console.log(this.students[i]);
     break;
   }
 }
 

}

updateStudent(student)
{
  for(var i=0;i<this.students.length;i++)
  {
    if(student.rollno==this.students[i].rollno)
    {
      this.students[i]=student;
      break;
    }
  }
  localStorage.setItem('students',JSON.stringify(this.students));
}


}

