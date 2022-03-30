import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { promises } from 'dns';

@Component({
  selector: 'app-copyright2',
  template: '<p class="copy">copyright {{name}} {{getCurrencyYear()}} </p>',
  styles:['.copy{ font-weight: bold; color:grey; }']
  
})
export class Copyright2Component implements OnInit {

  constructor() { }
  
  name:string = 'ron'

  ngOnInit(): void {
     
    
  }
  getCurrencyYear() : number {
    let year =  new Date().getFullYear();
    return year;
  }

}
