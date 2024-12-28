import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }




  cimages = [{
    id: 1,
    alt: '',
    src: 'https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=400'
  }, {
    id: 2,
    alt: '',
    src: 'https://images.pexels.com/photos/165939/pexels-photo-165939.jpeg'
  }, {
    id: 3,
    alt: '',
    src: 'https://images.pexels.com/photos/194455/pexels-photo-194455.jpeg?auto=compress&cs=tinysrgb&w=600'
  }

  ]
}