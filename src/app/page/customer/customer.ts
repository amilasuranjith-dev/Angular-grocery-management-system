import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewAllCustomers } from "./view-all-customers/view-all-customers";
import { AddCustomer } from "./add-customer/add-customer";


@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, CommonModule, ViewAllCustomers, AddCustomer],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  activeTab: 'manage' | 'all' = 'manage';

  stats = [
    { label: 'Total Customers', value: '1,284', icon: 'users', color: 'blue' },
    { label: 'Recently Added', value: '24', icon: 'plus', color: 'green' },
    { label: 'Active Today', value: '156', icon: 'zap', color: 'purple' }
  ];
}
