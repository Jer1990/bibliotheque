import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BookDetailComponent } from './components/library/book-detail/book-detail.component';
import { BookFormComponent } from './components/library/book-form/book-form.component';
import { BookListComponent } from './components/library/book-list/book-list.component';
import { GuardService } from './services/guard.service';


const routes: Routes = [
  {path:"auth/signup",component:SignupComponent},
  {path:"auth/signin",component:SigninComponent},
  {path:"books", canActivate:[GuardService], component:BookListComponent},
  {path:"books/new", canActivate:[GuardService], component:BookFormComponent},
  {path:"books/view/:id", canActivate:[GuardService], component:BookDetailComponent},
  {path:"",redirectTo:"books", pathMatch: "full"},
  {path:"**",redirectTo:"books"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
