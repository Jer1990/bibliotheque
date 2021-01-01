import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm:FormGroup;
  errorMessage: string;

  constructor(private formbuilder:FormBuilder, public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signInForm=this.formbuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    console.log("here")
    const email= this.signInForm.get("email").value;
    console.log(email)
    const password= this.signInForm.get("password").value;
    this.authService.signInUser(email,password)
    .then(()=>{
      this.router.navigate(["/books"]);
    },
    (error)=>{
      this.errorMessage=error;
    })

  }

}
