import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';
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
  lineChart: any;
  arrayList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    setInterval(()=>{
      //   this.sales();
      this.ionViewDidLoad();
      },5000);
  }

  ionViewDidLoad(){

    this.http.get('http://127.0.0.1:8002/wapp/rest/view_last5data').map(res => res.json()).subscribe(data => {

  this.posts=data;
//   console.log(this.posts[0].sno);
  let sno =this.posts.map(person => person.data_time).reverse(); 
  let val =this.posts.map(person => person.val).reverse(); 
//   console.log(sno); 


    // });


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels:sno,
          datasets: [{
            label: "velocity",
              data:val,
              borderColor: "#05b459",
              fill: true,
              backgroundColor:"#05b45940",

          }],
  
      },
      options: {
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
