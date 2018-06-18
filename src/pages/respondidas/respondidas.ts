import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-respondidas',
  templateUrl: 'respondidas.html',
})
export class RespondidasPage {
  requests : Observable<any>;
  email: any;

  constructor(public navCtrl: NavController,
    private provider: RequestProvider,
    private toast: ToastController,
    private userProvider: UserProvider) {

      this.email = this.userProvider.email;
      this.requests = this.provider.getAllMineWithAnswer(this.email);
  }

  ionViewDidLoad() {
    console.log('in RespondidasPage');
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