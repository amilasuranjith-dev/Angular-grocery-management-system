import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { ViewAllItems } from './view-all-items/view-all-items';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [RouterOutlet, CommonModule, AddItem, ViewAllItems],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  activeTab: 'manage' | 'all' = 'manage';

  stats = [
    { label: 'Total Items', value: '412', icon: 'box', color: 'blue' },
    { label: 'Low Stock', value: '12', icon: 'alert', color: 'orange' },
    { label: 'Out of Stock', value: '3', icon: 'x', color: 'red' },
    { label: 'Inventory Value', value: '$84,200', icon: 'dollar', color: 'green' }
  ];
}
