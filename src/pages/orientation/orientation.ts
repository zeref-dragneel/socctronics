import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the OrientationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orientation',
  templateUrl: 'orientation.html',
})
export class OrientationPage {
  posts:any;
  ipaddress:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,public storage: Storage) {
    setInterval(()=>{
      //   this.sales();
      this.sales();
      
      },2000);

   
  }

  sales(){
    this.storage.get('name').then((val) => {
      this.ipaddress = val;
      // console.log(this.ipaddress);
    });
    try{
      if(this.ipaddress!=undefined){
    this.http.get('http://'+this.ipaddress+'/wapp/rest/view_last5data').map(res => res.json()).subscribe(data => {

  this.posts=data;

    });
  }
  }
  catch{
    this.posts=null;
  }
    
  }
 
  
}
