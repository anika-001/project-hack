import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }

  moods = ["joyful, happy, relaxed, silly, content, great",
    "productive, active, energetic, motivated",
    "average, normal, uneventful, good",
    "sick, tired, lazy, dull, unmotivated, bored",
    "sad, lonely, numb, depressed, insecure",
    "angry, frustrated, anxious, grumpy"]
  user: any;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  usermoods: any;
  temp = [];
  stories: Array<any> = [];

  stories2: any;
  storyform = new FormGroup({
    content: new FormControl(' ')
  })

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
      this.getMoods();
      this.getstories();
    })
  }

  getMoods() {
    this.db.collection("Users").doc(this.user.uid).collection("Moods").snapshotChanges().subscribe(res => {
      this.usermoods = res;
      this.temp = []
      for (let i = 0; i < (15 - res.length); i++) this.temp.push(i);
    });
  }

  getstory(x) {
    this.stories2 = [x];
    this.stories = [];
    console.log(x.payload.doc.id)
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(x.payload.doc.id).collection("Story").snapshotChanges().subscribe(res => {
      this.stories[x.payload.doc.id] = [];
      for (let j of res) {
        var time = j.payload.doc.id.split(" ")
        var timestr = time[0] + " Hours " + time[1] + " Minutes " + time[2] + " Seconds";
        this.stories[x.payload.doc.id].push({ "time": timestr, "story": j.payload.doc.data().story });

      }
      console.log(this.stories)
  })

}

getstories(){
  this.stories = []
  this.db.collection("Users").doc(this.user.uid).collection("Stories").snapshotChanges().subscribe(res => {
    var index = -1
    console.log(res)
    this.stories2 = res;
    this.stories2.reverse();
    for (let i of res) {
      this.stories = [];
      index += 1
      var id = i.payload.doc.id
      this.stories[id] = [];
      console.log(id)
      this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(id).collection("Story").snapshotChanges().subscribe(res => {
        var ind = index;
        var id = i.payload.doc.id
        console.log(res.length)
        this.stories[id] = [];
        for (let j of res) {
          var time = j.payload.doc.id.split(" ")
          var timestr = time[0] + " Hours " + time[1] + " Minutes " + time[2] + " Seconds";
          this.stories[id].push({ "time": timestr, "story": j.payload.doc.data().story });
          console.log(this.stories);
        }
      })
    }
  })
}

getdate(obj){
  var date = obj.split(" ");
  return this.days[date[3]] + " " + date[2] + " " + this.months[date[1]] + " " + date[0];
}

addstory() {
  var date = new Date()
  this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).set({ "filler": "filler" }).then(res => {
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).collection("Story").doc(date.getHours().toString() + " " + date.getMinutes().toString() + " " + date.getSeconds().toString()).set({ "story": this.storyform.get("content").value }).then(res => {
      this.storyform.get("content").setValue("");
    });
  })
}

addmood(mood) {
  var date = new Date()
  this.db.collection("Users").doc(this.user.uid).collection("Moods").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).set({ "mood": mood });
}

}