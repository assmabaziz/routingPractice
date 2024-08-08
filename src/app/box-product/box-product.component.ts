import { Component, Input } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-box-product',
  standalone: true,
  imports: [],
  templateUrl: './box-product.component.html',
  styleUrl: './box-product.component.css'
})
export class BoxProductComponent {
@Input() product !: IProduct
}
