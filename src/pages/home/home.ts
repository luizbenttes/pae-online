import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Storage } from "@ionic/storage";
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
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

  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userProvider: UserProvider) {
      this.email = this.userProvider.email;
  }

  ionViewDidLoad() {
    console.log("In HomePage");
  }

  goToNovaRequisicao(){
    this.navCtrl.push('NovaRequisicaoPage');
  }

  goToRespondidas(){
    this.navCtrl.push('RespondidasPage');
  }
  
  goToInbox(){
    this.navCtrl.push('InboxPage');
  }

  goToSobre(){
    this.navCtrl.push('SobrePage');
  }

  logout(){
    //this.afAuth.auth.signOut();
    this.userProvider.clean();
    this.navCtrl.setRoot(LoginPage);
  }
}

