import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ExcelService } from './hr/export/excel.service';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { FormatdatePipe } from './pipe/formatdate.pipe';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ExportComponent } from './hr/export/export.component';
import { EmployeeComponent } from './hr/employee/employee.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';






@NgModule({
  declarations: [
    AppComponent,
    FormatdatePipe,
    ExportComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule
   


  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
