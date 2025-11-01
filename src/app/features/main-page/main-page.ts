import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { Schedule } from '../../components/schedule/schedule';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Carousel, Schedule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
