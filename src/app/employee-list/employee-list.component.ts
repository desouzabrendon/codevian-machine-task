import { Component, OnInit } from '@angular/core';
import { EmployeeTableHeaderData } from './employee-table-header-data';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  columnGap = 0;
  columnHeaderData = [];

  constructor() { }

  ngOnInit() {
    this.columnGap = EmployeeTableHeaderData.columnGap;
    this.columnHeaderData = EmployeeTableHeaderData.columnHeaderData;
  }

}
