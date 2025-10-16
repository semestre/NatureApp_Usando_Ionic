import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { PlacesComponent } from './pages/places.component/places.component';
import { TrailsComponent } from './pages/trails.component/trails.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, PlacesComponent, TrailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-Nature_api');
}
