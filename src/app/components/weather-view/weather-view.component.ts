import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {
  public forecast: any = {};
  public timestamp: string = "";
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getWeatherForecast().subscribe((forecast: any) => {
      this.forecast = forecast;
      this.timestamp = format(new Date(forecast.time), "dd.MM H:mm");
    })
  }

}
