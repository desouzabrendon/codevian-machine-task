import { Component, OnInit } from '@angular/core';
import { EmployeeTableHeaderData } from './employee-table-header-data';
import { EmployeeService } from './../services/employee.service';

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
    employeeData.forEach(data => { });
    return employeeData;
  }
}
