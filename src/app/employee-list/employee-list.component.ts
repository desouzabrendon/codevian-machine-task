import { Component, OnInit } from '@angular/core';
import { EmployeeTableHeaderData } from './employee-table-header-data';

const EMPLOYEE_DATA = [
  {
    id: 1,
    name: 'Jhon',
    phone: '9999999999',
    address: {
      city: 'Pune',
      address_line1: 'ABC road',
      address_line2: 'XYZ building',
      postal_code: '12455'
    }
  },
  {
    id: 2,
    name: 'Jacob',
    phone: 'AZ99A99PQ9',
    address: {
      city: 'Pune',
      address_line1: 'PQR road',
      address_line2: 'ABC building',
      postal_code: '13455'
    }
  },
  {
    id: 3,
    name: 'Ari',
    phone: '145458522',
    address: {
      city: 'Mumbai',
      address_line1: 'ABC road',
      address_line2: 'XYZ building',
      postal_code: '12455'
    }
  }
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  columnGap = 0;
  columnHeaderData = [];
  employeeData = [];

  constructor() { }

  ngOnInit() {
    this.columnGap = EmployeeTableHeaderData.columnGap;
    this.columnHeaderData = EmployeeTableHeaderData.columnHeaderData;
    this.employeeData = EMPLOYEE_DATA;
  }
}
