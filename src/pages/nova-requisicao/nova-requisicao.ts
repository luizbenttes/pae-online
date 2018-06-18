import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from "@ionic/storage";
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-nova-requisicao',
  templateUrl: 'nova-requisicao.html',
})


export class NovaRequisicaoPage {
  form: FormGroup;
  request: any;
  email : string;

constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder, 
    private provider: RequestProvider,
    private toast: ToastController,
    private userProvider: UserProvider)
    {
    this.request = {};
    this.email = this.userProvider.email;
    this.createForm();
  }


  ionViewDidLoad() {
    console.log('in NovaRequisicaoPage');
  }


  createForm() {
    this.form = this.formBuilder.group({
      key: [this.request.key],
      emailAluno: [this.request.emailAluno],
      emailCoor: [this.request.emailCoor],
      data: [this.request.data],
      requisicao : [this.request.requisicao],
      id : [this.email + "Sem resposta"],
      resposta: ["Sem Resposta"]
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Requisição Enviada.', duration: 3000 }).present();
          this.navCtrl.setRoot("HomePage");
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao enviar requisição.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
