export interface Rental {
  id: string;
  type: 'house' | 'car';
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
  isTrending?: boolean;
  isSponsored?: boolean;
}