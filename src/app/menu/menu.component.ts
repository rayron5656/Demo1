import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links:any[] = [];
  constructor() {
    this.links = [
      {title: 'yahoo', link:'https://www.yahoo.com/' },
      {title: 'google', link: 'https://www.google.com/'}
    ]
   }

  ngOnInit(): void {
  }

}
