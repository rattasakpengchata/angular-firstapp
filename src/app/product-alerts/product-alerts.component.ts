import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'; //ใช้ interface สำหรับประกาศตัวแปรภายใน(pd) ให้มีโครงสร้างเดียวกับข้อมูลที่จะรับจาก parent 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() pd!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
