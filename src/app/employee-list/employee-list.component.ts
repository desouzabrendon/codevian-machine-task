import { Component, OnInit } from '@angular/core';
import { EmployeeTableHeaderData } from './employee-table-header-data';
import { EmployeeService } from './../services/employee.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  columnGap = 0;
  columnHeaderData = [];
  employeeData = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.columnGap = EmployeeTableHeaderData.columnGap;
    this.columnHeaderData = EmployeeTableHeaderData.columnHeaderData;
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
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
}
