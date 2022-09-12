import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const Base_URL =  "http://localhost:8081/student/save";
const Geturl ="http://localhost:8081/student/getall";
const Delurl ="http://localhost:8081/student/delete/2";


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
      constructor(public http: HttpClient){

    }

      

  }