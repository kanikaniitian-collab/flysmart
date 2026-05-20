export type ActivePage = 'home' | 'about' | 'services' | 'contact';

export interface TravelService {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  bannerUrl: string;
}

export interface PartnerAirline {
  name: string;
  logoColor: string;
  subText: string;
  hqCountry: string;
}

export interface ServiceInquiry {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  destination: string;
  date: string;
  passengers: number;
  message: string;
}

export interface FlightSearch {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  classType: 'economy' | 'business' | 'first';
  passengers: number;
}

export interface HotelSearch {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
}

export interface CarSearch {
  pickup: string;
  pickupDate: string;
  dropoffDate: string;
  carClass: 'economy' | 'suv' | 'luxury';
}

export interface SeaTaxiSearch {
  route: string;
  departTime: string;
  passengers: number;
  type: 'private' | 'scheduled';
}
