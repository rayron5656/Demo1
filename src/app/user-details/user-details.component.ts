import { Component, OnInit } from '@angular/core';
import type {user} from '../interfaces/number'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:user = {
    name: "rayron5656",
    email: "rayron5656@gmail.com",
    birthDate: Date.parse("1995-10-30")
  };

  isSpaciel:boolean = true;
  currentStyles = {};
  canSave:boolean = false;

  myClass:any = {};

  constructor() {
    this.setCurrentStyles();
    this.setMyClass();
   }

    getSomeString(){
     return "Wow!";
   }

   setMyClass(){
   
      this.myClass = {
        wow:false,
        amazing:true,
        }
    
    
   }

   

   calAge(DOB:any)
   {let D = new Date(DOB);
    let a = Date.now() - D.getTime();
    let age = new Date(a);

    return Math.abs(age.getUTCFullYear() - 1970).toString();
   }

  ngOnInit(): void {
  }

  handlebool(){
    if (this.isSpaciel === false) {
      this.isSpaciel = true;
    }
    else{
      this.isSpaciel = false;
    }
    if (this.canSave === false) {
      this.canSave = true;
    }
    else{
      this.canSave = false;
    }
    this.setCurrentStyles();
    this.setMyClass();
    
  }

  setCurrentStyles(){
    this.currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-size': this.isSpaciel ? '24px' : '12px'
    }
  }

}
