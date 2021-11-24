import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import * as Chartjs from "chart.js";
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  public canvas: any;
  public ctx: any;
  public chartColor: any;
  data: any = [];
  graph_data:any =[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  

    this.api.getValue()
      .subscribe(res => {
        // console.log(res);
        this.data = res;
      });

      this.api.getData()
      .subscribe(res => {
        // console.log(res);
        for (var i in res) {
          this.graph_data.push(res[i].data);   
        }
        console.log(this.graph_data)
      });

      this.chartColor = "#FFFFFF";
      this.canvas = document.getElementById("CustomerSatisfaction");
      this.ctx = this.canvas.getContext("2d");
      this.CustomerSatisfaction = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            label: 'My First Dataset',
            // data:this.graph_data,
            data: [30,15,14,12,8,5,5],
            backgroundColor: [
              'rgb(0, 26, 51)',
              'rgb(51, 0, 102)',
              'rgb(179, 0, 0)',
              'rgb(230, 0, 172)',
              'rgb(255, 148, 77)',
              'rgb(255, 255, 77)',
              'rgb(148, 148, 184)'
            ],
            hoverOffset: 4
          }],
          labels: [
            'Travel',
            'Rental',
            'Hotels',
            'Wholesale',
            'Fuel',
            'Supplies',
            'Dining',
            'Others'
          ]
        
        },
  
      });

  }
}
