import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableHeadersComponent } from './commonComponents/table-headers/table-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TableHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
