import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserProvider {
  email: string;
  constructor(private storage: Storage) {
    console.log('in UserProvider');
  }

  public returnUserEmail(){
    this.storage.get('email').then((val) => {
      this.email = val;
      console.log("email no storage:",this.email);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  }

  public getUserEmail(){
    console.log(this.email);
    return this.email;
  }
  
  public setUserEmail(email: string){
    console.log("Foi setado novo email", email);
    this.storage.set('email', email);
    this.email = email;
    //this.returnUserEmail();
  }

  public clean(){
    this.storage.clear();
  }
}

export class User{
  email: string;
}
