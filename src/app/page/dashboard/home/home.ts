import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Mock data for UI demonstration
  stats = [
    { title: 'Total Orders', value: '1,240', change: '+12%', icon: 'cart', color: 'blue' },
    { title: 'Total Customers', value: '856', change: '+5.4%', icon: 'users', color: 'green' },
    { title: 'Total Items', value: '432', change: '-1.2%', icon: 'box', color: 'purple' },
    { title: 'Revenue', value: 'LKR 45,200', change: '+8%', icon: 'cash', color: 'yellow' }
  ];

  recentOrders = [
    { id: '#ORD-001', customer: 'Jane Doe', date: '2023-10-01', amount: 'LKR 120.50', status: 'Completed' },
    { id: '#ORD-002', customer: 'John Smith', date: '2023-10-02', amount: 'LKR 75.00', status: 'Pending' },
    { id: '#ORD-003', customer: 'Alice Johnson', date: '2023-10-03', amount: 'LKR 210.25', status: 'Processing' },
    { id: '#ORD-004', customer: 'Robert Brown', date: '2023-10-03', amount: 'LKR 54.00', status: 'Completed' },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
