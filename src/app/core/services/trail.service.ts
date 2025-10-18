import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Trail } from '../models/trail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  constructor(private httpClient: HttpClient) { }

  // 🏞️ Get all trails
  getAllTrails(): Observable<Trail[]> {
    console.log('Fetching all trails from API...');
    return this.httpClient.get<Trail[]>(`${environment.API_URL}/trail`);
  }

}