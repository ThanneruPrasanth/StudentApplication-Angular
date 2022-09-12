import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Base_URL =  "http://localhost:8081/student/save";
const Geturl ="http://localhost:8081/student/getall";
const Delurl ="http://localhost:8081/student/delete/2";

const BASE_URL_TO_SAVE_STUDENT ="http://localhost:8081/addStudent";
const BASE_URL_TO_GET_STUDENTS ="http://localhost:8081/getAllStudents";
const BASE_URL_TO_DELETE_STUDENT ="http://localhost:8081/deleteStudent/";
const BASE_URL_TO_UPDATE_STUDENT ="http://localhost:8081/update/";


@Injectable({
    providedIn: 'root'
  })

  export class StudentService{
    getStudent(){
      return this.http.get(Geturl);
    }
      saveStudent(student:{
        firstname:string;
        lastname:string;
        s_class:number;
        dob:string;
        
      }){
          return this.http.post(Base_URL,student);
      }

      deleteStudent(student: any) {
        return this.http.delete(BASE_URL_TO_DELETE_STUDENT + student.rollNumber)
      }
    
      updateStudent(stud, id) {
        return this.http.put(BASE_URL_TO_UPDATE_STUDENT + id, stud);
      }
    


      constructor(public http: HttpClient){

    }

      

  }