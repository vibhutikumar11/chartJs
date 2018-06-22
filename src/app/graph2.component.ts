import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css']
})
export class Graph2Component implements OnInit {

  totalsaleRwToday : any;

  constructor() { }

  ngOnInit() {

    this.totalsaleRwToday = new Chart('totalsaleRwToday', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total sale amount',
            data: [24,13.5, 45, 23, 50, 40, 30, 24.8, 18.8, 25],
            backgroundColor: [
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)',
                'rgba(0, 184, 0, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
      responsive:false,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          ticks: {
            fontSize: 15,
            fontColor: "#666666",
            fontFamily: 'Roboto'
          }
        }],
        yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'SALE AMOUNT (GHC)',
                fontSize: 16,
                fontColor: "#666666",
                fontFamily: 'Roboto'
              },
              ticks: {
                  beginAtZero:true,
                  suggestedMin: 0,
                  suggestedMax: 50,
                  fontSize: 18,
                  fontColor: "#666666",
                  fontFamily: 'Roboto'
              }
        }]
      }
    }


    });

  }

}
