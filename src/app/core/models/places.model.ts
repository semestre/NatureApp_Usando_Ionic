
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
  createdAt: string; // ISO date string
  trails: any[] | null; // you can replace 'any[]' with a more specific interface later
  photos: any[] | null;
  reviews: any[] | null;
  amenities: any[] | null;
  placeAmenities: any[] | null;
}
