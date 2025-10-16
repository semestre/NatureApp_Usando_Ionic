import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PagesModule } from './pages/pages-module';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagesModule, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-Nature_api');
}
