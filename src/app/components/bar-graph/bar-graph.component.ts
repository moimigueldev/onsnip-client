import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';
import { GenreList } from 'src/app/share/interfaces/genreList';
import { ChartOptions, ChartType, ChartDataSets, Tooltip, ChartTooltipOptions } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})



export class BarGraphComponent implements OnInit {

  colorPallet: string[] = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57', '#33FFBD', '#FF5733', '#FFBD33', '#DBFF33', '#75FF33'];

  genresSubscription: Subscription;
  genresList: GenreList[];

  //=============================================
  //                   LINE CHART
  //=============================================



  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {

          fontSize: 10,
          lineHeight: 0
        }
      }]
    },

    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          console.log('toool', data)
          return ''
        }
      },
      titleFontSize: 12
    }

    // tooltips: {
    //   callbacks: {
    //     label: (tooltipItem, data) => {

    //       console.log(tooltipItem)
    //       return data
    //       // return tooltipItem.xLabel = this.artistData[tooltipItem.index].artist


    //     }
    //   }
    // }

  };

  public barChartLabels: Label[];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.genresSubscription = this.spotifyService.genres.subscribe((list: GenreList[]) => {
      this.filterGenres(list)
    });
  }

  filterGenres(list: GenreList[]): void {
    this.genresList = list
    const genres = list.splice(0, 10)
    const genresName = genres.map(el => el.name)
    const genresTotal = genres.map(el => el.total)





    this.barChartData = [{
      data: genresTotal,
      pointBackgroundColor: this.colorPallet,
      backgroundColor: 'rgb(46,20,132)',
      pointRadius: 7,
      // borderWidth: 3,
      barPercentage: 0.4,

      fill: false
    }]
    this.barChartLabels = genresName;




  }


  ngOnDestroy(): void {
    this.genresSubscription ? this.genresSubscription.unsubscribe() : null;
  }

}
