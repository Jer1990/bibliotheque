import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm:FormGroup

  constructor(private formBuilder:FormBuilder, private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      isRead:["", Validators.required]
    });
  }

  onSaveBook(){
    const title= this.bookForm.get('title').value;
    const author= this.bookForm.get('author').value;
    const isRead= this.bookForm.get('isRead').value;
    const newBook = new Book(title,author,isRead);
    this.bookService.createNewBook(newBook);
    this.router.navigate(['/books'])
  }


}
