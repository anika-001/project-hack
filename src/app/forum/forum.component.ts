import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }

  thread: any = "";
  comments: any;
  allthreads: any = [];
  user: any;
  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;

    })
    this.getthreads();
    this.as.getUserState().subscribe(user => {
      if(user == null) {this.user = null}
      else{
        this.user = user;
        this.as.getprofile(user.uid).subscribe((res:any) => {
          this.user["name"] = res.payload.data().name;
        })
        
      }
      
    })
  }

  threadform = new FormGroup({newth: new FormControl()})
  replyform = new FormGroup({replyin: new FormControl()})

  getthreads(){
    this.db.collection("Threads").snapshotChanges().subscribe(res => {
      this.allthreads = res;
    })
  }

  showthread(thread: any){
    this.thread = thread; 
    this.getthread();
  }
  addthread(){
    if(this.user == null){
      this.router.navigate(['/signin']);
    }
    else{
      this.db.collection("Threads").add({"madeby": this.user.name, "uid": this.user.uid, "topic": this.threadform.get("newth").value}).then(res => {
        this.threadform.get("newth").setValue("");
      });
    }
  }

  addthreadAnon(){
    if(this.user == null){
      this.router.navigate(['/signin']);
    }
    else{
      this.db.collection("Threads").add({"madeby": "Anonymous", "uid": this.user.uid, "topic": this.threadform.get("newth").value}).then(res => {
        this.threadform.get("newth").setValue("");
      });
    }
  }

  getthread(){
      this.db.collection("Threads").doc(this.thread.payload.doc.id).collection("comments").snapshotChanges().subscribe(res => {
        this.comments = res;
    })
  }
  reply(){
    if(this.user == null){
      this.router.navigate(['/signin']);
    }
    else{
      this.db.collection("Threads").doc(this.thread.payload.doc.id).collection("comments").add({"uid": this.user.uid, "comment": this.replyform.get("replyin").value, "name": this.user.name}).then(res => {
        this.replyform.get("replyin").setValue("");
      });
    }
  }

  replyAnon(){
    if(this.user == null){
      this.router.navigate(['/signin']);
    }
    else{
      this.db.collection("Threads").doc(this.thread.payload.doc.id).collection("comments").add({"uid": this.user.uid, "comment": this.replyform.get("replyin").value, "name": "Anonymous"}).then(res => {
        this.replyform.get("replyin").setValue("");
      });
    }
  }

}