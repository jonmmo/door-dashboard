import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bikeUrl, BJGid, UVid, stHid, weatherUrl, lat, lon, alt } from '../const';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private bikeData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private weatherForecast: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private weatherParams = {
    "lat": lat,
    "lon": lon,
    "altitude": alt
  };

  constructor(private http: HttpClient) { }

  getBikeData() {
    return this.bikeData;
  }

  getWeatherForecast() {
    return this.weatherForecast;
  }

  fetchData() {
    this.http.get(bikeUrl).subscribe((bikeData: any) => {
      const statusList = bikeData.data.stations;
      let data: any = {};
      statusList.forEach((status: any) => {
        if(status.station_id == BJGid) {
          data["Bjerregaards gate"] = status.num_bikes_available;
        } else if (status.station_id == stHid) {
          data["St. Hanshaugen"] = status.num_bikes_available;
        } else if (status.station_id == UVid) {
          data["Ullevålsveien"] = status.num_bikes_available;
        }
      });
      this.bikeData.next(data);
    });

    this.http.get('/weather', {params: this.weatherParams}).
    subscribe((forecast: any) => {
      console.log(forecast)
      for (let singleForecast of forecast.properties.timeseries) {
        if (new Date(singleForecast.time) > new Date()) {
          this.weatherForecast.next(singleForecast);
          break;
        }
      }
    })
    

  }
}
