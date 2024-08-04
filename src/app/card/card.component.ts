import { Component } from '@angular/core';
import { CardOneComponent } from "../card-one/card-one.component";
import { CardTwoComponent } from "../card-two/card-two.component";
import { CardThreeComponent } from "../card-three/card-three.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardOneComponent, CardTwoComponent, CardThreeComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
