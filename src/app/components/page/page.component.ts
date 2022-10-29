import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
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
