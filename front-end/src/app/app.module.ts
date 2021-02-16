import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcelService } from './hr/export/excel.service';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { FormatdatePipe } from './pipe/formatdate.pipe';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ExportComponent } from './hr/export/export.component';
import { EmployeeComponent } from './hr/employee/employee.component';
import { AddcodeComponent } from './hr/addcode/addcode.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { HomeComponent } from './hr/home/home.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';




@NgModule({
  declarations: [
    AppComponent,
    FormatdatePipe,
    ExportComponent,
    EmployeeComponent,
    HomeComponent,
    AddcodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    AccordionModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    MessagesModule,
    ConfirmDialogModule,
    ToolbarModule,
    DialogModule,
    RadioButtonModule


  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
