import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the VelocityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-velocity',
  templateUrl: 'velocity.html',
})
export class VelocityPage {
  @ViewChild('lineCanvas') lineCanvas;
  posts:any;
  lastpost:any;
  lineChart: any;
  arrayList:any;
  yellowcard:boolean= false;
  redcard:boolean = false;
  sno:string[];
  val:number[];
  ipaddress:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,public storage: Storage) {
    setInterval(()=>{
      //   this.sales();
      this.ionViewDidLoad();
      },5000);
      
  }
  ionViewDidLoad(){

    this.storage.get('name').then((val) => {
      this.ipaddress = val;
      // console.log(this.ipaddress);
    });
    if(this.ipaddress!=undefined){
    this.http.get('http://'+this.ipaddress+'/wapp/rest/view_last5data').map(res => res.json()).subscribe(data => {

  this.posts=data;
  try{
  this.lastpost=this.posts[0].val;
  // console.log(this.lastpost);
  }
  catch{
    this.lastpost = "";
    // console.log(this.lastpost);
  }
// console.log(this.posts.length);
//   console.log(this.posts[0].sno);
try{
  this.sno =this.posts.map(person => person.data_time).reverse(); 
  this.val =this.posts.map(person => person.val).reverse(); 
}
catch{
  this.sno = null;
  this.val =  null;
}
  try{
  if (this.val[4]>10 && this.val[4]<15){
    // console.log("yellow card");
    this.yellowcard = true;
    this.redcard = false;
  }
  else if(this.val[4]>15){
    // console.log("red card");
    this.yellowcard = false;
    this.redcard = true;
  }
  else{

      this.yellowcard = false;
      this.redcard = false;
    
  }
}
catch{
  this.yellowcard = false;
  this.redcard = false;
}
//   console.log(this.val[4]);
// console.log("yellow card " + this.yellowcard);
// console.log("red card " + this.redcard);
    


    // });
    

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels:this.sno,
          datasets: [{
            label: "velocity",
              data:this.val,
              borderColor: "#05b459",
              fill: true,
              backgroundColor:"#05b45940",

          }],
  
      },
      options: {
        animation: {
          duration : 1000,
          easing:'easeInOutQuad'

      },
        layout: {
          padding: {
              left:0,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
          scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocity'
                },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Time'
                }
              }],
          }
      }
  
  });
  
  
});
    }


}


}
