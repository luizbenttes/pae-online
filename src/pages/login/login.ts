import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { Storage } from "@ionic/storage";
import { Network } from '@ionic-native/network';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {} as User;
  connection: boolean;

  constructor(
    private afAuth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private network: Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.navCtrl.setRoot('HomePage');
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  verifyNetwork(user: User){
    this.network.onConnect().subscribe(() => {
      this.connection = true;
    });

    this.network.onDisconnect().subscribe(() => {
      this.connection = false;
    });

    if (!this.connection){
      this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Dispositivo desconectdado. Por favor, conectar-se a uma rede!' })
      .present();
    } else {
      this.login(user);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }


}