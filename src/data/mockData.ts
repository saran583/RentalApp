import { Rental } from '../types/rental';

export const mockRentals: Rental[] = [
  {
    id: '1',
    type: 'house',
    title: 'Modern Beach House',
    description: 'Beautiful beachfront property with stunning ocean views. Perfect for a relaxing getaway.',
    location: 'Miami Beach, FL',
    price: 250,
    imageUrl: 'https://picsum.photos/800/600',
    isTrending: true
  },
  {
    id: '2',
    type: 'car',
    title: 'Tesla Model S',
    description: 'Luxury electric vehicle with autopilot features and premium interior.',
    location: 'Los Angeles, CA',
    price: 150,
    imageUrl: 'https://picsum.photos/800/600',
    isSponsored: true
  },
  // Add more mock rentals as needed
];