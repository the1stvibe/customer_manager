import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createcustomer',
  standalone: false,
  
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent implements OnInit{
customerFormGroup!: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private customerService: CustomerService,
  private router: Router,
  private snackBar: MatSnackBar
) {}

ngOnInit(): void {
  this.createCustomerForm();
}

createCustomerForm(){
  this.customerFormGroup = this.formBuilder.group({
    name: [''],
    username: [''],
    email: [''],
    phone: [''],
    gender: ['']
  });
}

submitForm() {
  if (this.customerFormGroup.valid) {
    this.customerService.createcustomer(this.customerFormGroup.value).subscribe({
      next: () => {
        this.snackBar.open('Customer created successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/customer']);
      },
      error: () => {
        this.snackBar.open('Error creating customer', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}

}
