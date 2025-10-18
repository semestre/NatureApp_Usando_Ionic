import { Component, OnInit  } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { Trail } from '../../core/models/trail.model';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrl: './trails.component.scss',
  standalone: false
})
export class TrailsComponent implements OnInit {

  trails: Trail[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllTrails().subscribe({
      next: (data) => this.trails = data,
      error: (err) => console.error('Error loading trails:', err)
    });
  }

  getDifficultyColor(level: string): string {
    switch(level.toLowerCase()) {
      case 'easy': return 'green';
      case 'moderate': return 'orange';
      case 'hard': return 'red';
      default: return 'default';
    }
  }
}
