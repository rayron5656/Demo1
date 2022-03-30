import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter:number = 0;
  mybool : boolean = true;
  animal:string = "cow";

  ngOnInit(): void {
  }

  toggle(){
    this.mybool = !this.mybool;
  }

  plus(){
    this.counter++;
  }


  minus(){
  this.counter--;
  }

  changeSwitch(string:string){
  this.animal = string;
  }

}
