import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Map } from '../map/map';

@Component({
  selector: 'app-schedule',
  imports: [MatIconModule, Map],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  schedulers = [
    {
      time: '07.00 น.',
      schedule: 'พิธีสงฆ์',
    },
    {
      time: '08.29 น.',
      schedule: 'พิธีแห่ขันหมาก',
    },
    {
      time: '09.00 น.',
      schedule: 'พิธีหมั้น',
    },
    {
      time: '10.00 น.',
      schedule: 'พิธีผูกข้อไม้ข้อมือ',
    },
    {
      time: '11.00 น.',
      schedule: 'ฉลองมงคลสมรส (บุฟเฟ่ต์)',
    },
  ];
}
