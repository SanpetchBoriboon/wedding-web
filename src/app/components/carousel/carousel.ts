import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import weddingGallery from '../../shared/wedding-gallery-list.json';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private readonly basePath = 'assets/images/wedding-gallery/';
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  hashTag = '#เบญจเมแต่งแล้วครับ';

  imagesLocal: string[] = [];

  loading = true;
  error: string | null = null;
  transitionEnabled = true;

  cardWidth = 0;
  gap = 16;
  imageHeight = 400;

  itemsPerView = 3;

  async ngOnInit() {
    await this.loadAllImages();
  }

  ngAfterViewInit() {
    this.calculateDimensions(); // ให้คำนวน layout ตอน DOM พร้อมจริง
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateDimensions();
  }

  calculateDimensions() {
    const screenWidth = window.innerWidth;

    // Mobile ≤460px
    if (screenWidth <= 460) {
      this.itemsPerView = 1;
      this.gap = 0;
      this.cardWidth = screenWidth;
      return;
    }

    if (screenWidth < 1024) this.itemsPerView = 2;
    else this.itemsPerView = 3;

    const maxContainerWidth = 1200;
    const containerPadding = 32;
    const availableWidth = Math.min(screenWidth * 0.9, maxContainerWidth) - containerPadding;
    const totalGaps = (this.itemsPerView - 1) * this.gap;
    this.cardWidth = (availableWidth - totalGaps) / this.itemsPerView;
  }

  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollContainer.nativeElement.classList.add('dragging');
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onDragEnd() {
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('dragging');
  }

  async loadAllImages() {
    try {
      this.loading = true;
      this.error = null;

      this.imagesLocal = weddingGallery.map((file) => {
        return this.basePath + file;
      });
    } catch (err) {
      console.error('Error loading images:', err);
      this.error = 'เกิดข้อผิดพลาดในการโหลดรูปภาพ กรุณาลองใหม่อีกครั้ง';
      this.loading = false;
    }
  }
}
