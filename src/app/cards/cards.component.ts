//import { Component, OnInit } from '@angular/core';

import { Component,Renderer2, OnInit ,Input, Output, EventEmitter} from '@angular/core';
//import { faArrowRight, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() valueChange2 = new EventEmitter();
  
  @Input() type: 1 | 2 | 3 | 4 | 5| 6 | 7 | 8 | 9 | 10 = 10;
  @Input() id: number = 0;
  @Input() blog_title:string="";
  @Input() blog_Author:string="";
  @Input() blog_link:string="";
  @Input() blog_image:string="";

  
  constructor() { }

  ngOnInit(): void {
  }

}
