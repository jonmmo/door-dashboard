import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bike-view',
  templateUrl: './bike-view.component.html',
  styleUrls: ['./bike-view.component.scss']
})
export class BikeViewComponent implements OnInit {
  public bikeStatuses: any = {};
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.fetchData();
    this.ds.getBikeData().subscribe((bikeData: any) => {
      this.bikeStatuses = bikeData;
      console.log(this.bikeStatuses);
    })
  }

}
