import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    try {
      return await this.fireAuth.signInWithEmailAndPassword(email,password)
    } catch (err) {
      console.log('Error login', err);
      return null;
    }

  }

  async loginWithGoogle(email:string, password:string){
    try {
      return await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (err) {
      console.log('Error login with google', err);
      return null;
    }

  }
}
