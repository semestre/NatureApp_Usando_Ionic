import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Place } from '../models/places.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private httpClient: HttpClient
  ) { }

  //RXJS
  getAllPlaces() {
    console.log('Fetching places from API');
    const result = this.httpClient.get<Place[]>(`${environment.API_URL}/place`)
    return result;
  }
}
