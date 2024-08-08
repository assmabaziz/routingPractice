import { Component } from '@angular/core';
import { RecommandProductsComponent } from "../recommand-products/recommand-products.component";
import { IProduct } from '../iproduct';
import { BoxProductComponent } from '../box-product/box-product.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RecommandProductsComponent, BoxProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: IProduct[] = [
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
    },
    {
      name: 'Seafood Paella',
      price: 19.99,
      onSale: true,
      category: 'Mixed Seafood',
      imgSrc: './assets/images/seafood-5.jpg',
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
      name: 'Crab Cakes',
      price: 13.99,
      onSale: false,
      category: 'Shellfish',
      imgSrc: './assets/images/seafood-6.jpg',
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
      name: 'Grilled Shrimp',
      price: 14.99,
      onSale: true,
      category: 'Shellfish',
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
      name: 'Baked Cod',
      price: 11.99,
      onSale: false,
      category: 'Fish',
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
      name: 'Pan-Seared Scallops',
      price: 17.99,
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
      name: 'Tuna Tartare',
      price: 16.99,
      onSale: false,
      category: 'Fish',
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
    },
    {
      name: 'Seafood Chowder',
      price: 13.49,
      onSale: true,
      category: 'Mixed Seafood',
      imgSrc: './assets/images/seafood-5.jpg',
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
      name: 'Fish Tacos',
      price: 12.49,
      onSale: false,
      category: 'Fish',
      imgSrc: './assets/images/seafood-6.jpg',
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
  ]
}
