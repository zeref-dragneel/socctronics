import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string;
  posts:any;
  ipaddress:any;
  iplength:number;
  constructor(public navCtrl: NavController,public storage: Storage,public alertCtrl: AlertController,) {
  
  }

sub(){
  this.storage.set('name', this.name);
  if(this.name!=undefined){
 this.iplength = this.name.length;
  }
  if(this.iplength < 7 || this.iplength >20 || this.name==undefined ){
    this.showAlertInvalid();
  }
  else{
  
    this.showAlertSuccess();
  }
  
 
}
showAlertSuccess() {
  const alert = this.alertCtrl.create({
    title: 'Connection Status',
    subTitle: 'Connected to Server Successfully',
    buttons: ['OK']
  });
  alert.present();
}
showAlertInvalid() {
  const alert = this.alertCtrl.create({
    title: 'Connection Status',
    subTitle: 'Invalid Ip Adrress',
    buttons: ['OK']
  });
  alert.present();
}

}

