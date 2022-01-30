import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tcode : string;
  

  constructor(private router: Router) { }
  submit() {
    console.log("the code :" + this.tcode);
    let navigationExtras:NavigationExtras={
      queryParams:{
        "search":this.tcode
      }
    };
    this.router.navigate(["study"],navigationExtras);
}
  ngOnInit(): void {
  }

}
