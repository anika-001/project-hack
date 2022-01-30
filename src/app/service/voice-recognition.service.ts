import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;

  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      // console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        //console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    console.log(this.tempWords);
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
//   myimg(){
//     let html = `
//     <div class="row">
//         <h1>${this.tempWords}</h1>
// `;
//     for (let i = 0; i < this.tempWords.length; i++) {
//       const character = this.tempWords.charAt(i);
//       let src;
//       if (character.toLowerCase() != character.toUpperCase()) {
//          src = `<img src="../assets/Alphabets/${character.toLowerCase()}.png" alt="${character}">`
//       } else {
//          src = `<img src="../assetsAlphabets/default.png" alt="${character}">`
//       }
//       html += '<div class="col-md-2">' + src + '</div>';
//   }
//   html += '</div>';
//  // $('#output').append(html);
//   }
}