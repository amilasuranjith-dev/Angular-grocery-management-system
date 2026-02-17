import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-all-customers',
  imports: [CommonModule],
  templateUrl: './view-all-customers.html',
  styleUrl: './view-all-customers.css',
})
export class ViewAllCustomers {
  @Input() showActions: boolean = false;
  @Input() limit: number | null = null;

  customers = [
    { id: 'CUS-001', name: 'Arjun Perera', mobile: '0771234567', email: 'arjun@example.com', address: 'Colombo 03' },
    { id: 'CUS-002', name: 'Sarah Jenkins', mobile: '0719876543', email: 'sarah.j@example.com', address: 'Kandy' },
    { id: 'CUS-003', name: 'Mohamed Fazil', mobile: '0755554433', email: 'fazil88@example.com', address: 'Galle' },
  ];

  get displayedCustomers() {
    return this.limit ? this.customers.slice(0, this.limit) : this.customers;
  }
}
