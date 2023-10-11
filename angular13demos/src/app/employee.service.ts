import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/data/employees.json"
  constructor(private _http:HttpClient) { }

  //HttpClient VS HttpClientModule
  getEmployees(){
    return this._http.get(this._url)
  }
}
