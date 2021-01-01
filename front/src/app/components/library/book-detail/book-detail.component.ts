import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book:Book;

  constructor( private route:ActivatedRoute, private bookService:BookService, private router:Router) { }

  ngOnInit(): void {

    this.book= new Book("","",false)
    const id=this.route.snapshot.params['id'];

    this.bookService.getBook(+id)
    .then((book:Book)=>{
      this.book=book;
    })
    
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
