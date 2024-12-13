import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ICustomer } from '../../interfaces/customer';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  standalone: false
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'username', 'actions'];
  dataSource!: ICustomer[];
  originalData!: ICustomer[];
  isLoading = false;


  ngOnInit(): void {
    this.onGetCustomers();
  }

  onGetCustomers() {
    this.isLoading = true;
    this.customerService.getCustomers().subscribe({
      next: (customers) => {
        this.dataSource = customers;
        this.originalData = customers;
      },
      error: (error) => {
        this.snackBar.open('Error loading customers', 'Close', {
          duration: 3000
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.dataSource = this.originalData;
      return;
    }

    searchTerm = searchTerm.toLowerCase();
    this.dataSource = this.originalData.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm) ||
      customer.email.toLowerCase().includes(searchTerm) ||
      customer.phone.toLowerCase().includes(searchTerm)
    );
  }

  editCustomer(customer: ICustomer) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '800px',
      panelClass: 'dark-theme-dialog',
      data: customer,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updatecustomer(result).subscribe({
          next: () => {
            this.snackBar.open('Customer updated successfully', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
            this.onGetCustomers();
          },
          error: () => {
            this.snackBar.open('Error updating customer', 'Close', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
          }
        });
      }
    });
  }

  deleteCustomer(customer: ICustomer) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deletecustomer(customer).subscribe(() => {
        this.snackBar.open('Customer deleted successfully', 'Close', {
          duration: 3000
        });
        this.onGetCustomers();
      });
    }
  }
}
