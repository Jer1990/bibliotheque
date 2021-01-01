import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import {Book} from "../../../models/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy  {

  books:Book[];
  booksSubscription:Subscription;
  constructor(private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
    this.booksSubscription = this.bookService.bookSubject.subscribe((books:Book[])=>{
      this.books=books;
    })
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books',"new"])
  }

  onDeleteBook(book:Book){
    this.bookService.removeBook(book)
  }

  onViewBook(id:number){
    this.router.navigate(['/books',"view", id]);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

}
