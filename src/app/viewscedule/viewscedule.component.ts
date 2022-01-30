import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-viewscedule',
  templateUrl: './viewscedule.component.html',
  styleUrls: ['./viewscedule.component.scss']
})
export class ViewsceduleComponent implements OnInit {
  cards: any[] = [];
  constructor(private as: AuthService, private db: AngularFirestore, private router: Router, private route: ActivatedRoute) { }
  
  userID: any;
  id: string;
  scedule: any;

  ngOnInit(): void {
      this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.getscedule();
      })
      
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }
  getscedule(){
    this.db.collection("Management").doc(this.userID).collection("scedule").snapshotChanges().subscribe(res => {
      this.scedule = res;
    })
  }
}