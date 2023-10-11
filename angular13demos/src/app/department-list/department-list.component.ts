import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  selectedId:any
  constructor(private router: Router, private route: ActivatedRoute){}
  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"ReactJS"},
    {"id":3, "name":"React Native"},
    {"id":4, "name":"Bootstrap"},
    {"id":5, "name":"MongoDB"},
  ]

  onSelect(department:any){
      this.router.navigate(['/departments', department.id])
  }
  isSeleted(department:any){
    return (this.selectedId === department.id) ? true : false;
  }
  ngOnInit(){
      this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id')!)
      this.selectedId = id
  }); 
  }

  public display(){
    return "The Display"
  }
}
