import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css',
})
export class AddCustomer {
  searchId: string = '';
  customer = { id: '', name: '', mobile: '', email: '', address: '' };

  onSearch() {
    console.log('Searching for ID:', this.searchId);
    // Logic to fetch customer and set to this.customer
    alert('Search functionality triggered for ID: ' + this.searchId);
  }

  onSave() { alert('Customer Added Successfully!'); }
  onUpdate() { alert('Customer Updated!'); }
  onDelete() { 
    if(confirm('Are you sure you want to delete this customer?')) {
      alert('Customer Deleted!');
    }
  }
}
