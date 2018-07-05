import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { firebaseConfig } from '../config';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
 
    
  ]
})
export class AppModule {}
