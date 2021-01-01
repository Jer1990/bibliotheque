import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthService} from '../app/services/auth.service';
import {BookService} from '../app/services/book.service';
import {GuardService} from '../app/services/guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { BookListComponent } from './components/library/book-list/book-list.component';
import { BookDetailComponent } from './components/library/book-detail/book-detail.component';
import { BookFormComponent } from './components/library/book-form/book-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    BookService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
