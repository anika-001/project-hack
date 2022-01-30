import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth,private db: AngularFirestore) { }

  authstate(){
    return this.af.onAuthStateChanged;
  }
  getaf(){
    return this.af;
  }

  getUserState() {
    return this.af.authState;
  }

  login(user){
    return this.af.signInWithEmailAndPassword(user.email, user.password)
  }

 
  signup(user) {
    return new Promise((resolve, reject) => {
      this.af.createUserWithEmailAndPassword(user.email, user.password).then(
        usercred => {
          this.insertuserdata(user, usercred).then(res => {
            resolve("Success");
            console.log("success!");
          })
            .catch(err => {
              reject(err);
            })
        }
      ).catch(err => {
        reject(err);
      })
    })
    
  }

  logout() {
    return this.af.signOut();
  }
  insertuserdata(user, usercred) {
    return this.db.doc(`Users/${usercred.user.uid}`).set({
      email: user.email,
      name: user.name,
      //phone: user.phone,
    })
  }

  getprofile(useruid) {
    
    return this.db.collection("Users").doc(useruid).snapshotChanges();
     }
  forgot(email){
    this.af.sendPasswordResetEmail(email);
  }
}
