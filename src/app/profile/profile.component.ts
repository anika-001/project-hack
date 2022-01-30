import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ExternalLibraryService } from '../utils';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
//declare let Razorpay: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore, private zone: NgZone,private cd: ChangeDetectorRef,  private razorpayService: ExternalLibraryService) { }
  response: any;
  
  razorpayResponse: any;
  showModal = false;
    items: any;
  total: number = 0;
  subtotal: number = 100;
  shipping: number = 100;
  ngOnInit(): void {

    this.as.getUserState().subscribe(user => {
      if(user == null) this.router.navigate(['/signin']);
    });
  }
}
      /*this.as.getprofile(user.uid).subscribe((profile:any)=>{
        this.RAZORPAY_OPTIONS.prefill.email = user.email;
          this.RAZORPAY_OPTIONS.prefill.contact = profile.payload.data().phone;
          this.RAZORPAY_OPTIONS.prefill.name = profile.payload.data().name;
      })*/
//    })
  //   this.razorpayService
  //     .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
  //     .subscribe();

  // }
  // RAZORPAY_OPTIONS = {
  //   "key": "rzp_test_xDXryZLXlg40LR",
  //   "amount": "1000",
  //   "name": "Fundle",
  //   "order_id": "",
  //   "description": "",
  //   "image": "",
  //   "prefill": {
  //     "name": "Test Name",
  //     "email": "Test email",
  //     "contact": "Test number",
  //     "method": ""
  //   },
  //   "handler": {},
  //   "modal": {},
  //   "theme": {
  //     "color": "#3c8d93"
  //   }
  // };

  // public proceed() {
  //   this.RAZORPAY_OPTIONS.amount = ((this.total + 100)*100) + '';
  //   this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

  //   let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
  //   razorpay.open();
  // }

  // public razorPaySuccessHandler(response: any) {
  //   console.log(response);
  //   this.razorpayResponse = `Successful Transaction`;
  //   console.log(this.razorpayResponse);
  //   this.router.navigate(['/home']);

  //   this.zone.run(() => {
  //     this.router.navigateByUrl("/orders");
  //   });

  // }




    