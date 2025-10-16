import { Component, OnInit } from '@angular/core';
import mapboxgl, * as mapbox from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { HomeService } from '../../core/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  markers : mapboxgl.Marker[] = [];
  // backtip
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
   console.log('HomeComponent initialized');
   
   console.log(`Mapboxgl version: ${environment}`);
   this.map = new mapboxgl.Map({
    accessToken: environment.MAPBOX_TOKEN,
    style: this.style,
    container: 'map',
    center: [ -102.4, 23.75 ],
    zoom: 15
   });
   this.homeService.getAllPlaces().subscribe((placeResponse) => {
    console.log('Places received from API:', placeResponse);
    placeResponse.forEach((place) => {
      const marker = new mapboxgl.Marker()
      .setLngLat([place.longitude, place.latitude])
      .addTo(this.map);
      this.markers.push(marker);
    });
   });

  }

}
