import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  check: boolean = false;
  srcImg: string = '';
  open(mainImg: string) {
    this.check = true;
    this.srcImg = './assets/images/' + mainImg;
  }
  close() {
    this.check = false;
  }
  stopPropagation(event: any): void {
    event.stopPropagation();
  }
}
