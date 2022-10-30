import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { BikeViewComponent } from './components/bike-view/bike-view.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BikeViewComponent,
    WeatherViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
