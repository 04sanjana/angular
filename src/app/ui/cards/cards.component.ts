import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-cards',
  standalone: true, // Include standalone if using Angular Standalone Components
  imports: [RouterModule], // Add RouterModule to imports
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'] // Correct property name is `styleUrls`
})
export class CardsComponent {
  @Input() data: any; // Ensure property is defined correctly
}
