import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerprofilePage } from '../pages/playerprofile/playerprofile';
import { HomePage } from '../pages/home/home';
import { OrientationPage } from '../pages/orientation/orientation';
import { VelocityPage } from '../pages/velocity/velocity';
import { AcclerationPage } from '../pages/accleration/accleration';
import { ForcePage } from '../pages/force/force';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Connect to Server', component: HomePage },
      { title: 'Player Profile', component: PlayerprofilePage },
      { title: 'Accleration', component: AcclerationPage },
      { title: 'Velocity', component: VelocityPage },
      { title: 'Orientation', component: OrientationPage },
      { title: 'Force', component: ForcePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
