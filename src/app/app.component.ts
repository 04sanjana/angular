import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './ui/cards/cards.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { CorouselComponent } from './ui/corousel/corousel.component';
import { AboutComponent } from "./pages/about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo for `styleUrl`
})
export class AppComponent {
}
       
