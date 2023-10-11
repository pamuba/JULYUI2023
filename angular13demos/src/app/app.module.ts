import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EventsComponent } from './events/events.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { DirecivesComponent } from './direcives/direcives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmplListComponent } from './empl-list/empl-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptsComponent } from './intercepts/intercepts.component';
import { CustomHttpInterceptorInterceptor } from './custom-http-interceptor.interceptor';
import { SharkDirective } from './shark.directive';
import { PupComponent } from './pup/pup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppCom1Component } from './app-com1/app-com1.component';
import { AppCom2Component } from './app-com2/app-com2.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    EventsComponent,
    TwowayComponent,
    DirecivesComponent,
    PipesComponent,
    EmplListComponent,
    EmpDetailComponent,
    InterceptsComponent,
    SharkDirective,
    PupComponent,
    routingComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    AppCom1Component,
    AppCom2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
