import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  totalsaleRwYesterday : any;

  constructor() { }

  ngOnInit() {

    this.totalsaleRwYesterday = new Chart('totalsaleRwYesterday', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total sale amount',
            data: [40, 30, 24.8, 18.8, 25, 24,13.5, 45, 23, 50],
            backgroundColor: [
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)',
                'rgba(17, 108, 201, 1)'
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
