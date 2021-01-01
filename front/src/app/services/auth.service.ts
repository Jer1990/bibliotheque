import { Injectable, resolveForwardRef } from '@angular/core';
import '@firebase/auth'
import firebase from 'firebase/app';
@Injectable()
export class AuthService {

    constructor() { }

    createNewUser(email:string,password:string){

        return new Promise((resolve:any, reject)=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                resolve();
            },
            (error)=>{
                reject(error);
            })
        })
    }
    signInUser(email:string, password:string){

        return new Promise((resolve:any, reject)=>{
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                resolve();
            },
            (error)=>{
                reject(error);
            })
        })

    }

    signOut(){
        firebase.auth().signOut();
    }

}
