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
    console.log('Hello UserProvider Provider');
    this.returnUserEmail();
  }

  public returnUserEmail(){
    this.storage.get('email').then((val) => {
      this.email = val;
      console.log(this.email);
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
    this.storage.set('email', email);
  }
}

export class User{
  email: string;
}
