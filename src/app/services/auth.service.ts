import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from 'models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth,public ngFireAuth: AngularFireAuth) { }

  login(correo :string,password:string){
    return this.authfirebase.signInWithEmailAndPassword(correo,password)
  }
  logut(){
    this.authfirebase.signOut();
  }
  registarUser(datos:UserI){
  return  this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password);

  }
  getUserAuth(){
    return this.authfirebase.currentUser;
  }
  stateUser(){
  return this.authfirebase.authState
  }
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  async getUid(){
    const UserI = await this.authfirebase.currentUser;
    if(UserI){
      return UserI.uid;
    }else
    { return null;}
  }
}