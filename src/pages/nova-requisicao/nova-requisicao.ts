import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the NovaRequisicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-requisicao',
  templateUrl: 'nova-requisicao.html',
})




export class NovaRequisicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getEmail();
  }
  email : string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaRequisicaoPage');
  }
  
  getEmail() {
    this.storage.get('email').then((val) => {
      this.email = val;
    });
  }

}
