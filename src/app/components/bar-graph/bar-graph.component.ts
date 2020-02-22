import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  ngAfterViewInit() {

  }

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
          lineHeight: 0,
          fontColor: '#0D5FDF'
        }
      }],
      xAxes: [{
        display: true,

      }]
    },



    tooltips: {
      titleFontSize: 10,
      callbacks: {
        label: (tooltip, data) => ""
      }
    }

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

      console.log('ctx')
    });
    // var chart = document.getElementById('chart').getContext('2d'),
    //   gradient = chart.createLinearGradient(0, 0, 0, 450);
  }

  filterGenres(list: GenreList[]): void {
    this.genresList = list
    const genres = list.splice(0, 10)
    const genresName = genres.map(el => el.name)
    const genresTotal = genres.map(el => el.total)

    //     background: rgb(46,20,132);
    // background: linear-gradient(90deg, rgba(46,20,132,1) 43%, rgba(74,175,0,1) 95%);


    this.ctx = this.canvas.nativeElement.getContext('2d');
    var gradient = this.ctx.createLinearGradient(46, 20, 132, 200);

    // gradient.addColorStop(0, 'blue');
    // gradient.addColorStop(1, 'white');
    // gradient.addColorStop(0.9)
    gradient.addColorStop(0.4, 'rgba(46,20,132,1)')
    gradient.addColorStop(0.9, 'rgba(74,175,0,1)')


    this.barChartData = [{
      data: genresTotal,
      pointBackgroundColor: this.colorPallet,

      backgroundColor: gradient,
      pointRadius: 7,
      // borderWidth: 3,
      barPercentage: 0.6,

      fill: true
    }]
    this.barChartLabels = genresName;





  }


  ngOnDestroy(): void {
    this.genresSubscription ? this.genresSubscription.unsubscribe() : null;
  }

}
