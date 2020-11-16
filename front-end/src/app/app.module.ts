import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms'; 
import { ExcelService } from './excel.service'; 
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import { FormatdatePipe } from './pipe/formatdate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormatdatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    CalendarModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
