import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup;
  errorMessage: string;

  constructor(private formbuilder:FormBuilder, public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm=this.formbuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    console.log("here")
    const email= this.signUpForm.get("email").value;
    console.log(email)
    const password= this.signUpForm.get("password").value;
    this.authService.createNewUser(email,password)
    .then(()=>{
      this.router.navigate(["/books"]);
    },
    (error)=>{
      this.errorMessage=error;
    })

  }

}
