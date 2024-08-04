import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from "./card/card.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, HomeComponent, CardComponent, ContactComponent, NotFoundComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingPractice';
}
