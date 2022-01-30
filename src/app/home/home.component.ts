import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { spaces } from '../JSONdata/spaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spaces: { image: string; name: string; link: string; }[];

  constructor(private as: AuthService, private router: Router) { }

  user: any;
  ngOnInit(): void {
    this.spaces = spaces;
    this.as.getUserState().subscribe(user => {if(user) this.user = user; else this.router.navigate(['/signin'])})
  }

  logout(){
    this.as.logout();
    this.router.navigate(['/signin'])
  }

}
