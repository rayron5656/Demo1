import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-first-form',
  templateUrl: './my-first-form.component.html',
  styleUrls: ['./my-first-form.component.css']
})
export class MyFirstFormComponent implements OnInit {
  
  candy : any[] = [];
  constructor() { }

  

  ngOnInit(): void {
  }

  handleSubmit(form:any){
    console.log(form);
    let c = {}
    this.candy.push(form)
  }

}
