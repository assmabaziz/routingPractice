export interface IProduct {
  name ?: string;
  price: number;
  onSale: boolean;
  category: string;
  imgSrc: string;
  reviews ?: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
}
