import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchString = '';
  @Output() search = new EventEmitter();
  @Output() searchCleared = new EventEmitter();

  constructor() { }

  onSearch() {
    if (this.searchString && this.searchString.trim()) {
      this.search.emit(this.searchString);
    }
  }

  onInput() {
    if (!this.searchString) {
      this.searchCleared.emit(this.searchString);
    }
  }
}
