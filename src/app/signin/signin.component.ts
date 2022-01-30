import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logindataemail, logindataphoneno, regdata } from '../JSONData/signin';
import { AuthService } from '../services/auth.service';
import { WindowService } from '../services/window.service';

import firebase from 'firebase/app';
import 'firebase/auth';
import { forbiddenNameValidator } from '../Validators/forbidden-name';

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private win: WindowService) { }

  windowRef: any;

  verificationCode: string;

  user: any;

  login: boolean = true;
  error: any;

  phoneno: boolean = false;

  selectedrole: any;
  signindata: any;
  signupdata: any;
  signindataemail: any;
  signindataphoneno: any;

  providergoogle: any;
  providergithub: any;
  providertwitter: any;
  providerfacebook: any;

  config = {
    apiKey: "AIzaSyCnpk8iuTAAbIgEv8OJsOGOF-a2lWlNExg",
    authDomain: "communigesture-6bfe9.firebaseapp.com",
    projectId: "communigesture-6bfe9",
    storageBucket: "communigesture-6bfe9.appspot.com",
    messagingSenderId: "270363007732",
    appId: "1:270363007732:web:b9adc2a3183fba76775ca1"
  }

  move() {
    this.login = !this.login;
    this.error = false;
  }

  submit() {
    if(this.isdisabled()){this.error = "Please fill all fields properly."; return}
    if (this.login) {
      if(!this.phoneno){
        this.as.login(this.formlogin.value).then(res => {
          // this.router.navigate(['/home']);
        }).catch(err => {
          this.error = err.message;
        })
      }

      else{
        this.sendLoginCode();
      }
      
    }
    else {
      this.as.signup(this.formreg.value).then(res => {
        firebase.auth().currentUser.sendEmailVerification()
          .then(() => {
            this.login = true;
          }).catch(err => {
            this.error = err.message;
          })
        
      }).catch(err => {
        this.error = err.message;
      })
    }
  }

  isdisabled(){
    if(this.login){
      if(this.phoneno){
        if (this.formlogin.get('phone')!.invalid) {
          return true;
          
        }
      }
      if (this.formlogin.get('email')!.invalid) {
        return true;
      }
    }

    else{
      if(this.formreg.invalid){
        return true;
      }
    }
  }

  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    password: new FormControl('', [Validators.required,]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[2-9]{2}\\d{8}')])
  })

  formreg = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]),
    confirmpassword: new FormControl('', [Validators.required]),

  })

  ngOnInit(): void {
    this.as.authstate()((user) => {
      if(user){
        this.router.navigate(['/home']);
      }
      else{
        this.login = true;
      }
    })
   //firebase.initializeApp(this.config);
    this.formreg.setValidators(this.checkPasswords);
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    this.signupdata = regdata;

    this.signindataphoneno = logindataphoneno;
    this.signindataemail = logindataemail;
    this.signindata = this.signindataemail;

    this.providergoogle = new firebase.auth.GoogleAuthProvider();
    this.providergithub = new firebase.auth.GithubAuthProvider();
    this.providertwitter = new firebase.auth.TwitterAuthProvider();
    this.providerfacebook = new firebase.auth.FacebookAuthProvider();

    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = this.as.getaf().signInWithPhoneNumber

    // this.windowRef.recaptchaVerifier.render()
  }

  phone() {
    this.phoneno = !this.phoneno;
    if (this.phoneno == true) {
      this.signindata = this.signindataphoneno;
      // document.querySelector("#recaptcha-container").style.display = "none";
    }

    else {
      // this.windowRef.recaptchaVerifier.clear();
      this.signindata = this.signindataemail;
    }
  }

  signupwithgoogle() {
    this.signupwith3party(this.providergoogle);
  }

  signupwithgithub() {
    this.signupwith3party(this.providergithub);
  }

  signupwithtwitter() {
    this.signupwith3party(this.providertwitter);
  }

  signupwithfacebook() {
    this.signupwith3party(this.providerfacebook);
  }

  signupwith3party(provider) {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var user = result.user;
        console.log(result, user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  formlog(name: string) { return this.formlogin.get(name)!; }
  formregget(name: string) { return this.formreg.get(name)!; }

  get emaillog() { return this.formlogin.get('email')!; }
  get phonelog() { return this.formlogin.get('phone')!; }
  get emailreg() { return this.formreg.get('email')!; }
  get password() { return this.formreg.get('password')!; }
  get confirmp() { return this.formreg.get('confirmpassword')!; }


  // getname()
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
    console.log("hii");
    firebase.auth().signInWithPhoneNumber("+91" + this.formlogin.get("phone").value, appVerifier)
      .then(result => {

        this.windowRef.confirmationResult = result;

      })
      .catch(error => console.log(error));

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {

        this.user = result.user;

      })
      .catch(error => console.log(error, "Incorrect code entered?"));
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  forgot() {
    if (this.formlogin.get('email')!.invalid) {
      return;
    }
    this.as.forgot(this.formlogin.get('email').value);
  }

}
