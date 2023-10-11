import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { PupComponent } from './pup/pup.component';
import { DepartmentListComponent } from './department-list/department-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    extraCrewature!:string

    @ViewChild(SharkDirective)
    set appShark(directive: SharkDirective){
        // this.extraCrewature = directive.creature
    };

    @ViewChild('myInput') myInput!: ElementRef

    @ViewChild(PupComponent) pup!: PupComponent;

    ngAfterViewInit(){
      console.log("View Init"+this.extraCrewature);//Dolphin
      // this.myInput.nativeElement.value = "Blue Whale";
      // console.log(this.pup.whoAmI())
    }
    ngOnInit(){
      // console.log("Init"+this.extraCrewature);
      this.d = this.outsideComp.display()
    }

    name = "Welcome John"
    EmpID = "EMP14"
    disabled = false 
    public numbers = [0,1,2,3,4,5,6,7,8]
    public num:Number = 0

    /////////////////////////////////////////////////////
  
    @ViewChild('dobInput') dateOfBirth!: ElementRef;
    @ViewChild('ageInput') age!: ElementRef;
    @ViewChild(DepartmentListComponent, {static:true}) public outsideComp!: DepartmentListComponent;
    d:any
    calculateAge(){
      let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
      let currentYear = new Date().getFullYear();
      let age =currentYear - birthYear;
      this.age.nativeElement.value = age;
      console.log(this.outsideComp.display())
    }
    
}
