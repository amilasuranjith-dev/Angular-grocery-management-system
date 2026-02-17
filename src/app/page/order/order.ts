import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddOrder } from './add-order/add-order';
import { ViewAllOrder } from './view-all-order/view-all-order';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [CommonModule, AddOrder, ViewAllOrder, RouterOutlet],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  activeTab: 'manage' | 'all' = 'manage';

  stats = [
    { label: 'Total Orders', value: '1,240', icon: 'cart', color: 'blue' },
    { label: 'Today Orders', value: '12', icon: 'calendar', color: 'green' },
    { label: 'Total Revenue', value: 'LKR 45,200', icon: 'cash', color: 'purple' }
  ];
}
