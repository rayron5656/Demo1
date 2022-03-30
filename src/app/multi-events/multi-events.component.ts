import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-multi-events',
  templateUrl: './multi-events.component.html',
  styleUrls: ['./multi-events.component.css']
})
export class MultiEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getData(value:string){

    console.log(value);
   

  }
  getEventAndData(event :any,data : string){

    console.log('EVENT: ',event ,'Data: ',data);

  }
}
