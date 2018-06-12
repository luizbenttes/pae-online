import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  email: string;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.salvarEmail()
  }

  ionViewDidLoad() {

  }


  salvarEmail() {
    this.storage.get('email').then((val) => {
      this.email = val;
      console.log('Usuário da Sessão: ', this.email);
    });
  }

  goToNovaRequisicao(){
    this.navCtrl.push('NovaRequisicaoPage')
  }
  
  goToInbox(){
    this.navCtrl.push('InboxPage')
  }

  goToSobre(){
    this.navCtrl.push('SobrePage')
  }


}

