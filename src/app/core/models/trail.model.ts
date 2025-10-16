import { Place } from "./places.model";

export interface Trail {
  id: number;
  placeId: number;
  place: Place; 
  name: string;
  distanceKm: number;
  estimatedTimeMinutes: number;
  difficulty: string;
  path: string; 
  isLoop: boolean; 
}
