import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PlayerprofilePage } from '../pages/playerprofile/playerprofile';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { OrientationPage } from '../pages/orientation/orientation';
import { VelocityPage } from '../pages/velocity/velocity';
import { AcclerationPage } from '../pages/accleration/accleration';
import { ForcePage } from '../pages/force/force';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrientationPage,
    PlayerprofilePage,
    VelocityPage,
    AcclerationPage,
    ForcePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrientationPage,
    PlayerprofilePage,
    VelocityPage,
    AcclerationPage,
    ForcePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
