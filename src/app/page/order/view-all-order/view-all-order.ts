import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-all-order',
  imports: [CommonModule],
  templateUrl: './view-all-order.html',
  styleUrl: './view-all-order.css',
})
export class ViewAllOrder {
  @Input() showActions: boolean = false;
  @Input() limit: number | null = null;

  orders = [
    { id: 'ORD-001', customerName: 'John Doe', date: '2024-02-15', totalAmount: 1250.50, status: 'Completed', items: 3 },
    { id: 'ORD-002', customerName: 'Jane Smith', date: '2024-02-14', totalAmount: 890.75, status: 'Pending', items: 2 },
    { id: 'ORD-003', customerName: 'Alice Johnson', date: '2024-02-13', totalAmount: 2100.00, status: 'Completed', items: 5 },
    { id: 'ORD-004', customerName: 'Bob Wilson', date: '2024-02-12', totalAmount: 650.25, status: 'Cancelled', items: 1 },
    { id: 'ORD-005', customerName: 'Carol Davis', date: '2024-02-11', totalAmount: 3450.00, status: 'Completed', items: 4 },
  ];

  get displayedOrders() {
    return this.limit ? this.orders.slice(0, this.limit) : this.orders;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  onUpdate(order: any) {
    alert(`Update Order: ${order.id}\nCustomer: ${order.customerName}\nAmount: $${order.totalAmount}`);
    // Implement update logic here
  }

  onDelete(orderId: string) {
    if (confirm(`Are you sure you want to delete order ${orderId}?`)) {
      const index = this.orders.findIndex(o => o.id === orderId);
      if (index > -1) {
        this.orders.splice(index, 1);
        alert(`Order ${orderId} deleted successfully`);
      }
    }
  }
}
