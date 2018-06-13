import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs/Observable';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  requests : Observable<any>;
  email: any;

  constructor(public navCtrl: NavController,
    private provider: RequestProvider,
    private toast: ToastController,
    private userProvider: UserProvider) {

      this.email = this.userProvider.getUserEmail();
      this.requests = this.provider.getAllMine(this.email);
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
