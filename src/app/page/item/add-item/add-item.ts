import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  searchCode: string = '';
  item = { code: '', description: '', packSize: '', unitPrice: 0, qty: 0 };

  onSearch() {
    alert('Searching for Item Code: ' + this.searchCode);
  }

  onSave() { alert('Item saved successfully!'); }
  onUpdate() { alert('Item updated!'); }
  onDelete() { 
    if(confirm('Delete this item from inventory?')) alert('Item removed!'); 
  }
}
