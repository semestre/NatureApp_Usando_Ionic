import { Trail } from "./trail.model";

export interface Photo {
  id: number;
  url: string;
}



export interface Place {
  id: number;
  name: string;
  description: string;
  category: string;
  latitude: number;
  longitude: number;
  elevationMeters: number;
  accessible: boolean;
  entryFee: number;
  openingHours: string;
  createdAt: string;
  photos: Photo[];   
  amenities: { id: number; name: string }[];  
  trails?: Trail[];
}
