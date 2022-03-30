import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  hobbies:string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.setHobbies();
  }

  setHobbies(){
    this.hobbies.push('horse riding');
    this.hobbies.push('paint');
    this.hobbies.push('gaming');
    this.hobbies.push('music');
  }
}
