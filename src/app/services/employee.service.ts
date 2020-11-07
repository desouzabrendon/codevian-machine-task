import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(searchString): Observable<any> {
    let url = BASE_URL + 'employee';
    if (searchString) {
      url = url + '?search=' + encodeURIComponent(searchString);
    }
    return this.httpClient.get(url);
  }

  getEmployeeById(employeeId): Observable<any> {
    const url = BASE_URL + 'employee/' + employeeId;
    return this.httpClient.get(url);
  }

  addEmployee(payload): Observable<any> {
    const url = BASE_URL + 'employee';
    return this.httpClient.post(url, payload);
  }

  updateEmployee(employeeId, payload): Observable<any> {
    const url = BASE_URL + 'employee/' + employeeId;
    return this.httpClient.put(url, payload);
  }
}
