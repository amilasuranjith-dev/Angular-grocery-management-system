import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-all-items',
  imports: [CommonModule],
  templateUrl: './view-all-items.html',
  styleUrl: './view-all-items.css',
})
export class ViewAllItems {
  @Input() limit: number | null = null;

  items = [
    { code: 'ITM-001', desc: 'Basmati Rice', pack: '5kg', price: 1250.00, qty: 45 },
    { code: 'ITM-002', desc: 'Fresh Milk', pack: '1L', price: 450.00, qty: 8 }, // Low Stock
    { code: 'ITM-003', desc: 'Ceylon Tea', pack: '250g', price: 850.00, qty: 102 },
    { code: 'ITM-004', desc: 'Table Salt', pack: '1kg', price: 120.00, qty: 0 },   // Out of Stock
  ];

  get displayedItems() {
    return this.limit ? this.items.slice(0, this.limit) : this.items;
  }
}
