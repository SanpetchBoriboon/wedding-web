import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Carousel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
