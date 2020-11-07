import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-headers',
  templateUrl: './table-headers.component.html',
  styleUrls: ['./table-headers.component.scss']
})
export class TableHeadersComponent {
  @Input() headerGap = 0;
  @Input() headerData = [];

  constructor() { }
}
