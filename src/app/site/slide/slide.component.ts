import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  myimage:string = "assets/images/1.jpg";
  a:string = "assets/images/2.jpg";
  b:string = "assets/images/3.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}

