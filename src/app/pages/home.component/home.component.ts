import { Component, OnInit } from '@angular/core';
import mapboxgl, * as mapbox from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { HomeService } from '../../core/services/home.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
   console.log('HomeComponent initialized');
   this.homeService.getAllPlaces().subscribe((response) => {
    console.log('Places received from API:', response);
   });
   console.log(`Mapboxgl version: ${environment}`);
   this.map = new mapboxgl.Map({
    accessToken: environment.MAPBOX_TOKEN,
    style: this.style,
    container: 'map',
    center: [ -102.4, 23.75 ],
    zoom: 15
   });

  }

}
