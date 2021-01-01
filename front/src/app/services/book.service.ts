import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Book} from "../models/book.model";
import firebase from 'firebase';


@Injectable()
export class BookService {

    books:Book[]=[];
    bookSubject= new Subject<Book[]>();

    constructor() { }

    emitBooks(){
        this.bookSubject.next(this.books)
    }

    saveBooks(){
        firebase.database().ref("/books").set(this.books);
    }

    getBooks(){
        firebase.database().ref("/books").on('value', (data)=>{
            this.books=data.val() ? data.val() : [];
            this.emitBooks();
        })
    }

    getBook(id:number){
        return new Promise((resolve, reject)=>{
            firebase.database().ref("/books" + id).once('value')
            .then((data)=>{
                resolve(data.val())
            },(error)=>{
                reject(error);
            })
        })
    }

    createNewBook(newBook:Book){
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks()
    }

    removeBook(book:Book){
        const bookIndex= this.books.findIndex((bookFound)=>{
            if(bookFound === book){
                return true;
            }
        });
        this.books.splice(bookIndex,1);
        this.saveBooks();
        this.emitBooks()
        
    }

}
