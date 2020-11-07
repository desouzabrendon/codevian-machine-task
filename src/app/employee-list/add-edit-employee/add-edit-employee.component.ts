import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {
  employeeId = '';
  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  employeeData = {
    name: '',
    phone: '',
    address:
    {
      city: '',
      address_line1: '',
      address_line2: '',
      postal_code: ''
    }
  };

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.employeeId = this.activatedRoute.snapshot.params.employeeId || 0;
    if (this.employeeId) {
      this.getEmployeeData();
    }
  }

  getEmployeeData() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(response => {
    }, error => {
    });
  }

  submit() {
    this.employeeService.addEmployee(this.employeeData).subscribe(response => {
      this.location.back();
    }, error => {
    });
  }
}
