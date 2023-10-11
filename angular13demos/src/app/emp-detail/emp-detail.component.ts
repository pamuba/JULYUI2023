import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  template: `
    <h2>Employee List</h2>
     <ul *ngFor="let emp of employees">
        <li>
          {{emp.id}} {{emp.name}} {{emp.age}}
        </li>
     </ul>
  `,
  styles: [``]
})
export class EmpDetailComponent {
  public employees: any

   constructor(private _empService:EmployeeService){}

   ngOnInit(){
     this._empService.getEmployees()
         .subscribe(data => this.employees = data)

   }
}
