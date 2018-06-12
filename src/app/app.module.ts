import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { RegisterPageModule } from '../pages/register/register.module';
import { RegisterPage } from '../pages/register/register';
import { HomePageModule } from '../pages/home/home.module';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { NovaRequisicaoPage } from '../pages/nova-requisicao/nova-requisicao';
import { InboxPage } from '../pages/inbox/inbox';
import { InboxPageModule } from '../pages/inbox/inbox.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { NovaRequisicaoPageModule } from '../pages/nova-requisicao/nova-requisicao.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    InboxPageModule,
    SobrePageModule,
    NovaRequisicaoPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SobrePage,
    NovaRequisicaoPage,
    InboxPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
