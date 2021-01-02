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
            firebase.database().ref("/books/" + id).once('value')
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
        if(book.photo){
            const storageRef=firebase.storage().refFromURL(book.photo);
            storageRef.delete().then(()=>{
                console.log('photo supprimer');
            }).catch((error)=>{
                console.log(error)
            })
        }
        const bookIndex= this.books.findIndex((bookFound)=>{
            if(bookFound === book){
                return true;
            }
        });
        this.books.splice(bookIndex,1);
        this.saveBooks();
        this.emitBooks()
        
    }

    uploadFile(file:File){
        return new Promise((resolve,reject)=>{
            const uniqueFileName= Date.now().toString();
            const upload = firebase.storage().ref().child('images/'+ uniqueFileName + file.name).put(file);
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
                console.log('chargement...')
            },(error)=>{
                console.log('erreur de chargement' + error);
                //reject();
            },()=>{
                upload.snapshot.ref.getDownloadURL().then(
                  (downloadUrl) => {
                    console.log('Upload successful! ('+downloadUrl+')');
                    resolve(downloadUrl);
                  }
                );
              })
        })
    }

}
