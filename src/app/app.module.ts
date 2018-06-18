import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";

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

import { RequestProvider } from '../providers/request/request';
import { LoginPageModule } from '../pages/login/login.module';
import { UserProvider } from '../providers/user/user';
import { RespondidasPageModule } from '../pages/respondidas/respondidas.module';
import { RespondidasPage } from '../pages/respondidas/respondidas';


@NgModule({
  declarations: [
    LoginPage,
    MyApp,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    InboxPageModule,
    RespondidasPageModule,
    SobrePageModule,
    RegisterPageModule,
    NovaRequisicaoPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RespondidasPage,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RequestProvider,
    UserProvider
  ]
})
export class AppModule { }
