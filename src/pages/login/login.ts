import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {} as User;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';


  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private userProvider: UserProvider) {

  }

  ionViewDidLoad() {
    console.log('in LoginPage');
  }

  async login(user: User) {
    user.email = user.email.toLowerCase()
    this.afAuth.auth.signInWithEmailAndPassword(user.email.toLowerCase(), user.password)
      .then(() => {
        // console.log("LOGIN FOI FEITO");
        this.userProvider.setUserEmail(user.email);
        this.userProvider.email = user.email;
        //user.email = this.userProvider.getUserEmail();
        if (user.email == this.userProvider.email){
          this.navCtrl.setRoot('HomePage');
        }
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }


  register() {
    this.navCtrl.push('RegisterPage');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}