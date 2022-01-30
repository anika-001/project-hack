import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-signt',
  templateUrl: './signt.component.html',
  styleUrls: ['./signt.component.scss']
})
export class SigntComponent implements OnInit {

  text: string;
  div1:any;
  constructor(
    public service : VoiceRecognitionService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
   // console.log("hello anika",this.service.text,"hello");
    this.service.stop();
    this.myimg();
  }
  myimg(){
    this.div1=document.getElementById("output");
    this.service.text.split(' ').forEach(element => {
      let html = `
          <div class="row">
              <h1>${element}</h1>
      `;
      this.div1.insertAdjacentHTML('beforeend','');
//height="250px" style="left:0px;padding:0vh 0vw 0vh 1vw;"

    for (let i = 0; i < element.length; i++) {
      const character = element.charAt(i);
      let src;
      if (character.toLowerCase() != character.toUpperCase()) {
         src = `<img src="../../assets/Alphabets/${character.toLowerCase()}.png" height="300px"style="height:300px;padding-right:10px;" alt="${character}">`
      } else {
         src = `<img src="../../assets/Alphabets/default.png" alt="${character}">`
      }
      html += '<span class="item">' + src + '</span>';
  }
 html += '</div>';

this.div1.insertAdjacentHTML('beforeend',html);
 // $('#output').append(html);
  });
 
  
}
}
