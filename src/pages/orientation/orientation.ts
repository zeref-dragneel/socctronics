import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    setInterval(()=>{
      //   this.sales();
      this.sales();
      
      },2000);

   
  }

  sales(){
    this.http.get('http://127.0.0.1:8002/wapp/rest/view_last5data').map(res => res.json()).subscribe(data => {

  this.posts=data;

    });
    
  }
 
  
}
