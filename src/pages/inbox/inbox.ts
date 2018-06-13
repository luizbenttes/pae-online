import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  requests : Observable<any>;

  constructor(public navCtrl: NavController,
    private provider: RequestProvider,
    private toast: ToastController) {

      this.requests = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  removeRequest(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Requisição removida com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a requisisção.', duration: 3000 }).present();
        });
    }
  }
}
