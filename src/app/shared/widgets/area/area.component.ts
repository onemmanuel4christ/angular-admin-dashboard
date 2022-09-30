import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions ={}
  
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Overview Report for the Month'
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      credits: {
        enabled: false,
      },
    exporting:{
        enabled: true,
    },
      series: [{
          name: 'Ocean transport',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Households',
          data: [100, 106, 119, 131, 154, 897, 1000]
  
      }, {
          name: 'Agriculture and hunting',
          data: [306, 419, 651, 998, 1097, 9761, 4913]
      }, ]
  };
HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
    new Event('resize')
    )
  },300)
  }

}
