import { Component } from '@angular/core';
interface IProducts {
  name: string;
  price: number;
  onSale: boolean;
  category: string;
  imgSrc: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
}
@Component({
  selector: 'app-recommand-products',
  standalone: true,
  imports: [],
  templateUrl: './recommand-products.component.html',
  styleUrl: './recommand-products.component.css'
})
export class RecommandProductsComponent {
  productList: IProducts[] = [
    {
      name: 'Grilled Salmon',
      price: 15.99,
      onSale: true,
      category: 'Fish',
      imgSrc: './assets/images/seafood-1.jpg',
      reviews: [
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.618Z',
          reviewerName: 'Liam Garcia',
          reviewerEmail: 'liam.garcia@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Excellent product, highly recommend!',
          date: '2024-06-15T14:34:12.513Z',
          reviewerName: 'Sofia Johnson',
          reviewerEmail: 'sofia.johnson@y.dummyjson.com',
        },
        {
          rating: 3,
          comment: 'Average experience, could be better.',
          date: '2024-07-02T11:47:45.292Z',
          reviewerName: 'Michael Brown',
          reviewerEmail: 'michael.brown@z.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Not satisfied, issues with the product.',
          date: '2024-07-10T09:28:36.104Z',
          reviewerName: 'Emily Davis',
          reviewerEmail: 'emily.davis@a.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Fantastic quality and service!',
          date: '2024-07-25T17:22:10.719Z',
          reviewerName: 'James Wilson',
          reviewerEmail: 'james.wilson@b.dummyjson.com',
        },
      ],
    },
    {
      name: 'Shrimp Scampi',
      price: 12.99,
      onSale: false,
      category: 'Shellfish',
      imgSrc: './assets/images/seafood-2.jpg',
      reviews: [
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.618Z',
          reviewerName: 'Liam Garcia',
          reviewerEmail: 'liam.garcia@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Excellent product, highly recommend!',
          date: '2024-06-15T14:34:12.513Z',
          reviewerName: 'Sofia Johnson',
          reviewerEmail: 'sofia.johnson@y.dummyjson.com',
        },
        {
          rating: 3,
          comment: 'Average experience, could be better.',
          date: '2024-07-02T11:47:45.292Z',
          reviewerName: 'Michael Brown',
          reviewerEmail: 'michael.brown@z.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Not satisfied, issues with the product.',
          date: '2024-07-10T09:28:36.104Z',
          reviewerName: 'Emily Davis',
          reviewerEmail: 'emily.davis@a.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Fantastic quality and service!',
          date: '2024-07-25T17:22:10.719Z',
          reviewerName: 'James Wilson',
          reviewerEmail: 'james.wilson@b.dummyjson.com',
        },
      ],
    },
    {
      name: 'Lobster Roll',
      price: 18.99,
      onSale: true,
      category: 'Shellfish',
      imgSrc: './assets/images/seafood-3.jpg',
      reviews: [
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.618Z',
          reviewerName: 'Liam Garcia',
          reviewerEmail: 'liam.garcia@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Excellent product, highly recommend!',
          date: '2024-06-15T14:34:12.513Z',
          reviewerName: 'Sofia Johnson',
          reviewerEmail: 'sofia.johnson@y.dummyjson.com',
        },
        {
          rating: 3,
          comment: 'Average experience, could be better.',
          date: '2024-07-02T11:47:45.292Z',
          reviewerName: 'Michael Brown',
          reviewerEmail: 'michael.brown@z.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Not satisfied, issues with the product.',
          date: '2024-07-10T09:28:36.104Z',
          reviewerName: 'Emily Davis',
          reviewerEmail: 'emily.davis@a.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Fantastic quality and service!',
          date: '2024-07-25T17:22:10.719Z',
          reviewerName: 'James Wilson',
          reviewerEmail: 'james.wilson@b.dummyjson.com',
        },
      ],
    },
    {
      name: 'Fried Calamari',
      price: 10.99,
      onSale: false,
      category: 'Shellfish',
      imgSrc: './assets/images/seafood-4.jpg',
      reviews: [
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.618Z',
          reviewerName: 'Liam Garcia',
          reviewerEmail: 'liam.garcia@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Excellent product, highly recommend!',
          date: '2024-06-15T14:34:12.513Z',
          reviewerName: 'Sofia Johnson',
          reviewerEmail: 'sofia.johnson@y.dummyjson.com',
        },
        {
          rating: 3,
          comment: 'Average experience, could be better.',
          date: '2024-07-02T11:47:45.292Z',
          reviewerName: 'Michael Brown',
          reviewerEmail: 'michael.brown@z.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Not satisfied, issues with the product.',
          date: '2024-07-10T09:28:36.104Z',
          reviewerName: 'Emily Davis',
          reviewerEmail: 'emily.davis@a.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Fantastic quality and service!',
          date: '2024-07-25T17:22:10.719Z',
          reviewerName: 'James Wilson',
          reviewerEmail: 'james.wilson@b.dummyjson.com',
        },
      ],
    }
  ]
}
