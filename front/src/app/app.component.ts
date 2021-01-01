import { Component } from '@angular/core';
import firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(){
    let firebaseConfig = {
      apiKey: "AIzaSyBRXn9w0SMSNftupHHl6suBMbj6lt2NPes",
      authDomain: "library-f91bc.firebaseapp.com",
      databaseURL: "https://library-f91bc-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "library-f91bc",
      storageBucket: "library-f91bc.appspot.com",
      messagingSenderId: "158653991198",
      appId: "1:158653991198:web:20e372fd508408ca04210f",
      measurementId: "G-79EKPZ3LE2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  

  }
}
