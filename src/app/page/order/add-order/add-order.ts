import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-order.html',
  styleUrl: './add-order.css',
  providers: [DatePipe]
})
export class AddOrder {
  orderId = 'ORD-001';
  orderDate: string;

  customers = [
    { id: 'C001', name: 'John Doe', mobile: '077-1234567' },
    { id: 'C002', name: 'Jane Smith', mobile: '071-9876543' },
    { id: 'C003', name: 'Alice Johnson', mobile: '075-5555555' }
  ];

  items = [
    { code: 'I001', description: 'Apple', unitPrice: 50, qty: 100 },
    { code: 'I002', description: 'Orange', unitPrice: 60, qty: 80 },
    { code: 'I003', description: 'Banana', unitPrice: 30, qty: 150 },
    { code: 'I004', description: 'Grapes', unitPrice: 120, qty: 50 }
  ];

  selectedCustomer: any = null;
  selectedItem: any = null;

  qty: number = 0;
  cart: any[] = [];

  subTotal: number = 0;
  discount: number = 0;
  finalTotal: number = 0;
  searchId: string = '';

  constructor(private datePipe: DatePipe) {
    this.orderDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  onSearch() {
    if (!this.searchId) {
      alert("Please enter an Order ID to search");
      return;
    }
    alert(`Searching for Order ID: ${this.searchId}`);
    // Implement search logic here
  }

  onUpdate() {
    alert("Update Order functionality implemented here");
  }

  onDelete() {
    if (confirm("Are you sure you want to delete this order?")) {
      alert("Order deleted successfully");
    }
  }

  updateItemDetails() {
    // Optional: Logic when item selection changes
  }

  addItem() {
    if (!this.selectedItem || this.qty <= 0) {
      alert("Please select an item and enter valid quantity!");
      return;
    }

    if(this.qty > this.selectedItem.qty){
        alert("Not enough stock!");
        return;
    }

    const total = this.selectedItem.unitPrice * this.qty;

    this.cart.push({
      code: this.selectedItem.code,
      description: this.selectedItem.description,
      unitPrice: this.selectedItem.unitPrice,
      qty: this.qty,
      total: total
    });

    this.calculateTotals();
    this.selectedItem = null;
    this.qty = 0;
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.calculateTotals();
  }

  calculateTotals() {
    this.subTotal = this.cart.reduce((acc, item) => acc + item.total, 0);
    const discountAmount = (this.subTotal * this.discount) / 100;
    this.finalTotal = this.subTotal - discountAmount;
  }

  placeOrder() {
    alert("Order Placed Successfully!");
    // Logic to save order would go here
    this.cart = [];
    this.calculateTotals();
    this.selectedCustomer = null;
    this.orderId = 'ORD-' + Math.floor(Math.random() * 1000); // Generate new ID
  }
}
