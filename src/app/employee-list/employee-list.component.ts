import { Component, OnInit } from '@angular/core';
import { EmployeeTableHeaderData } from './employee-table-header-data';
import { EmployeeService } from './../services/employee.service';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  columnGap = 0;
  columnHeaderData = [];
  employeeData = [];
  searchString = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.columnGap = EmployeeTableHeaderData.columnGap;
    this.columnHeaderData = EmployeeTableHeaderData.columnHeaderData;
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees(this.searchString).subscribe(response => {
      this.employeeData = this.checkEmployeeResponse(response);
    }, error => {
      // handle error
    });
  }

  checkEmployeeResponse(employeeData) {
    employeeData.forEach(data => {
      data.id = this.checkField(_.get(data, '_id', ''));
      data.name = this.checkField(_.get(data, 'name', ''));
      data.phone = this.checkField(_.get(data, 'phone', ''));
      data.city = this.checkField(_.get(data, 'address.city', ''));
      data.address_line1 = this.checkField(_.get(data, 'address.address_line1', ''));
      data.address_line2 = this.checkField(_.get(data, 'address.address_line2', ''));
      data.postal_code = this.checkField(_.get(data, 'address.postal_code', ''));
    });
    return employeeData;
  }

  checkField(value) {
    return value || 'NA';
  }

  onSearch(event) {
    this.searchString = event;
    this.getEmployees();
  }

  addEmployee() {
    this.router.navigate(['./add'], { relativeTo: this.activatedRoute });
  }

  editEmployee(employee) {
    this.router.navigate(['./edit', employee._id], { relativeTo: this.activatedRoute });
  }
}
