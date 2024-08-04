import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'card',
    component: CardComponent,
    children: [
      { path: '', redirectTo: 'cardOne', pathMatch: 'full' },
      { path: 'cardOne', component: CardOneComponent },
      { path: 'cardTwo', component: CardTwoComponent },
      { path: 'cardThree', component: CardThreeComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
